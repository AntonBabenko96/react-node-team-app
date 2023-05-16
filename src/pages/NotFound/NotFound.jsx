import { Link } from 'react-router-dom';
import css from './NotFound.module.scss';

const NotFound = () => {
  return (
    <section className={css.bgnotfound}>
      <div className="container">
        <p className={css.text}>
          Ooops! <br></br>This page not found :(
        </p>
        <div className={css.wrapper}></div>
        <Link to="/" className={css.link}>
          To main page
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
