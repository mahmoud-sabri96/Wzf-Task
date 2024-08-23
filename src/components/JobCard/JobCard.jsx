// React-Router-Dom
import { Link } from 'react-router-dom'
// Components
import SkillItem from '../SkillItem/SkillItem'
// Routes Pathes
import { path } from '../../routes/pathes'
// --------------------------------------------------------------

const JobCard = ({ jobData }) => {
    // ------- JSX Code ----------
    return (
        <div className='job-card'>

            <h3 className='job-card-title'>
                {jobData?.attributes?.title}
            </h3>

            <p className='job-card-subtitle'>Related Skills:</p>

            <div className='job-skills-holder'>
                {jobData?.relationships?.skills?.map(skill =>
                    <SkillItem
                        className="skill-item"
                        key={skill?.id}
                        name={skill?.id}
                    />
                )}
            </div>

            <Link className='job-card-link' to={`${path?.jobInfo}/${jobData?.id}`}>
                view job details
            </Link>

        </div>
    )
}

export default JobCard
