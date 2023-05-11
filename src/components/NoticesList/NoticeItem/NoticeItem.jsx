import { ReactComponent as FavoriteIcon } from "images/svg/heart.svg";
import { ReactComponent as LocationIcon } from "images/svg/location.svg";
import { ReactComponent as ClockIcon } from "images/svg/clock.svg";
import { ReactComponent as MaleIcon } from "images/svg/male.svg";
import kitten from "images/kitten.jpg";

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