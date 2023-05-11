import NoticeCategoryItem from "components/NoticeCategoryItem/NoticeCategoryItem"

import styles from "./NoticesCategoriesList.module.scss"

const tempNotices = [
    {
        id: 1,
        category: "sell",
        imageURL: "",
        place: "Lviv",
        age: "1 year",
        sex: "male",
        kind: "cat"
    },
    {
        id: 2,
        category: "in good hands",
        imageURL: "",
        place: "Lviv",
        age: "1 year",
        sex: "male",
        kind: "cat"
    },
    {
        id: 3,
        category: "sell",
        imageURL: "",
        place: "Lviv",
        age: "1 year",
        sex: "male",
        kind: "cat"
    },
    {
        id: 4,
        category: "sell",
        imageURL: "",
        place: "Lviv",
        age: "1 year",
        sex: "male",
        kind: "cat"
    },
    {
        id: 5,
        category: "sell",
        imageURL: "",
        place: "Lviv",
        age: "1 year",
        sex: "male",
        kind: "cat"
    },
    {
        id: 6,
        category: "sell",
        imageURL: "",
        place: "Lviv",
        age: "1 year",
        sex: "male",
        kind: "cat"
    }
]

export default function NoticesCategoriesList() {
    const elements = tempNotices.map(({id, category, place, age, sex, kind }) => {
        return <NoticeCategoryItem key={id} category={category} place={place} age={age} sex={sex} kind={kind}/>
    })

    return <ul className={styles.list}>
        {elements}
    </ul>
}