import style from './Header.module.scss';

export default function Header() {
  return (
    <div className="container">
      <div className={style.header}>Hello BC43</div>
      <p className={style.text}>This is the finish line</p>
    </div>
  );
}
