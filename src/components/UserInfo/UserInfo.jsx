// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getUserParams } from '../../api';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import styles from './UserPage.module.scss';

// const UserInfo = () => {
//   const [details, setDetails] = useState([]);
//   const [error, setError] = useState('');
//   const params = useParams();

//   useEffect(() => {
//     const fetchParams = async () => {
//       try {
//         const { data } = await getUserParams(params.userId);
//         setDetails(data);
//       } catch (error) {
//         setError(Notify.failure(`Something went wrong. ${error.message}`));
//       }
//     };
//     fetchParams();
//   }, [params.userId]);
// //   const { avatarURL, name, birthday, phone, city, email } = details;
//   return (
//     <>
//         {error ? (
//         <p>{error} </p>
//       ) : (
//           <div className={`container ${styles.page}`}>
//           <h3 className={styles.title}>My information:</h3>
//         <div className={styles.infobox}>
//           <div className={styles.photo}>
//                  <img
//                     src={`https://image...${avatarURL}`}
//                     alt={name}
//                   width="182"
//                   height="182"
//                   />
//                 {!avatarURL && <UserIcon className={styles.user__icon} />}

//               </div>
//               <CameraIcon className={styles.user__camera} />
//               <p className={styles.edit}>Edit photo</p>

//               <div className={styles.information}>
//               <EditIcon className={styles.user__camera} />
//               <p className={styles.text}>
//               Name: <input className={styles.input}></input>
//             </p>

//             <p className={styles.text}>
//               Email: <input className={styles.input}></input>
//             </p>

//             <p className={styles.text}>
//               Birthday: <input className={styles.input}></input>
//             </p>

//             <p className={styles.text}>
//               Phone:<input className={styles.input}></input>
//             </p>

//             <p className={styles.text}>
//               City:<input className={styles.input}></input>
//             </p>
//           </div>
//           <div className={styles.logout}>
//             <p className={styles.logout__text}>Log Out</p>
//           </div>
//         </div>
//         <div className={styles.pets}>
//           <h3 className={styles.title__pets}>My pets:</h3>
//           <button className={styles.button}>Add Pet <span className={styles.plus}>+</span></button>
//         </div>
//         <div className={styles.petsbox}></div>

//           </div>
//           )}
//     </>
//   )
// }
// export default UserInfo

import { ReactComponent as CameraIcon } from 'img/svg/camera.svg';
import { ReactComponent as EditIcon } from 'img/svg/edit.svg';
import { ReactComponent as LogoutIcon } from 'img/svg/logout.svg';
import { ReactComponent as DefaultIcon} from 'img/svg/photo-default.svg';

import styles from './UserInfo.module.scss';
export default function UserInfo() {
  return (
    <>
      <div>
        <div className={styles.infobox}>
          <div className={styles.decktop}>
            <div className={styles.photo}>
              {/* <img></img> */}
              <DefaultIcon className={styles.user__icon} />
            </div>
            <div className={styles.camera__title}>
              <CameraIcon className={styles.user__camera} />
              <p className={styles.edit}>Edit photo</p>
            </div>
          </div>
          <div className={styles.decktop}>
            <div className={styles.information}>
              < p className={styles.text}>
                Name: <input className={styles.input}></input><EditIcon className={styles.edit__icon} />
              </p>

              <p className={styles.text}>
                Email: <input className={styles.input}></input><EditIcon className={styles.edit__icon} />
              </p>

              <p className={styles.text}>
                Birthday: <input className={styles.input}></input><EditIcon className={styles.edit__icon} />
              </p>

              <p className={styles.text}>
                Phone:<input className={styles.input}></input><EditIcon className={styles.edit__icon} />
              </p>

              <p className={styles.text}>
                City:<input className={styles.input}></input><EditIcon className={styles.edit__icon} />
              </p>
            </div>
            <div className={styles.logout}>
              <LogoutIcon className={styles.logout__icon} />
              <p className={styles.logout__text}>Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
