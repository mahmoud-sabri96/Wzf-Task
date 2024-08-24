import { Fragment, useEffect } from "react";
// Components
import {
  JobCard,
  Layout,
  PageTitle,
} from "../../components";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Services
import { getAllJobs } from "../../redux/services/jobs_services";
//-------------------------------------------------------

export const jobData = {
  "id": "9b92abe6-3bf3-4cc6-8744-4de0c8af0630",
  "type": "job",
  "attributes": {
    "title": "Engineering Manager"
  },
  "relationships": {
    "skills": [
      {
        "id": "f4a6f053-2cac-44fc-a87a-5368d7ca46ed"
      },
      {
        "id": "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3"
      },
      {
        "id": "e255b986-fca7-4b1c-ba4e-b16497da4477"
      },
      {
        "id": "f4a6f053-2cac-44fc-a87a-5368d7ca46ed"
      },
      {
        "id": "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3"
      },
      {
        "id": "e255b986-fca7-4b1c-ba4e-b16497da4477"
      }
    ]
  }
}

const HomePage = () => {

  const dispatch = useDispatch()

  const { allJobsList, allJobsData } = useSelector(state => state.jobs)

 

  useEffect(() => {
    const dispatchGetAllJobs = dispatch(getAllJobs({}))
    // to cancel request when the user leave the page
    return () => dispatchGetAllJobs.abort()
  }, [])

  // ---- JSX Code ----
  return (
    <Layout showSearch={true}  >
      <PageTitle title='All Jobs' count={allJobsData?.meta?.count} />
      <div className="job-page-container">
        {allJobsList?.map(job =>
          <Fragment key={job?.id} >
            <JobCard jobData={job} />
          </Fragment>
        )}
      </div>
    </Layout>
  )
}

export default HomePage;
