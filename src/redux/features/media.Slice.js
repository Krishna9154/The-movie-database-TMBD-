import { createSlice, original } from "@reduxjs/toolkit";

const mediaSlice = createSlice({
    name: 'Movies data',
    initialState: {
        popularResults:[],
        topratedResults:[],
        trendingResults:[],
        upcomingResults:[],
        loading: false,
        Error: null
    },

    reducers: {

        setpopularResults(state, action) {
            state.popularResults = action.payload
            state.loading = false
        },

        settoptratedResults(state,action) {
            state.topratedResults = action.payload
            state.loading = false
        },

        settrendingResults(state,action) {
            state.trendingResults = action.payload
            state.loading = false
        },

        setupcomingResults(state,action) {
            state.upcomingResults = action.payload
            state.loading = false
        },

        setLoading(state) {
            state.loading = true
            state.error = null
        },

        setError(state,action){
            state.Error = action.payload
            state.loading = true
        }

    }
})

export const { setpopularResults,settoptratedResults,settrendingResults,setupcomingResults, setLoading, setError } = mediaSlice.actions
export default mediaSlice.reducer