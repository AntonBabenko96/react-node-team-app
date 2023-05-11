import { ReactComponent as FavoriteIcon } from "img/svg/heart.svg";
import { ReactComponent as LocationIcon } from "img/svg/location.svg";
import { ReactComponent as ClockIcon } from "img/svg/clock.svg";
import { ReactComponent as MaleIcon } from "img/svg/male.svg";
import kitten from "img/kitten.jpg";

export default function NoticeItem({category, place, age, sex, kind}) {
    return (<li>
        <p>{category}</p>
        <button>
            <FavoriteIcon />
        </button>
        <img src={kitten} alt="Pet" />
        <p> <LocationIcon /> {place}</p>
        <p> <ClockIcon /> {age}</p>
        <p> <MaleIcon /> {sex}</p>
        <h2>Сute {kind} looking for a home</h2>
    </li>)
}