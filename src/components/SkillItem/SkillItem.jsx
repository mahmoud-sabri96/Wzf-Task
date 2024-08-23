// Utils
import { truncateWord } from "../../utils/helper"
// -------------------------------------------------------------------

const SkillItem = (props) => {
    // -------- JSX Code ---------
    return (
        <div key={props?.key} {...props}>
            {truncateWord(props?.name, 20)}
        </div>
    )
}

export default SkillItem
