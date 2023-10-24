import React, { useEffect, useState } from 'react'
import "./gatepasslist.css"
import axios from 'axios';

export default function FacultyGatePass(props) {
    const [data , setData] = useState([]);
    const [clas, setclas] = useState("")

    const getdata =async ()=>{

        await axios.get("https://victorious-hare-beret.cyclic.app/faculty/email" , {email:props.email}).
        then(res=>{
            console.log(res);
            setclas(res.data.class);
        })
    }
    

    useEffect(()=>{
        const d = getdata();
        axios.get("https://victorious-hare-beret.cyclic.app/gatepass/StudentsInClass" ,{params:{
            class:"3A"
        }}).
        then(res=>{
            const sdata = res.data;
            const approvedvalues = sdata.filter(item => item.GatePass[item.GatePass.length -1].approved == null);
            const table = document.getElementById('table-list')
            approvedvalues.forEach(item=>{
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${item.GatePass[item.GatePass.length-1].data.studentID}</td>
            <td>${item.GatePass[item.GatePass.length-1].data.studentName}</td>
            <td>${item.GatePass[item.GatePass.length-1].data.fromDate} to ${item.GatePass[item.GatePass.length-1].data.toDate}</td>
            <td>${item.GatePass[item.GatePass.length-1].data.purpose}</td>
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
