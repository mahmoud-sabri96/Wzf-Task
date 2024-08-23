// Components
import { JobCard, Layout, PageTitle } from "../../components";
//-------------------------------------------------------
const HomePage = () => {

  const jobData = {
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
        }
      ]
    }
  }



  // ---- JSX Code ----
  return (
    <Layout showSearch={true} >

      <div style={{ margin: '30px 0px 48px' }}>
        <PageTitle title='All Jobs' />
      </div>

      <div style={{ display: 'flex', gap: '30px',flexWrap:'wrap' }}>
        <JobCard jobData={jobData} />
        <JobCard jobData={jobData} />
        <JobCard jobData={jobData} />
        <JobCard jobData={jobData} />
        <JobCard jobData={jobData} />
      </div>
    </Layout>
  )
}

export default HomePage;
