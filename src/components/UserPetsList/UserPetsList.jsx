import UserPetsItem from "components/UserPetsItem/UserPetsItem";
import styles from "components/UserPetsList/UserPetsList.module.scss"


const pets = [
    {
        id: 1,
        imageURL: "",
        name: "Middle",
        date: "10.12",
        breed: "male",
        comments: "cat is a awesom"
    },
    {
         id: 2,
        imageURL: "",
        name: "Jun",
        date: "12.12",
        breed: "male",
        comments: "dog is amaising"
    },
    {
        id: 3,
        imageURL: "",
        name: "Senior",
        date: "22.02",
        breed: "male",
        comments: ""
    }
   
]

export default function UserPetsList() {
    const elements = pets.map(({ id, imageURL, name, date, breed, comments }) => {
        return <UserPetsItem key={id} imageURL={imageURL} name={name} date={date} breed={breed} comments={comments} />
    })

    return <ul className={styles.list}>
        {elements}
    </ul>
}


