import { Fragment } from "react"
// Component
import {
    JobCard,
    Layout,
    PageTitle,
    SearchBox,
    SideContent
} from "../../components"
// Redux
import { useDispatch, useSelector } from "react-redux"
// Services
import { searchJobsByName } from "../../redux/services/jobs_services"
// Slices
import { updateSearchHistory } from "../../redux/slices/jobs_slice"
// --------------------------------------------------------------------------

const SearchPage = () => {

    const dispatch = useDispatch()

    const {
        isLoadingSearchResult,
        searchQuery,
        searchResults,
        searchHistory
    } = useSelector(state => state.jobs)

    const pageTitle = searchQuery ?
        `“${searchQuery}” jobs`
        :
        searchHistory[0] ?
            `“${searchHistory[0]}” jobs`
            :
            'jobs'

    const count = searchResults?.length ? searchResults?.length : false

    const handleSearch = (searchTerm = searchHistory[0]) => {
        dispatch(searchJobsByName(searchTerm))
        dispatch(updateSearchHistory(searchTerm))
    }

    if (isLoadingSearchResult) {
        return (
            <Layout>
                <SearchBox onSearch={handleSearch} />
                <h2 style={{ color: '#0046b2' }} >Loading Data ...</h2>
            </Layout>
        )
    }

    // ------ JSX Code -----
    return (
        <Layout >

            <SearchBox onSearch={handleSearch} />

            <PageTitle title={pageTitle} count={count} />

            <section className="search-page-container" >

                <div className="search-page-left-side">

                    {(!isLoadingSearchResult && !searchResults?.length) &&
                        <h2 style={{ color: '#0046b2' }}>No Data Found</h2>
                    }

                    {searchResults?.map(job =>
                        <Fragment key={job?.id}>
                            <JobCard jobData={job} />
                        </Fragment>
                    )}
                    
                </div>

                <div className="search-page-right-side">
                    <SideContent
                        routeType='search'
                        title='Search history :'
                        linksList={searchHistory?.slice(0, 5)}
                    />
                </div>

            </section>
        </Layout>
    )
}

export default SearchPage