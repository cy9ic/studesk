import React, { useEffect, useState } from 'react'
import "./gatepasslist.css"
import axios from 'axios';



export default function FacultyGatePass() {
    const [data , setData] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/gatepass/StudentsInClass" ,{params:{
            class:"3A"
        }}).
        then(res=>{
            const sdata = res.data;
            const approvedvalues = sdata.filter(item => item.GatePass[item.GatePass.length -1].approved == null);
            // console.log(approvedvalues);
            
            const table = document.getElementById('table-list')
           approvedvalues.forEach(item=>{
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${item.GatePass[item.GatePass.length-1].data.StudentID}</td>
            <td>${item.GatePass[item.GatePass.length-1].data.StudentName}</td>
            <td>Today To Tommorow</td>
            <td>${item.GatePass[item.GatePass.length-1].data.Reason}</td>
            <td>Approval</td>
        `;
        table.appendChild(tr);
        
           })
        }).catch(error=>{
            console.log(error)
        })
    } , [])



  return (
    <>
    <h1 className='g-h'>Gate Pass List</h1>
    <div className='gp-container'>
        <div className='table'>
        <table >
            <tbody id='table-list'>
            <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Gate Pass required from</th>
                <th>Reason for Gate Pass</th>
                <th>Approved</th>
            </tr>
            </tbody>
        </table>
        </div>
        
    </div>
    
    </>
  )
}
