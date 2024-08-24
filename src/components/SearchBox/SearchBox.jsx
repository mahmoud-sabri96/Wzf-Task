import { useCallback, useEffect, useRef } from "react"
// React-Router-Dom
import { useNavigate } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
// React-icons
import { MdOutlineSearch } from "react-icons/md";
// Routes Pathes
import { path } from "../../routes/pathes";
// Slices
import { setSearchQuery } from "../../redux/slices/jobs_slice";
// Loadash 
import { debounce } from "lodash";
// ----------------------------------------------------------------------------

const SearchBox = ({onSearch}) => {

    const inputRef = useRef(null);

    const dispatch = useDispatch()

    const { searchQuery } = useSelector(state => state.jobs)

    const navigate = useNavigate()

    const debounceSearch = useCallback(
        debounce((searchTerm) => {
            onSearch(searchTerm)
        }, 800)
        , []
    );

    const handleSearch = (e) => {
        dispatch(setSearchQuery(e.target.value))
        if (e.target.value.length >= 3) {
            navigate(path?.search)
            debounceSearch(e.target.value)
        } else {
            navigate(path?.home)
        }
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [])


    // ------ SearchBox --------
    return (
        <div className="search-box-holder">
            <div className="input-holder">
                <MdOutlineSearch size={28} color="#808080" className="search-icon" />
                <input
                    ref={inputRef}
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
