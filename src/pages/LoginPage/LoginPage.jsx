import { AuthForm } from 'components/AuthForm/AuthForm';

import styles from '../MainPage/MainPage.module.scss';
import style from '../RegisterPage/RegisterPage.module.scss'
import FilterButton from 'components/FilterButton/FilterButton';

export default function LoginPage() {
  return (
    <>
      <section className={styles.MainSection}>
      <FilterButton />
        <div className="container">
          <div className={style.form}>
     
            <AuthForm />
          </div>
        </div>
      </section>
    </>
  );
}
