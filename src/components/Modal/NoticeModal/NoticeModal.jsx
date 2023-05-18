import Style from './NoticeModal.module.scss';
import { BsHeart } from 'react-icons/bs';

import placeholder from 'img/placeholder.png';
import { getDateFormat } from 'shared/utils/getDateFormat';

let email = '';
let phone = '';

export default function NoticeModal({
  _id,
  name,
  title,
  breed,
  photoURL,
  category,
  type,
  location,
  sex,
  comments,
  birth,
  owner,
  notices,
  onFavoriteBtnClick,
}) {
  const imgBeseURL = 'https://your-pet-backend.onrender.com/';
  const date = getDateFormat(birth);
  if (owner) {
    email = owner.email ? owner.email : 'no data';
    phone = owner.phone ? owner.phone : 'no data';
  }
  // const isFromModal = true;
  // console.log(notices)
  // const notice = notices.findIndex(item => item._id === _id);
  // const favorite = notice.favorite;
  // console.log("favorite in modal", favorite)

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
                <p>{date}</p>
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
                <a href={`mailto: ${email}`}>{email}</a>
              </li>
              <li>
                <h4>Phone:</h4>
                <a href={`tel: ${phone}`}>{phone}</a>
              </li>
            </ul>
          </div>
        </div>
        <p className={Style.NoticeComent}>
          <strong>Comments:</strong> {comments}
        </p>
        <div className={Style.ButtonWrapper}>
          <button className={Style.ButtonContact}>
            <a href={`tel: ${phone}`}>Contact</a>
          </button>
          <button
            className={Style.ButtonFavorite}
            onClick={() => onFavoriteBtnClick(_id)}
          >
            Add to <BsHeart className={Style.icon} />
          </button>
        </div>
      </div>
    </>
  );
}
