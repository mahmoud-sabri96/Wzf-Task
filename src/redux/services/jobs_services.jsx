import { createAsyncThunk } from "@reduxjs/toolkit";
//axios
import Axios from "../../utils/Axios";
// URLS
import * as URLS from "../../urls";
// --------------------------------------------------

// GET => getAllJobs
export const getAllJobs = createAsyncThunk(
    "jobs/getAllJobs",
    async (params, thunkAPI) => {
        const { signal } = thunkAPI
        try {
            const response = await Axios.get(
                URLS.allJobsURL,

                {
                    params: {
                        cursor: params?.cursor || 0,
                        limit: params?.limit || 12,
                    },
                    signal
                }
            );
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

// GET => getJobById
export const getJobById = createAsyncThunk(
    "jobs/getJobById",
    async (id, thunkAPI) => {
        const { signal } = thunkAPI
        try {
            const response = await Axios.get(
                `${URLS.jobByIdURL}/${id}`,
                { signal }
            );
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

// GET => getSkillById
export const getSkillById = createAsyncThunk(
    "jobs/getSkillById",
    async (id, thunkAPI) => {
        const { signal } = thunkAPI
        try {
            const response = await Axios.get(
                `${URLS.skillByIdURL}/${id}`,
                { signal }
            );
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

// GET => searchJobsByName
export const searchJobsByName = createAsyncThunk(
    "jobs/searchJobsByName",
    async (query, thunkAPI) => {
        const { signal } = thunkAPI
        try {
            const response = await Axios.get(
                `${URLS.searchJobsURL}`,
                {
                    params: {
                        query: query || "",
                    },
                    signal
                }
            );
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);