// Redux
import { combineReducers } from "redux";
// redux-persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// slices
import jobsReducer from "./slices/jobs_slice";
// ----------------------------------------------------------

const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-",
    whitelist: [],
};

const jobsPersistConfig = {
    key: "jobs",
    storage,
    keyPrefix: "redux-",
    whitelist: [],
};


const rootReducer = combineReducers({
    jobs: persistReducer(jobsPersistConfig, jobsReducer)
});

export { rootPersistConfig, rootReducer };