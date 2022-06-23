import { createSlice, current } from '@reduxjs/toolkit';

const initialState: any = {
    chartList:{}
}

export const chartSlice = createSlice({
    name: 'basemap',
    initialState,
    reducers: {
        setChartList: (state: any, action) => {
            state.chartList = action.payload;
        },
    },
})

export const { setChartList } = chartSlice.actions


export default chartSlice.reducer