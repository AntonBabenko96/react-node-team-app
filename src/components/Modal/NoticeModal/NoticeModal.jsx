import Style from './NoticeModal.module.scss';
import { BsHeart } from 'react-icons/bs';

import placeholder from 'img/placeholder.png';

export default function NoticeModal({
  name,
  title,
  breed,
  photoURL,
  category,
  type,
  location,
  sex,
  comment,
  birth
}) {
  const imgBeseURL = 'https://your-pet-backend.onrender.com/';
  const yearOfBirth = birth && new Date(birth).getFullYear();
  const difference = birth ? new Date().getFullYear() - yearOfBirth : 'n/a';
  const age = difference === 1 ? `${difference} year` : `${difference} years`;

  return (
    <>
      <div>
        <div className={Style.Notice}>
          <div className={Style.NoticePhotoWrapper}>
            <img
              className={Style.NoticePhoto}
              src={photoURL ? `${imgBeseURL}${photoURL}` : placeholder}
              alt="Pet"
            />
            <p className={Style.StickyValue}>{category}</p>
          </div>
          <div className={Style.WrapperText}>
            <h3 className={Style.NoticeTitle}>{title}</h3>
            <ul className={Style.NoticeList}>
              <li>
                <h4>Name:</h4>
                <p>{name}</p>
              </li>
              <li>
                <h4>Type:</h4>
                <p>{type}</p>
              </li>
              <li>
                <h4>Birthday:</h4>
                <p>{age}</p>
              </li>
              <li>
                <h4>Breed:</h4>
                <p>{breed}</p>
              </li>
              <li>
                <h4>Place:</h4>
                <p>{location}</p>
              </li>
              <li>
                <h4>The sex:</h4>
                <p>{sex}</p>
              </li>
              <li>
                <h4>Email:</h4>
                <a href="mailto: user@gmail.com">user@gmail.com</a>
              </li>
              <li>
                <h4>Phone:</h4>
                <a href="tel: +380981234567">+380981234567</a>
              </li>
            </ul>
          </div>
        </div>
        <p className={Style.NoticeComent}>
          <strong>Comments:</strong> {comment}
        </p>
        <div className={Style.ButtonWrapper}>
          <button className={Style.ButtonContact}>Contact</button>
          <button className={Style.ButtonFavorite}>
            Add to <BsHeart className={Style.icon} />
          </button>
        </div>
      </div>
    </>
  );
}
