import { getDateFormat } from 'shared/utils/getDateFormat';
import {ReactComponent as Heart} from "img/svg/heart.svg";
import placeholder from 'img/placeholder.png';

import Style from './NoticeModal.module.scss';


let email = '';
let phone = '';
const categoryItems = [
  { name: 'sell', value: 'sell' },
  { name: 'lost-found', value: 'lost/found' },
  { name: 'for-free', value: 'in good hands' },
];

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
  onFavoriteBtnClick,
}) {
  const date = getDateFormat(birth);
  if (owner) {
    email = owner.email ? owner.email : 'no data';
    phone = owner.phone ? owner.phone : 'no data';
  }

  const categoryItem = categoryItems.find(item => item.name === category);
  console.log(categoryItem)
  category = categoryItem.value;

  return (
      <div className={Style.wrapper}>
        <div className={Style.Notice}>
          <div className={Style.NoticePhotoWrapper}>
            <img
              className={Style.NoticePhoto}
              src={photoURL ? `${photoURL}` : placeholder}
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
          <button className={`${Style.ButtonContact} ${Style.button}`}>
            <a href={`tel: ${phone}`}>Contact</a>
          </button>
          <button
            className={`${Style.ButtonFavorite} ${Style.button}`}
            onClick={() => onFavoriteBtnClick(_id)}
          >
            Add to <Heart className={Style.icon} />
          </button>
        </div>
      </div>
  );
}
