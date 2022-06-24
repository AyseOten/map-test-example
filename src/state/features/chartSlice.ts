import { createSlice, current } from '@reduxjs/toolkit';

const initialState: any = {
    chartList:{},
    selectedChart:{}
}

export const chartSlice = createSlice({
    name: 'basemap',
    initialState,
    reducers: {
        setChartList: (state: any, action) => {
            state.chartList = action.payload;
        },
        setSelectedChart: (state: any, action) => {
            state.selectedChart = action.payload;
        },
    },
})

export const { setChartList, setSelectedChart } = chartSlice.actions


export default chartSlice.reducer