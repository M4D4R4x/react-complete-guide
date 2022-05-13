import React from 'react'
import '../../styling/Chart.css';
import ChartBar from './ChartBar'

function Chart(props) { 
  
const dataPointValues = props.chartData.map(dataPoint => dataPoint.value);
const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {props.chartData.map((chartData) =>(<ChartBar value={chartData.value} maxValue={totalMaximum} label={chartData.label} key={chartData.label} />))}
      </div>
  )
}

export default Chart