import { Fragment, useEffect } from "react"
// React-Router-dom
import { useParams } from "react-router-dom"
// Components
import {
    JobAndSkillCard,
    Layout,
    PageTitle,
    SideContent
} from "../../components"
// Redux
import { useDispatch, useSelector } from "react-redux"
// Services
import { getSkillById } from "../../redux/services/jobs_services"
// ---------------------------------------------------------
const SkillInfoPage = () => {
    const params = useParams()

    const { id } = params

    const dispatch = useDispatch()

    const { skillInfo } = useSelector(state => state.jobs)


    useEffect(() => {
        const dispatchGetSkillById = dispatch(getSkillById(id))
        // to cancel request when the user leave the page
        return () => dispatchGetSkillById.abort()
    }, [id])
    // ----- JSX Code ------
    return (
        <Layout showSearch={false} >

            <PageTitle title={skillInfo?.attributes?.name} />

            <section className="info-page-container" >

                <div className="info-left-side">

                    <div>
                        <h3 className="sub-title ">
                            Description:
                        </h3>
                        <p>
                            knowledge of principles and methods for moving people or goods by air, rail, sea, or road, including the relative costs and benefits.
                        </p>
                    </div>

                    <h3 className="sub-title ">
                        Related Jobs :
                    </h3>

                    {skillInfo?.relationships?.jobs.map(job =>
                        <Fragment key={job?.id}>
                            <JobAndSkillCard data={job} showDiscription={false} routeType={'jobs'} />
                        </Fragment>
                    )}

                </div>

                <div className="info-right-side">
                    <SideContent
                        routeType='skills'
                        title='Related Skills :'
                        linksList={skillInfo?.relationships?.skills}
                    />
                </div>

            </section>
        </Layout>
    )
}

export default SkillInfoPage
