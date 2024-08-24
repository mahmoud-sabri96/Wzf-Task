// Component
import { JobCard, Layout, PageTitle, SideContent } from "../../components"
// Redux
import { useSelector } from "react-redux"
import { jobData } from "../HomePage"
import { useEffect } from "react"
// --------------------------------------------------------------------------

const SearchPage = () => {

    const { searchQuery, searchResuts } = useSelector(state => state.jobs)

    const pageTitle = searchQuery ? `“${searchQuery}” jobs` : 'jobs'
    const count = searchResuts?.length ? searchResuts?.length : false

    // useEffect(() => {

    // }, [searchQuery])

    // ------ JSX Code -----
    return (
        <Layout showSearch={true} >

            <PageTitle title={pageTitle} count={count} />

            <section className="search-page-container" >

                <div className="search-page-left-side">
                    <JobCard jobData={jobData} />
                    <JobCard jobData={jobData} />
                    <JobCard jobData={jobData} />
                    <JobCard jobData={jobData} />
                </div>

                <div className="search-page-right-side">
                    <SideContent
                        routeType='search'
                        title='Search history :'
                        linksList={jobData?.relationships?.skills}
                    />
                </div>

            </section>
        </Layout>
    )
}

export default SearchPage