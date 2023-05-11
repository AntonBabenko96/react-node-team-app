import { ReactComponent as SearchIcon } from 'img/svg/search.svg';
import { ReactComponent as CrossIcon } from 'img/svg/cross.svg';

export default function NoticesSearch () {
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