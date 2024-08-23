import { useState } from "react"
// React-icons
import { MdOutlineSearch } from "react-icons/md";
// -------------------------------------------------


const SearchBox = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const handleSearch = (e) => {
        console.log(e.target.value)
        setSearchQuery(e.target.value)
    }
    // ------ SearchBox --------
    return (
        <div className="search-box-holder">
            <div className="input-holder">
                <MdOutlineSearch size={28} color="#808080" className="search-icon" />
                <input
                    className="search-input"
                    type="text"
                    placeholder="search keywords"
                    name="search"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e)}
                />
            </div>
        </div>
    )
}

export default SearchBox
