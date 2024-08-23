// Components
import {
    JobAndSkillCard,
    Layout,
    PageTitle,
    SideContent
} from "../../components"
import { jobData } from "../HomePage"
// ---------------------------------------------------------
const SkillInfoPage = () => {
    // ----- JSX Code ------
    return (
        <Layout showSearch={false} >
            <div style={{ margin: '30px 0px 48px' }}>
                <PageTitle title='Operation and control' />
            </div>

            <section className="info-page-container" >

                <div className="info-left-side">

                    <div>
                        <h3 className="sub-title ">
                            Description: :
                        </h3>
                        <p>
                            knowledge of principles and methods for moving people or goods by air, rail, sea, or road, including the relative costs and benefits.
                        </p>
                    </div>

                    <h3 className="sub-title ">
                        Related Jobs :
                    </h3>

                    <JobAndSkillCard data={jobData} showDiscription={false} routeType={'jobs'} />
                    <JobAndSkillCard data={jobData} showDiscription={false} routeType={'jobs'} />
                    <JobAndSkillCard data={jobData} showDiscription={false} routeType={'jobs'} />
                    <JobAndSkillCard data={jobData} showDiscription={false} routeType={'jobs'} />
                </div>

                <div className="info-right-side">
                    <SideContent
                        routeType='skills'
                        title='Related Skills :'
                        linksList={jobData?.relationships?.skills}
                    />
                </div>

            </section>
        </Layout>
    )
}

export default SkillInfoPage
