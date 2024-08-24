// React-Router-Dom
import { Link } from 'react-router-dom'
// Components
import SkillItem from '../SkillItem/SkillItem'
// Routes Pathes
import { path } from '../../routes/pathes'
import { Fragment } from 'react'
// --------------------------------------------------------------

const JobCard = ({ jobData }) => {
    // ------- JSX Code ----------
    return (
        <div className='job-card' >

            <Link to={`${path?.jobInfo}/${jobData?.id}`} className='job-card-title'>
                {jobData?.attributes?.title}
            </Link>

            <p className='job-card-subtitle'>Related Skills:</p>

            <div className='job-skills-holder'>
                {jobData?.relationships?.skills?.map(skill =>
                    <Fragment key={skill?.id}>
                        <SkillItem
                            path={`${path?.skillInfo}/${skill?.id}`}
                            className="skill-item"

                            name={skill?.id}
                        />
                    </Fragment>
                )}
            </div>

            <Link className='job-card-link' to={`${path?.jobInfo}/${jobData?.id}`}>
                View Job details
            </Link>
        </div>
    )
}

export default JobCard
