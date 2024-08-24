// React-Router-Dom
import { useRoutes } from "react-router-dom";
// Element
import { HomePage, JobInfoPage, SearchPage } from "./elements";
import { path } from "./pathes";
import SkillInfoPage from "../pages/SkillInfoPage";

//--------------------------------------------------

const Router = () => {
    return useRoutes([
        { path: `/${path?.home}`, element: < HomePage /> },
        { path: `/${path?.search}`, element: < SearchPage /> },
        { path: `/${path?.search}/:id`, element: < SearchPage /> },
        { path: `/${path?.jobInfo}/:id`, element: < JobInfoPage /> },
        { path: `/${path?.skillInfo}/:id`, element: < SkillInfoPage /> },
        { path: `*`, element: <h1 style={{textAlign:'center'}}>Not found Page 404 </h1> },
    ]);
};

export default Router;
