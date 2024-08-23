// React-Router-Dom
import { Link, useLocation } from 'react-router-dom'
// Components
import SearchBox from '../SearchBox/SearchBox'
// Routes Pathes
import { path } from "../../routes/pathes";
// ---------------------------------------------------------------------------
const Header = ({ showSearch }) => {
    const location = useLocation()
    const { pathname } = location
    // ----- JSx Code ------
    return (
        <>
            <nav className='navbar'>
                <Link className='logo' to={path?.home}>
                    JobsNow
                </Link>
                <ul className='tabs'>
                    <li>
                        <Link
                            className={`${pathname === path?.home ? 'active-tab-link' : 'tab-link'}`}
                            to={path?.home}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${pathname === path?.search ? 'active-tab-link' : 'tab-link'}`}
                            to={path?.search}
                        >
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link className='tab-link'>
                            History
                        </Link>
                    </li>

                </ul>
            </nav>
            {showSearch && <SearchBox />}
        </>
    )
}

export default Header
