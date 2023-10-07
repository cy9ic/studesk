import React,{useState} from 'react';
import Chart from 'react-apexcharts';
function Linechart(props)
{
    const[product]= useState(
        [
            {
                name:"PA",
                data:[234,45,67,987,345,456,87,321,45,569,76,890]
            },
            {
              name:"NALR",
              data:[562,145,267,97,45,156,87,321,845,969,706,20]
            },
            {
              name:"FEE",
              data:[1012,345,117,697,845,56,287,1321,1845,469,306,120]
            }
        ]
    );

    const[option]= useState(
        {
            title:{ text:""},
            xaxis:{
                title:{text:""},
                categories:['1 week','2 week','3 week','4 week','5 week','6 week','7 week','8 week','9 week','10 week']
            },
            yaxis:{
                title:{text:""}                 
            }

        }
    );

    return(<React.Fragment>
        <div className='container-fluid mt-3 mb-3'>
           <h2>Attedence</h2>          
          <Chart type='line'
          width={props.width}
          height={props.height}
          series={product}
          options={option }
          >
          </Chart>

        </div>
    </React.Fragment>);
}

export default Linechart;