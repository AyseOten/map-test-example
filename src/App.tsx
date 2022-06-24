import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import MapContainer from './components/map-container/MapContainer';
import { SupersetClient } from '@superset-ui/core';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import Echarts from './Echarts';
import Charts from './Charts';
import Sidebar from './Sidebar';
import { useAppSelector } from './state/hooks';

function App() {
  const selectedChart = useAppSelector((state) => state.chart.selectedChart)
  // console.log(selectedChart)

  useEffect(() => {
    switch (selectedChart.key) {
      case '0':
        setOption(undefined)
        setOption(optionLine);
        break;
      case '1':
        setOption(undefined)
        // setOption(optionBar);
        break;
      case '2':
        setOption(undefined)
        setOption(optionColumn);
        break;
      case '3':
        setOption(undefined)
        // setOption(optionPie);
        break;
      case '4':
        //setOption(optionPie);
        break;
      case '4':
        // setOption(optionHistogram);
        break;
      default:
      // code block
    }
  }, [selectedChart])


  const optionColumn = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Email',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Search Engine',
        type: 'bar',
        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
        emphasis: {
          focus: 'series'
        },
        markLine: {
          lineStyle: {
            type: 'dashed'
          },
          data: [[{ type: 'min' }, { type: 'max' }]]
        }
      },
      {
        name: 'Baidu',
        type: 'bar',
        barWidth: 5,
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [620, 732, 701, 734, 1090, 1130, 1120]
      },
      {
        name: 'Google',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 290, 230, 220]
      },
      {
        name: 'Bing',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [60, 72, 71, 74, 190, 130, 110]
      },
      {
        name: 'Others',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [62, 82, 91, 84, 109, 110, 120]
      }
    ]
  };


  const optionLine: any = {
    title: {
      text: 'Stacked Area Chart'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  const optionBar = {
      angleAxis: {},
      radiusAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu'],
        z: 10
      },
      polar: {},
      series: [
        {
          type: 'bar',
          data: [1, 2, 3, 4],
          coordinateSystem: 'polar',
          name: 'A',
          stack: 'a',
          emphasis: {
            focus: 'series'
          }
        },
        {
          type: 'bar',
          data: [2, 4, 6, 8],
          coordinateSystem: 'polar',
          name: 'B',
          stack: 'a',
          emphasis: {
            focus: 'series'
          }
        },
        {
          type: 'bar',
          data: [1, 2, 3, 4],
          coordinateSystem: 'polar',
          name: 'C',
          stack: 'a',
          emphasis: {
            focus: 'series'
          }
        }
      ],
      legend: {
        show: true,
        data: ['A', 'B', 'C']
      }
    };
    
    

  const optionPie = {
    backgroundColor: '#2c343c',
  title: {
    text: 'Customized Pie',
    left: 'center',
    top: 20,
    textStyle: {
      color: '#ccc'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 274, name: 'Union Ads' },
        { value: 235, name: 'Video Ads' },
        { value: 400, name: 'Search Engine' }
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
        color: 'rgba(255, 255, 255, 0.3)'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: '#c23531',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx:any) {
        return Math.random() * 200;
      }
    }
  ]
  };

  const [option, setOption] = useState(optionLine)
  //console.log(option,"option")


  useEffect(() => {
    console.log(option)
  }, [option])
  

  return (

    <div className="App">
      {/* <MapContainer /> */}
      {/* <iframe
        src="http://192.168.20.233:8088/login?username=admin&redirect=/superset/dashboard/world_health?standalone=true"
      >
      </iframe> */}
      {/* <Echarts/> */}
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="chart">
        {console.log(option)}
        {option && <Charts option={option} theme={'dark'} />}
      </div>
    </div >
  );
}

export default App;
