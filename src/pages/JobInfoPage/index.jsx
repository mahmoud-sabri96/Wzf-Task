// Components
import { JobAndSkillCard, Layout, PageTitle, SideContent } from "../../components"
import { jobData } from "../HomePage"

// ---------------------------------------------------------
const JobInfoPage = () => {

    // ------- JSx Code --------
    return (
        <Layout showSearch={false} >
            <div style={{ margin: '30px 0px 48px' }}>
                <PageTitle title='4th Grade Math Teacher' />
            </div>

            <section className="info-page-container" >

                <div className="info-left-side">
                    <h3 className="sub-title ">
                        Related Skills:
                    </h3>
                    <JobAndSkillCard data={jobData} showDiscription={true} routeType={'skills'} />
                    <JobAndSkillCard data={jobData} showDiscription={true} routeType={'skills'} />
                    <JobAndSkillCard data={jobData} showDiscription={true} routeType={'skills'} />
                    <JobAndSkillCard data={jobData} showDiscription={true} routeType={'skills'} />
                </div>

                <div className="info-right-side">
                    <SideContent
                        routeType='jobs'
                        title='Related Jobs :'
                        linksList={jobData?.relationships?.skills}
                    />
                </div>

            </section>

        </Layout>
    )
}

export default JobInfoPage
