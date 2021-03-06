
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Sidebar.scss'
import { setChartList, setSelectedChart } from './state/features/chartSlice';
import { useAppSelector } from './state/hooks';

const Sidebar = () => {
    const categories = [
    { name: 'Line Chart', key: '0', image: "linechart.jpeg",selected:true },
    { name: 'Bar Chart', key: '1', image: "barchart.jpeg",selected:false },
    { name: 'Column Chart', key: '2', image: "columnchart.jpg",selected:false },
    { name: 'Pie Chart', key: '3', image: "pie.jpeg",selected:false },    
    { name: 'Bubble Chart', key: '4', image: "bubble.jpg",selected:false },
    { name: 'Histogram Chart', key: '5', image: "Histogram.jpg",selected:false }    

    ];
    const charts = useAppSelector((state:any)=> state.chart.chartList)
    console.log(charts)
    const [selectedCategory, setSelectedCategory] = useState<any>(charts[0]);
    //const [newcharts, setNewCharts] = useState<any>(undefined)
    const dispatch = useDispatch()

    useEffect(() => {
      //const copy = Object.assign({}, categories)
      dispatch(setChartList(categories))
    }, [])

    
    const onChangeSelected = (key:string) => {
        // debugger
        if(charts.length>0){
            //console.log(charts)
            //console.log(selectedCategory)

            let newCharts = [...charts]
            
            if(selectedCategory){
                const exSelectedIndex = newCharts.findIndex((chart:any)=> chart.key === selectedCategory.key)
                newCharts[exSelectedIndex] = {...newCharts[exSelectedIndex], selected:false}
                //console.log(selectedCategory)
            }
            else {
                newCharts[0] = {...newCharts[0], selected:false}
            }
            const finded = newCharts.find((category:any)=>key === category.key)
            dispatch(setSelectedChart(finded))
            const findedIndex = newCharts.findIndex((chart:any)=> chart.key === key)
            newCharts[findedIndex] = {...newCharts[findedIndex], selected:true}
            setSelectedCategory(finded)
            //console.log(finded)

            //setNewCharts(newCharts)
            dispatch(setChartList(newCharts))
        }
    }

    return (
        <div>
            <div className="card"> 
                <h5>Select Chart Type </h5>
                {
                    charts && charts.length>0 && charts.map((chart:any) => {
                        return (
                            <React.Fragment key={chart.key}>
                                <div className={`image ${chart.selected ? 'selected' : ''}`}
                                 key={chart.key} onClick={()=>onChangeSelected(chart.key)}>
                                    <img src={chart.image} 
                                    style={{width:"140px", height:"110px",margin:"5px"}}
                                    />
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Sidebar