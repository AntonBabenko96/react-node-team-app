import { createPortal } from 'react-dom';
import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.scss';

const loaderRoot = document.querySelector('#loader-root');

export default function Loader() {
  return createPortal(
    <div className={styles.loader}>
      <Circles color="#4ab2d8" height={300} width={300} />
    </div>,
    loaderRoot
  );
};