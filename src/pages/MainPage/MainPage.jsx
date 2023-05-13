import Style from './MainPage.module.scss';
import phoneImage from '../../img/mainPage/picturesPhone.png';
import tabletImage from '../../img/mainPage/picturesTablet.png';
import desktopImage from '../../img/mainPage/picturesDesktop2.png';
export default function MainPage() {
  return (
    <>
      <section className={Style.MainSection}>
        <div className="container">
          <h1 className={Style.Title}>Take good care of your small pets</h1>
          <picture>
            <source media="(min-width: 1200px)" srcSet={desktopImage} />
            <source media="(min-width: 768px)" srcSet={tabletImage} />
            <img className="apartments__image" src={phoneImage} alt="" />
          </picture>
        </div>
      </section>
    </>
  );
}
