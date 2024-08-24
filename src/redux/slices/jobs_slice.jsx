// Slice
import { createSlice } from "@reduxjs/toolkit";
// Services
import { getAllJobs, getJobById, getSkillById, searchJobsByName } from "../services/jobs_services";

// -----------------------------------------------------------------------

const slice = createSlice({
    name: "jobs",
    initialState: {
        isLoadingAllJobs: false,
        allJobsData: {},
        allJobsList: [],
        isLoadingJobInfo: false,
        JobInfo: {},
        isLoadingSkillInfo: false,
        skillInfo: {},
        isLoadingSearchResult: false,
        searchResuts: [],
        searchQuery: '',

    },

    reducers: {
        setSearchQuery: (state, action) => {
            console.log(action.payload)
            state.searchQuery = action.payload
        }
    },

    extraReducers: (builder) => {

        // getAllJobs
        builder
            .addCase(getAllJobs.fulfilled, (state, action) => {
                state.isLoadingAllJobs = false;
                state.allJobsData = action.payload.data
                state.allJobsList = action.payload.data.jobs
            })
            .addCase(getAllJobs.pending, (state) => {
                state.isLoadingSettings = true;
            })
            .addCase(getAllJobs.rejected, (state) => {
                state.isLoadingAllJobs = false;
            });

        // getJobById
        builder
            .addCase(getJobById.fulfilled, (state, action) => {
                state.isLoadingJobInfo = false;
                state.JobInfo = action.payload.data?.job
            })
            .addCase(getJobById.pending, (state) => {
                state.isLoadingJobInfo = true;
            })
            .addCase(getJobById.rejected, (state) => {
                state.isLoadingJobInfo = false;
            });

        // getSkillById
        builder
            .addCase(getSkillById.fulfilled, (state, action) => {
                state.isLoadingSkillInfo = false;
                state.skillInfo = action.payload.data?.skill
            })
            .addCase(getSkillById.pending, (state) => {
                state.isLoadingSkillInfo = true;
            })
            .addCase(getSkillById.rejected, (state) => {
                state.isLoadingSkillInfo = false;
            });

        // searchJobsByName
        builder
            .addCase(searchJobsByName.fulfilled, (state, action) => {
                state.isLoadingSearchResult = false;
                state.searchResuts = action.payload.data?.jobs
            })
            .addCase(searchJobsByName.pending, (state) => {
                state.isLoadingSearchResult = true;
            })
            .addCase(searchJobsByName.rejected, (state) => {
                state.isLoadingSearchResult = false;
            });


    },
});

// Reducer
export default slice.reducer;

// Actions
export const { setSearchQuery } = slice.actions;