// React-Router-Dom
import { Link } from 'react-router-dom'
// Routes Pathes
import { path } from '../../routes/pathes'
// -----------------------------------------------------
const JobAndSkillCard = ({ data, showDiscription = false, routeType }) => {
    // ------ JSX Code ------
    return (
        <div className='job-skill-card-holder' >

            {
                routeType === 'jobs' ?
                    <Link className='job-skill-card-title' to={`${path?.jobInfo}/${data?.id}`} >
                        No Job Name {' '}
                        <span style={{ fontSize: '12px' }}>
                            ({data?.id})
                        </span>
                    </Link>
                    :
                    <Link className='job-skill-card-title' to={`${path?.skillInfo}/${data?.id}`} >
                        No Skill Name {' '}
                        <span style={{ fontSize: '12px' }}>
                            ({data?.id})
                        </span>
                    </Link>
            }


            {showDiscription &&
                <p className='job-skill-card-description'>
                    the ability to communicate information and ideas in speaking so others will understand.
                </p>
            }

            <div className='job-skill-info-holder'>
                {routeType === 'skills' &&
                    <SkillInfo name='Type' value='knowledge' />
                }
                <SkillInfo name='Importance' value='3.7' />
                <SkillInfo name='Level' value='2.3' />
            </div>

        </div >
    )
}
export default JobAndSkillCard


export function SkillInfo({ name, value }) {
    return (
        <p className='job-skill-info'>
            {name} : {' '}
            <span className='job-skill-info-value'>
                {value}
            </span>
        </p>
    )

}
