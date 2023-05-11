const mainCategoriesList = [{id: 1, name: "sell"}, {id: 2, name: "lost/found"}, {id: 3, name: "in good hands"}];
const userCategoriesList = [{id: 4, name: "favorite ads"}, {id: 5, name: "my adss"}];

export default function NoticesCategoriesNav() {
    const mainCategories = mainCategoriesList.map(({id, name}) => <button key={id} type="button">{name}</button>)
    const userCategories = userCategoriesList.map(({id, name}) => <button key={id} type="button">{name}</button>)

    return<div>
    {mainCategories}
    {userCategories}
    </div>
}