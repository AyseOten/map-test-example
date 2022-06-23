import { configureStore } from '@reduxjs/toolkit';
import { chartSlice } from './features/chartSlice';

export const store = configureStore({
    reducer: {
        chart: chartSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
