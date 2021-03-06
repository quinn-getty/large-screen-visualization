import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { px } from '../utils'
import { creatChartOptions } from '../shared/chartOptions';

const CountChart = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      creatChartOptions({
      grid: {
        x: px(70),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          splitLine: {show: false},
          axisLabel: {show: false}
        },
        yAxis: {
          type: 'category',
          data: ['北京', '浙江', '广州', '郑州', '长春', '沈阳', '昆明', '成都', '南京']
        },
        series: [
          {
            name: '昨天',
            type: 'bar',
            data: [89, 23, 34, 10, 44, 30, 33, 22, 11],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#2034f9'
                }, {
                  offset: 1,
                  color: '#04a1ff'
                }]),
              }
            }
          },
          {
            name: '今天',
            type: 'bar',
            data: [25, 38, 31, 12, 41, 18, 30, 20, 11],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#b92ae8'
                }, {
                  offset: 1,
                  color: '#6773e7'
                }]),
              }
            }
          }
        ]
      })
    );
  }, []);

  return <div className="bordered treat-chart">
    <h2>重要区域治愈情况</h2>
    <div ref={divRef} className="chart"/>
      <div className="legend">
        <span className="first"/> 昨天
        <span className="second"/> 今天
    </div>
  </div>;
};

export default CountChart;