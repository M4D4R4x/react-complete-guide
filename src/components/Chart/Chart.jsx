import React from 'react'
import '../../styling/Chart.css';
import ChartBar from './ChartBar'

function Chart(props) { 
  return (
    <div className="chart">
      {props.data.map(chartData =><ChartBar value={chartData.value} maxValue={null} label={chartData.label} key={chartData.label} />)}
      </div>
  )
}

export default Chart