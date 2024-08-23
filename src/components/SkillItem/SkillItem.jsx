// React-Router-dom
import { Link } from "react-router-dom"
// Utils
import { truncateWord } from "../../utils/helper"
// -------------------------------------------------------------------

const SkillItem = (props) => {
    // -------- JSX Code ---------
    return (
        <Link to={props?.path} key={props?.key} {...props}>
            {truncateWord(props?.name, 20)}
        </Link>
    )
}

export default SkillItem
