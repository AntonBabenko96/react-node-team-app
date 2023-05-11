import NoticeItem from "./NoticeItem/NoticeItem"

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
        category: "sell",
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

export default function NoticesList() {
    // const elements = tempNotices.map(item => console.log(item.id))
    const elements = tempNotices.map(({id, category, place, age, sex, kind }) => {
        return <NoticeItem key={id} category={category} place={place} age={age} sex={sex} kind={kind}/>
    })

    return <ul>
        {elements}
    </ul>
}