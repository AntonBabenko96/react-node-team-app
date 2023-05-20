import UserPetsItem from 'components/UserPetsItem/UserPetsItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPets } from 'redux/pets/pets-operations';
import { userPetsList } from 'redux/pets/pets-selectors';
import { selectIsLogin } from 'redux/auth/selectors';
import styles from 'components/UserPetsList/UserPetsList.module.scss';

import { ReactComponent as Puppy } from 'img/svg/puppy.svg';
import { addPetLoading } from 'redux/pets/pets-selectors';
// const pets = [
//   {
//     id: '1',
//     photoURL: '',
//     name: 'Middle',
//     date: '10.12',
//     breed: 'male',
//     comments:
//       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci molestias impedit dicta delectus recusandae suscipit aliquam, voluptas dolore cupiditate sint ullam facilis cum asperiores natus esse distinctio dolorum deleniti, tenetur magni minima pariatur quaerat! Tempora quos dolorem eos suscipit amet ut provident quibusdam at recusandae dicta! Quidem, incidunt. Enim',
//   },
//   {
//     id: '2',
//     photoURL: '',
//     name: 'Jun',
//     date: '12.12',
//     breed: 'male',
//     comments: 'dog is amaising dog is amaisingdog is amaising',
//   },
//   {
//     id: '3',
//     photoURL: '',
//     name: 'Senior',
//     date: '22.02',
//     breed: 'male',
//     comments: '',
//   },
// ];
export default function UserPetsList() {
  const pets = useSelector(userPetsList);
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const isLoading = useSelector(addPetLoading);
  useEffect(() => {
    if (isLogin) {
      dispatch(getPets());
    }
  }, [dispatch, isLogin]);

  const elements = pets.map(
    ({ _id, photoURL, name, date, breed, comments }) => {
      return (
        <UserPetsItem
          key={_id}
          photoURL={photoURL}
          name={name}
          date={date}
          breed={breed}
          comments={comments}
          id={_id}
        />
      );
    }
  );
  const showList =
  elements.length === 0 ? (
    <div className={styles.box}>
      <p className={styles.message}>No pets of your own yet</p>
      <div className={styles.pets__message}>
        <div>
          {' '}
          <Puppy className={styles.puppy} />
        </div>
        <p className={styles.pets__text}>
          <div className={styles.text__contain}>
            <span className={styles.text__animation}>"I</span>
            <span className={styles.text__animation}>believe</span>
            <span className={styles.text__animation}>in</span>
            <span className={styles.text__animation}>our</span>
            <span className={styles.text__animation}>meeting,</span>
            <span className={styles.text__animation}>and</span>
            <span className={styles.text__animation}>I</span>
            <span className={styles.text__animation}>am</span>
            <span className={styles.text__animation}>still</span>
            <span className={styles.text__animation}>waiting</span>
            <span className={styles.text__animation}>for</span>
            <span className={styles.text__animation}>you</span>
            <span className={styles.text__animation}>.</span>
            <span className={styles.text__animation}>.</span>
            <span className={styles.text__animation}>."</span>
          </div>
        </p>
      </div>
    </div>
  ) : (
    
    <ul className={styles.list}>{elements}</ul>
  );
  // return  showList
return <div>{isLoading ? <p>Loading...</p> : showList}</div>;
}




// const UserPetsList = ({ pets = [] }) => {

//     const elements = pets.map(({ _id, photoURL, name, date, breed, comments }) => {
//         return <UserPetsItem key={_id} photoURL={photoURL} name={name} date={date} breed={breed} comments={comments} />
//     })
//     return <ul className={styles.list}>
//         {elements}
//     </ul>
// }

// export default UserPetsList;
