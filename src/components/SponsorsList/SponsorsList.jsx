// import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './sponsorsList.module.scss';

const SponsorsList = ({ sponsors }) => {
  const [isWorkHoursOpen, setIsWorkHoursOpen] = useState(false);

  const location = useLocation();

  const elements = sponsors.map(
    ({
      _id,
      title,
      url,
      addressUrl,
      imageUrl,
      address,
      workDays,
      phone,
      email,
    }) => (
      <li key={_id} className={styles.friends__item}>
        <Link
          target="_blank"
          to={url}
          state={{ from: location }}
          className={styles.friends__link}
        >
          <p className={styles.friends__subtitle}>{title}</p>
        </Link>
        <div className={styles.address__wrapper}>
          <img
            src={imageUrl}
            alt="Company`s logo"
            className={styles.friends__logo}
          ></img>
          <ul className={styles.address__list}>
            <li className={styles.address__item}>
              <p className={styles.address__itemTitle}>Time:</p>
              {Array.isArray(workDays) ? (
                <a
                  href="#"
                  className={styles.address__itemLink}
                  onClick={() => setIsWorkHoursOpen(!isWorkHoursOpen)}
                >
                  {isWorkHoursOpen ? 'Hide Work Hours' : 'Show Work Hours'}
                </a>
              ) : (
                <span>{workDays}</span>
              )}
              {isWorkHoursOpen && Array.isArray(workDays) && (
                <div className={styles.workHours__container}>
                  <ul>
                    {Array.isArray(workDays) &&
                      workDays.map((day, index) => (
                        <li key={index}>
                          <span>{day.day}: </span>
                          {day.isOpen ? `${day.from} - ${day.to}` : 'Closed'}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </li>
            <li className={styles.address__item}>
              <p className={styles.address__itemTitle}>Adress:</p>
              <a
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.address__itemLink}
              >
                {address}
              </a>
            </li>
            <li className={styles.address__item}>
              <p className={styles.address__itemTitle}>Email:</p>
              <a href={`mailto:${email}`} className={styles.address__itemLink}>
                {email}
              </a>
            </li>
            <li className={styles.address__item}>
              <p className={styles.address__itemTitle}>Phone:</p>
              <a href={`tel:${phone}`} className={styles.address__itemLink}>
                {phone}
              </a>
            </li>
          </ul>
        </div>
      </li>
    )
  );
  return (
    <>
      <h1 className={styles.title}>Our friends</h1>
      <ul className={styles.friends__list}>{elements}</ul>
    </>
  );
};

export default SponsorsList;

// SponsorsList.propTypes = {
//   sponsors: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//       addressUrl: PropTypes.string.isRequired,
//       address: PropTypes.string.isRequired,
//       workDays: PropTypes.string.isRequired,
//       phone: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//     })
//   ),
// };
