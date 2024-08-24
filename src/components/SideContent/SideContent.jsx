// React-Router-dom
import { Link } from "react-router-dom"
// Route pathes
import { path } from "../../routes/pathes"
// React icons
import { GoDotFill } from "react-icons/go";
// utils
import { truncateWord } from "../../utils/helper";
// -------------------------------------------------------

const SideContent = ({ routeType, title, linksList }) => {
    // -------- JSX Code ----------
    return (
        <div className="side-content-holder">
            <h3 className="side-content-tilte">
                {title}
            </h3>

            {
                linksList?.length > 0 &&
                <ul className="side-links-holder" >
                    {linksList?.map(link =>
                        <li key={link?.id}>
                            {
                                routeType === 'jobs' ?
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
                                    :
                                    routeType === 'skills' ?
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
                                        </Link>
                                        :
                                        <Link
                                            to={`${path?.search}/${link?.id}`}
                                            className="side-content-link"
                                        >
                                            <GoDotFill
                                                size={8}
                                                color="#000"
                                                style={{ margin: '5px' }}
                                            />
                                            No Name
                                            <span style={{ fontSize: '12px', marginLeft: '5px' }}>
                                                {truncateWord(link?.id, 8)}
                                            </span>
                                        </Link>
                            }
                        </li>
                    )}
                </ul>
            }
        </div >
    )
}

export default SideContent
