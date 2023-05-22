import UserPetsItem from 'components/UserPetsItem/UserPetsItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPets } from 'redux/pets/pets-operations';
import { userPetsList } from 'redux/pets/pets-selectors';
import { selectIsLogin } from 'redux/auth/selectors';
import styles from 'components/UserPetsList/UserPetsList.module.scss';
import notFoundImage from '../../img/notFound/notFound.png';

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
  useEffect(() => {
    if (isLogin) {
      dispatch(getPets());
    }
  }, [dispatch, isLogin]);

  const getDateOfBirth = value => {
    const date = new Date(value);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const birthDay = `${day.toString().padStart(2, `0`)}-${month
      .toString()
      .padStart(2, `0`)}-${year}`;
    return birthDay;
  };
  const elements = pets.map(
    ({ _id, photoURL, name, birth, breed, comments }) => {
      const birthDay = getDateOfBirth(birth);
      return (
        <UserPetsItem
          key={_id}
          photoURL={photoURL}
          name={name}
          date={birthDay}
          breed={breed}
          comments={comments}
          id={_id}
        />
      );
    }
  );

  return (
    <>
      {pets.length === 0 && (
        <div className={styles.notFound}>
          <p className={styles.notFoundText}>`Your pet list is empty :(`</p>
          <img
            className={styles.notFoundImg}
            src={notFoundImage}
            alt="Not Found"
          />
        </div>
      )}
      {pets && <ul className={styles.list}>{elements}</ul>}
    </>
  );
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
