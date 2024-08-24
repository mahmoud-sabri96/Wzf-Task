import { useEffect, useRef, useState } from "react"
// React-Router-Dom
import { useNavigate } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Services
import { searchJobsByName } from "../../redux/services/jobs_services";
// React-icons
import { MdOutlineSearch } from "react-icons/md";
import { path } from "../../routes/pathes";
import { setSearchQuery } from "../../redux/slices/jobs_slice";
// ----------------------------------------------------------------------------

const SearchBox = () => {

    const inputRef = useRef(null);

    const dispatch = useDispatch()

    const { searchQuery } = useSelector(state => state.jobs)

    const navigate = useNavigate()

    const handleSearch = (e) => {

        dispatch(setSearchQuery(e.target.value))

        if (e.target.value.length >= 3) {
            dispatch(searchJobsByName(e.target.value))
            navigate(path?.search)
        }
        else {
            cosnoel.log('hfsd')
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
