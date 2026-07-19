import { configureStore } from "@reduxjs/toolkit";
import popularReducer from './features/media.Slice'


export const store= configureStore({
    reducer:{

        storePopularMovies: popularReducer,


    }
})