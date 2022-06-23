
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Sidebar.scss'
import { setChartList } from './state/features/chartSlice';
import { useAppSelector } from './state/hooks';

const Sidebar = () => {
    const categories = [{ name: 'Bar Chart', key: '0', image: "barchart.jpeg",selected:true },
    { name: 'Bubble Chart', key: '1', image: "bubble.jpg",selected:false },
    { name: 'Column Chart', key: '2', image: "columnchart.jpg",selected:false },
    { name: 'Line Chart', key: '3', image: "linechart.jpeg",selected:false },
    { name: 'Pie Chart', key: '4', image: "pie.jpeg",selected:false },    
    { name: 'Histogram Chart', key: '5', image: "Histogram.jpg",selected:false }    

    ];
    const charts = useAppSelector((state:any)=> state.chart.chartList)
    console.log(charts)
    const [selectedCategory, setSelectedCategory] = useState<any>(charts[0]);
    // const [charts, setCharts] = useState<any>(undefined)
    const dispatch = useDispatch()

    useEffect(() => {
      //const copy = Object.assign({}, categories)
      dispatch(setChartList(categories))
    }, [])

    
    const onChangeSelected = (key:string) => {
        if(charts.length>0){
            console.log(charts)
            console.log(selectedCategory)
            if(selectedCategory){
                const exSelectedIndex = charts.findIndex((chart:any)=> chart.key === selectedCategory.key)
                charts[exSelectedIndex] = {...charts[exSelectedIndex], selected:false}
                console.log(selectedCategory)
            }
            // else {
            //     charts[0] = {...charts[0], selected:false}
            // }
            const finded = charts.find((category:any)=>key === category.key)
            const findedIndex = charts.findIndex((chart:any)=> chart.key === key)
            charts[findedIndex] = {...charts[findedIndex], selected:true}
            setSelectedCategory(finded)
            console.log(finded)
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