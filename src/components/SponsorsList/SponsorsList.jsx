// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './sponsorsList.module.scss';

const SponsorsList = ({ sponsors }) => {
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
            {/* <li className={styles.address__item}>
              <p className={styles.address__itemTitle}>Time:</p>
              <a href={workDays} className={styles.address__itemLink}>
                {workDays}
              </a>
            </li> */}
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
