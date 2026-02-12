import {configureStore} from '@reduxjs/toolkit';
import emp from "./empSlice"

export const store = configureStore({
    reducer: {
        emp,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;