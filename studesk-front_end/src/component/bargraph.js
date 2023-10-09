import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class bargraph extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid '>
          <Chart
            
            type='bar'
            width={this.props.width}
            height={this.props.height}
            series={[
              {
                name: "Marks",
                data: [this.props.DSA, this.props.FEE, this.props.NALR, this.props.VES, this.props.DBMS]
              }
            ]}
            options={{
              chart:{
                background:'#FFFFFF'
              },
              title: {
                text: "Marks",
                
                style: {
                  fontSize: 30,

                }

              },
              colors: ['#3cae79'],
              xaxis: {
                tickPlacement: 'on',
                categories: ["DSA", "FEE", "NALR", "VES", "DBMS"],

              }

            }
            }

          ></Chart>
        </div>


      </div>
    )
  }
}
