import { ReactComponent as FavoriteIcon } from 'img/svg/heart.svg';
import { ReactComponent as LocationIcon } from 'img/svg/location.svg';
import { ReactComponent as ClockIcon } from 'img/svg/clock.svg';
import { ReactComponent as MaleIcon } from 'img/svg/male.svg';
import kitten from 'img/kitten.jpg';

import s from './NoticeCategoryItem.module.scss';

export default function NoticeCategoryItem({
  category,
  place,
  age,
  sex,
  kind,
}) {
  return (
    <li className={s.item}>
      <div className={s.category}>
        <p className={s.categoryText}>{category}</p>
      </div>
      <button className={s.favorite}>
        <FavoriteIcon className={s.favoriteIcon} />
      </button>
      <img className={s.img} src={kitten} alt="Pet" />
      <div className={s.wrapper}>
        <div className={s.box}>
        <LocationIcon className={s.infoIcon} />
        <p className={s.info}>{place}</p>
        </div>
        <div className={s.box}>
        <ClockIcon className={s.infoIcon} />
        <p className={s.info}>{age}</p>
        </div>
        <div className={s.box}>
        <MaleIcon className={s.infoIcon} />
        <p className={s.info}>{sex}</p>
        </div>
      </div>
      <h2 className={s.title}>Сute {kind} looking for a home</h2>
      <button className={s.btn} type='button'>Learn more</button>
    </li>
  );
}
