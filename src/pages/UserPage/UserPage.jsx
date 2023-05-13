
import LogOutButton from "components/LogOutButton/LogOutButton";

export default function UserPage() {
  return (
    <div style={{alignItems:"center"}}>
    <LogOutButton/>
    </div>)


import styles from './UserPage.module.scss';


// name: string, // null if the user is newly registered
//   birthday: number, // null
//   phone: string, // null
//   city: string, // null
//   email: string,
//   avatarURL: string
// }

import UserPetsList from 'components/UserPetsList/UserPetsList';
import UserInfo from 'components/UserInfo/UserInfo';

export default function UserPage() {
  return (
   <section>
      <div className="container">
        <h3 className={styles.title}>My information:</h3>
        <UserInfo />
          <div className={styles.pets}>
          <h3 className={styles.title__pets}>My pets:</h3>
          <button className={styles.button}>Add Pet <span className={styles.plus}>+</span></button>
        </div>
        <UserPetsList />
        </div>
      
   </section>

  )

}

