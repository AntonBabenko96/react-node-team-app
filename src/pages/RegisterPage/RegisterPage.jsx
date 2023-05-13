import { AuthForm } from 'components/AuthForm/AuthForm';

import styles from '../MainPage/MainPage.module.scss';
import style from './RegisterPage.module.scss'

export default function RegisterPage() {
  return (
    <>
      <section className={styles.MainSection}>
        <div className="container">
          <div className={style.form}>
            <AuthForm />
          </div>
        </div>
      </section>
    </>
  );
}
