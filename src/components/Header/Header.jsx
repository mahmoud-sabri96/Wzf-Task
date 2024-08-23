import React from 'react'
import SearchBox from '../SearchBox/SearchBox'
// ---------------------------------------------------------------------------
const Header = ({ showSearch }) => {
    return (
        <div>
            bavbar
            {showSearch && <SearchBox />}
        </div>
    )
}

export default Header
