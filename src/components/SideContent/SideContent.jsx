// React-Router-dom
import { Link } from "react-router-dom"
// Route pathes
import { path } from "../../routes/pathes"
// React icons
import { GoDotFill } from "react-icons/go";
// Redux
import { useDispatch } from "react-redux";
// utils
import { truncateWord } from "../../utils/helper";
// Slices
import { setSearchQuery } from "../../redux/slices/jobs_slice";
// Services
import { searchJobsByName } from "../../redux/services/jobs_services";
// -----------------------------------------------------------------------

const SideContent = ({ routeType, title, linksList }) => {

    const dispatch = useDispatch()
    // -------- JSX Code ----------
    return (
        <div className="side-content-holder">
            <h3 className="side-content-tilte">
                {title}
            </h3>

            {
                linksList?.length > 0 &&
                <ul className="side-links-holder" >
                    {linksList?.map((link,index) =>
                        <li key={link?.id || index}>
                            {
                                routeType === 'jobs' &&
                                <Link
                                    to={`${path?.jobInfo}/${link?.id}`}
                                    className="side-content-link"
                                >
                                    <GoDotFill
                                        size={8}
                                        color="#000"
                                        style={{ margin: '5px' }}
                                    />
                                    No job Name
                                    <span style={{ fontSize: '10px', marginLeft: '5px' }}>
                                        {truncateWord(link?.id, 8)}
                                    </span>
                                </Link>
                            }

                            {routeType === 'skills' &&
                                <Link
                                    to={`${path?.skillInfo}/${link?.id}`}
                                    className="side-content-link"
                                >
                                    <GoDotFill
                                        size={8}
                                        color="#000"
                                        style={{ margin: '5px' }}
                                    />
                                    No Skill Name
                                    <span style={{ fontSize: '10px', marginLeft: '5px' }}>
                                        {truncateWord(link?.id, 8)}
                                    </span>
                                </Link>}

                            {routeType === 'search' &&
                                <div
                                    
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        dispatch(searchJobsByName(link))
                                        dispatch(setSearchQuery(link))
                                    }}
                                    className="side-content-link"
                                >
                                    <GoDotFill
                                        size={8}
                                        color="#000"
                                        style={{ margin: '5px' }}
                                    />
                                    <span style={{ fontSize: '12px', marginLeft: '5px' }}>
                                        {truncateWord(link, 30)}
                                    </span>
                                </div>
                            }
                        </li>
                    )}
                </ul>
            }
        </div >
    )
}

export default SideContent
