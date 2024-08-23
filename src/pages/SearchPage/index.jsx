// Component
import { JobCard, Layout, PageTitle, SideContent } from "../../components"
import { jobData } from "../HomePage"
// ------------------------------------------------

const SearchPage = () => {
    // ------ JSX Code -----
    return (
        <Layout showSearch={true} >
            <div style={{ margin: '30px 0px 48px' }}>
                <PageTitle title='“frontend” jobs' count={12} />
            </div>

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