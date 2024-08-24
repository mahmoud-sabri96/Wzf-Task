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
import { getJobById } from "../../redux/services/jobs_services"
// ---------------------------------------------------------------------

const JobInfoPage = () => {

    const params = useParams()

    const { id } = params

    const dispatch = useDispatch()

    const { JobInfo } = useSelector(state => state.jobs)

    useEffect(() => {
        const dispatchGetJobById = dispatch(getJobById(id))
        // to cancel request when the user leave the page
        return () => dispatchGetJobById.abort()
    }, [id])


    // ------ JSx Code -------
    return (
        <Layout showSearch={false} >

            <PageTitle title={JobInfo?.attributes?.title} />

            <section className="info-page-container" >

                <div className="info-left-side">
                    <h3 className="sub-title ">
                        Related Skills:
                    </h3>

                    {JobInfo?.relationships?.skills.map(skill =>
                        <Fragment key={skill?.id}>
                            <JobAndSkillCard data={skill} showDiscription={true} routeType={'skills'} />
                        </Fragment>
                    )}

                </div>

                <div className="info-right-side">
                    <SideContent
                        routeType='jobs'
                        title='Related Jobs :'
                        // No Related Jobe in response of jobById api
                        linksList={JobInfo?.relationships?.skills}
                    />
                </div>

            </section>

        </Layout>
    )
}

export default JobInfoPage
