// Redux
import { combineReducers } from "redux";
// redux-persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// slices
import settingsReducer from "./slices/settingsSlice";
// ----------------------------------------------------------

const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-",
    whitelist: [],
};

const settingPersistConfig = {
    key: "setting",
    storage,
    keyPrefix: "redux-",
    whitelist: [],
};


const rootReducer = combineReducers({
    settings: persistReducer(settingPersistConfig,settingsReducer)
});

export { rootPersistConfig, rootReducer };