import { ReactComponent as SearchIcon } from 'images/svg/search.svg';
import { ReactComponent as CrossIcon } from 'images/svg/cross.svg';

export default function Search () {
    return (
        <form>
            <input type="text" placeholder='Search'/>
            <button>
                <SearchIcon/>
            </button>
            <button type='button'>
                <CrossIcon/>
            </button>
        </form>
    )
}