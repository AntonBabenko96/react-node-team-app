import { ReactComponent as FavoriteIcon } from 'img/svg/heart.svg';
import { ReactComponent as TrashIcon } from 'img/svg/trash.svg';
import { ReactComponent as LocationIcon } from 'img/svg/location.svg';
import { ReactComponent as ClockIcon } from 'img/svg/clock.svg';
import { ReactComponent as MaleIcon } from 'img/svg/male.svg';
import placeholder from 'img/placeholder.png';

import s from './NoticeCategoryItem.module.scss';

export default function NoticeCategoryItem({
  id,
  category,
  img,
  title,
  place,
  age,
  sex,
  kind,
  favorite,
  onLearnMoreBtnClick,
  onFavoriteBtnClick,
}) {
  const imgBeseURL = "https://your-pet-backend.onrender.com/";

  return (
    <li className={s.item}>
      <div className={s.category}>
        <p className={s.categoryText}>{category}</p>
      </div>
      <button className={`${s.userBtn} ${s.favorite}`} onClick={() => onFavoriteBtnClick(id)}>
        <FavoriteIcon className={s.icon} />
      </button>
      <button className={`${s.userBtn} ${s.delete}`}>
        <TrashIcon className={favorite ? s.favoriteIcon : s.icon} />
      </button>
      <img className={s.img} src={img ? `${imgBeseURL}${img}` : placeholder} alt="Pet" />
      <div className={s.wrapper}>
        <div className={s.box}>
          <LocationIcon className={`${s.icon} ${s.infoIcon}`} />
          <p className={s.info}>{place}</p>
        </div>
        <div className={s.box}>
          <ClockIcon className={`${s.icon} ${s.infoIcon}`} />
          <p className={s.info}>{age}</p>
        </div>
        <div className={s.box}>
          <MaleIcon className={`${s.icon} ${s.infoIcon}`} />
          <p className={s.info}>{sex}</p>
        </div>
      </div>
      <h2 className={s.title}>
        {title ? title : `Сute ${kind} looking for a home`}
      </h2>
      <button className={s.btn} type="button" onClick={() => onLearnMoreBtnClick(id)}>
        Learn more
      </button>
    </li>
  );
}
