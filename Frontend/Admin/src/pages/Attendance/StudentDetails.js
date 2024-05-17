import React, { useEffect } from "react";
import './css.css'
import {
    Table,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
  } from "reactstrap"
  
  //Import Breadcrumb
//   import Breadcrumbs from "../../components/Common/Breadcrumb"
const StudentDetail=()=>{
    return(
    <React.Fragment>
    <div style={{width:"100%",padding:5}}>
        <div style={{width:200,float:"left", height:100,backgroundColor:"darkblue"}}>pic</div>
        <div className="table-responsive" style={{width:"85%",float:"left",height:100,float:"left",  display:'block'}}>
            <div className="sdetails1">
                <div className="innerdiv">
                <p><b>Name:</b></p>
                </div>
                <div className="siderdiv">

                </div>
                <div className="innerdiv">
                <p><b>Rollnumber:</b></p>
                </div>
                <div className="siderdiv">

                </div>
            </div>
            <div className="sdetails1">
                <div className="innerdiv">
                <p><b>Course:</b></p>
                </div>
                <div className="siderdiv">

                </div>
                <div className="innerdiv">
                <p><b>Attendence:</b></p>
                </div>
                <div className="siderdiv">

                </div>
            </div>
            <div className="sdetails1">
                <div className="innerdiv">
                <p><b>Session:</b></p>
                </div>
                <div className="siderdiv">

                </div>
                <div className="innerdiv">
                <p><b>Branch:</b></p>
                </div>
                <div className="siderdiv">

                </div>
            </div>
            <div className="sdetails1">
                <div className="innerdiv">
                <p><b>College:</b></p>
                </div>
                <div className="siderdiv">

                </div>
                <div className="innerdiv">
                <p><b>TodayClass:</b></p>
                </div>
                <div className="siderdiv">

                </div>
            </div>
        </div>
        <div style={{height:150}}></div>
        <table style={{width:"65%",margin:"auto",textAlign:"center"}}>
            <tr style={{backgroundColor:"green",color:"white"}}>
                <th>S. No.</th>
                <th>Date</th>
                <th>Status</th>
            </tr>
            
        </table>
    </div>  
    </React.Fragment>
    )
}
export default  StudentDetail