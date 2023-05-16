import style from './NotFound.module.scss';
import fourZeroFour from '../../img/notFound/notFound.png';
import { Link } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';


export default function NotFound() {


  return (
    <>
      <section className={style.NotFoundSection}>
        <div className="container">
          <h1 className={style.Title}>
            <span className={style.FirstLine}>Ooops!</span>
            <span className={style.SecondLine}>This page not found  &#58;&#40;</span>
          </h1>

          <picture>
            <img className={style.image} src={fourZeroFour} alt="" />
          </picture>
          <Link className={style.mainBtn} to="/main">To main page<PetsIcon className={style.modalIcon} /></Link>
        </div>
      </section>
    </>
  );
}
