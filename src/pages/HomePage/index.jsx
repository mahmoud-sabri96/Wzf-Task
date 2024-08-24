import { Fragment, useEffect } from "react";
// Components
import {
  JobCard,
  Layout,
  PageTitle,
  SearchBox,
} from "../../components";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Services
import {
  getAllJobs,
  searchJobsByName
} from "../../redux/services/jobs_services";
// Slices
import { updateSearchHistory } from "../../redux/slices/jobs_slice";
//-------------------------------------------------------


const HomePage = () => {

  const dispatch = useDispatch()

  const { isLoadingAllJobs, allJobsList, allJobsData } = useSelector(state => state.jobs)

  const handleSearch = (searchTerm) => {
    dispatch(searchJobsByName(searchTerm))
    dispatch(updateSearchHistory(searchTerm))
  }

  useEffect(() => {
    const dispatchGetAllJobs = dispatch(getAllJobs({}))
    // to cancel request when the user leave the page
    return () => dispatchGetAllJobs.abort()
  }, [])

  // ---- JSX Code ----
  return (
    <Layout >
      <SearchBox onSearch={handleSearch} />
      <PageTitle title='All Jobs' count={allJobsData?.meta?.count} />
      <div className="job-page-container">

        {isLoadingAllJobs && <h2 style={{ color: '#0046b2' }} >Loading Data ...</h2>}

        {(!isLoadingAllJobs && !allJobsList?.length) && <h2 style={{ color: '#0046b2' }}>No Data Found</h2>}

        {(allJobsList?.length > 0 && !isLoadingAllJobs) &&
          allJobsList?.map(job =>
            <Fragment key={job?.id} >
              <JobCard jobData={job} />
            </Fragment>
          )}

      </div>
    </Layout>
  )
}

export default HomePage;
