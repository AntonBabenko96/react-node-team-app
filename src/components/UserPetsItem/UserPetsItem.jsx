
import { ReactComponent as TrashIcon } from 'img/svg/trash.svg';
import styles from './UserPetsItem.module.scss';
import notFoundImg from 'img/placeholder.png';

export default function UserPetsItem({
  id,
  imageURL,
  name,
  date,
  breed,
  comments,
}) {
  return (
    <li className={styles.pets__card} key={id}>
      {imageURL && (
        <img
          className={styles.pets__image}
          src={`https://image.tmdb.org/t/p/original${imageURL}`}
          alt={name}
          width="240"
        />
      )}
      {!imageURL && (
        <img
          className={styles.pets__image}
          src={notFoundImg}
          alt="pets"
          width="240"
        />
      )}
      <div className={styles.pets__content}>
        <div className={styles.trash__name}>
          <p className={styles.text}><span>Name:</span> {name}</p>
          <TrashIcon className={styles.trash__icon} />
        </div>
        <p className={styles.text}><span>Date of birth:</span> {date}</p>
        <p className={styles.text}><span>Breed:</span> {breed}</p>
        <p className={styles.text}><span>Comments:</span> {comments}</p>
      </div>
    </li>
  );
}
