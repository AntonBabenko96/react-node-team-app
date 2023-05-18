import styles from './UserPage.module.scss';
import UserPetsList from 'components/UserPetsList/UserPetsList';
import UserInfo from 'components/UserInfo/UserInfo';

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

// import styles from './UserPage.module.scss';
// import UserPetsList from 'components/UserPetsList/UserPetsList';
// import UserInfo from 'components/UserInfo/UserInfo';

// import { useState, useEffect } from 'react';
// import { getUserPets } from '../../api/user-pets';

// export default function UserPage() {
//   const [pets, setPets] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         setLoading(true);
//         const { data } = await getUserPets();
//         setPets(data);
//       } catch ({ response }) {
//         const errorMessage = response.data.message || 'Cannot fetch pets';
//         setError(errorMessage);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPets();
//   }, []);

//   return (
//     <section>
//       <div className="container">
//         <h3 className={styles.title}>My information:</h3>
//         <UserInfo />
//         <div className={styles.pets}>
//           <h3 className={styles.title__pets}>My pets:</h3>
//           <button className={styles.button}>
//             Add Pet <span className={styles.plus}>+</span>
//           </button>
//         </div>
//         {loading && <p>....Loading</p>}
//         {error && <p className={styles.error}>{error}</p>}
//         <UserPetsList />
//         {/* <UserPetsList data={pets}/>  */}
//       </div>
//     </section>
//   );
// }
