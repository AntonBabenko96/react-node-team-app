import Style from './NoticeModal.module.scss';
import { BsHeart } from 'react-icons/bs';



export default function NoticeModal() {


  return (
    <>
      <div>
        <div className={Style.Notice}>
          <div className={Style.NoticePhotoWrapper}>
            <img
              className={Style.NoticePhoto}
              src="https://petsi.net/images/dogbreed/big/angliyskiy-fokskhaund.jpg"
              alt=""
            />
            <p className={Style.StickyValue}>In good hands</p>
          </div>
          <div className={Style.WrapperText}>
    
            <h3 className={Style.NoticeTitle}>Cute Dog Looking for a home</h3>
            <ul className={Style.NoticeList}>
              <li>
                <h4>Name:</h4>
                <p>Rich</p>
              </li>
              <li>
                <h4>Type:</h4>
                <p>Dog</p>
              </li>
              <li>
                <h4>Birthday:</h4>
                <p>21.09.2020</p>
              </li>
              <li>
                <h4>Breed:</h4>
                <p>Pomeranian</p>
              </li>
              <li>
                <h4>Place:</h4>
                <p>Lviv</p>
              </li>
              <li>
                <h4>The sex:</h4>
                <p>male</p>
              </li>
              <li>
                <h4>Email:</h4>
                <a href="mailto: user@gmail.com">user@gmail.com</a>
              </li>
              <li>
                <h4>Phone:</h4>
                <a href="tel: +380981234567">+380981234567</a>
              </li>
            </ul>
          </div>
        </div>
        <p className={Style.NoticeComent}>
          <strong>Comments:</strong> .....
        </p>
        <div className={Style.ButtonWrapper}>
          <button className={Style.ButtonContact}>Contact</button>
          <button className={Style.ButtonFavorite}>
            Add to <BsHeart className={Style.icon} />
          </button>
        </div>
      </div>
    </>
  );
}
