import UserPetsItem from "components/UserPetsItem/UserPetsItem";
import styles from "components/UserPetsList/UserPetsList.module.scss"


const pets = [
    {
        id: 1,
        photoURL: "",
        name: "Middle",
        date: "10.12",
        breed: "male",
        comments: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci molestias impedit dicta delectus recusandae suscipit aliquam, voluptas dolore cupiditate sint ullam facilis cum asperiores natus esse distinctio dolorum deleniti, tenetur magni minima pariatur quaerat! Tempora quos dolorem eos suscipit amet ut provident quibusdam at recusandae dicta! Quidem, incidunt. Enim"
    },
    {
         id: 2,
         photoURL: "",
        name: "Jun",
        date: "12.12",
        breed: "male",
        comments: "dog is amaising dog is amaisingdog is amaising"
    },
    {
        id: 3,
        photoURL: "",
        name: "Senior",
        date: "22.02",
        breed: "male",
        comments: ""
    }
]
export default function UserPetsList() {
    const elements = pets.map(({ id, photoURL, name, date, breed, comments }) => {
        return <UserPetsItem key={id}   photoURL={photoURL} name={name} date={date} breed={breed} comments={comments} />
    })
    return <ul className={styles.list}>
        {elements}
    </ul>
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