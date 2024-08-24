import { Fragment, useEffect, useState } from "react";
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
// React-Infinite-Scroll-Component
import InfiniteScroll from "react-infinite-scroll-component";
//-------------------------------------------------------------------

const HomePage = () => {

  const dispatch = useDispatch()

  const { isLoadingAllJobs, allJobsList, allJobsData } = useSelector(state => state.jobs)

  const [limit, setlimit] = useState(24)

  const handleSearch = (searchTerm) => {
    dispatch(searchJobsByName(searchTerm))
    dispatch(updateSearchHistory(searchTerm))
  }

  const fetchMoreData = async () => {
    if (!!allJobsData?.meta?.next) {
      setlimit(prev => prev + 12)
      dispatch(getAllJobs({ limit: limit }))
    }
  };

  useEffect(() => {
    const dispatchGetAllJobs = dispatch(getAllJobs())
    // to cancel request when the user leave the page
    return () => dispatchGetAllJobs.abort()
  }, [])

  // ---- JSX Code ----
  return (
    <Layout >
      <SearchBox onSearch={handleSearch} />
      <PageTitle title='All Jobs' count={allJobsData?.meta?.next || allJobsData?.meta?.count} />

      {isLoadingAllJobs && <h2 style={{ color: '#0046b2' }} >Loading Data ...</h2>}

      {(!isLoadingAllJobs && !allJobsList?.length) && <h2 style={{ color: '#0046b2' }}>No Data Found</h2>}

      {(allJobsList?.length > 0 && !isLoadingAllJobs) &&

        <InfiniteScroll
          dataLength={allJobsData?.meta?.count}
          next={fetchMoreData}
          hasMore={!!allJobsData?.meta?.next}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center", fontSize: '20px', color: '#0046b2', marginTop: '20px' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="job-page-container">
            {allJobsList?.map(job =>
              <Fragment key={job?.id} >
                <JobCard jobData={job} />
              </Fragment>
            )}
          </div>
        </InfiniteScroll>
      }

      {/* {allJobsList?.map(job =>
        <Fragment key={job?.id} >
        <JobCard jobData={job} />
      </Fragment>} */}

    </Layout>
  )
}

export default HomePage;
