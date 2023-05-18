import UserPetsList from 'components/UserPetsList/UserPetsList';
import UserInfo from 'components/UserInfo/UserInfo';
import styles from './UserPage.module.scss';

export default function UserPage() {
  return (
    <section>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.descktop__user}>
            <h3 className={styles.title}>My information:</h3>
            <UserInfo />
          </div>
          <div className={styles.pets}>
            <div className={styles.descktop__pets}>
              <div className={styles.title__button}>
                <h3 className={styles.title__pets}>My pets:</h3>
                <button className={styles.button}>
                  Add Pet <span className={styles.plus}>+</span>
                </button>
              </div>
              <UserPetsList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
