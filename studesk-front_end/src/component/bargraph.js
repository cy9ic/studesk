import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class bargraph extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <Chart
            type='bar'
            width={this.props.width}
            height={this.props.height}
            series={[
              {
                name: "Marks",
                data: [88, 54, 45, 76, 85]
              }
            ]}
            options={{
              title: {
                text: "Marks",
                style: {
                  fontSize: 30,

                }

              },
              colors: ['#3cae79'],
              xaxis: {
                tickPlacement: 'on',
                categories: ["DataStructure", "PA", "NALR", "FEE", "VES"],

              }

            }
            }

          ></Chart>
        </div>


      </div>
    )
  }
}
