import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios"
import {
  Table,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap"
const GetDetails  = props => {
  const [singlebtn, setSinglebtn] = useState(false)
  const [singlebtn1, setSinglebtn1] = useState(false)
  const [data, setdata] = useState([])
  const [search, setsearch] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/getstudentdetails');
        console.log(response);
        const data = await response.json();
        console.log(data); // or do something else with the data
        setdata(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [search]);
  
  const handleclick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/getstudentbyroll/' + search);
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await res.json();
      setdata(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/deletestudent/${id}`);
      // After successful deletion, fetch the updated list of items
      handleDelete();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  
    return (
       
        <div styel={{width:"100%",backgroundcolor:"White"}}>
            <div style={{width:"100%",height:100,backgroundColor:"darkblue"}}>
                <div style={{width:700,height:100,float:"left"}}>
                <form className="p-3">
                <div className="form-group m-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={"search" + "..."}
                      aria-label="Recipient's username"
                      onChange={e=>{setsearch(e.target.value)}}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-success" type="submit" onClick={handleclick}>
                        <i className="mdi mdi-magnify" />
                      </button>
                    </div>
                  </div>
                </div>
                </form>
                 </div>
                <div style={{width:100,height:50,float:"left"}}> </div>
                <div style={{width:100,height:50,float:"left",padding:15}}>
                <Button
                    color="success"
                    className="btn btn-secondary waves-effect"
                    style={{width:150}}
                    onClick={()=>{window.location.href="/AddStudent"}}
                  >
                    Add Student
                    </Button>{" "} </div>
                    <div style={{width:100,height:50,float:"left"}}> </div>
                    <div style={{width:100,height:50,float:"left",padding:15}}>
                    <Dropdown
                        isOpen={singlebtn}
                        toggle={() => setSinglebtn(!singlebtn)}
                      >
                        <DropdownToggle className="btn btn-success" caret>
                          Courses{" "}
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>FullStack Development</DropdownItem>
                          <DropdownItem>AWS Devops</DropdownItem>
                          <DropdownItem>Azure Devops</DropdownItem>
                          <DropdownItem>Pega</DropdownItem>
                          <DropdownItem>Salesforce</DropdownItem>
                          <DropdownItem>AIML</DropdownItem>
                          <DropdownItem>Gaming</DropdownItem>
                          <DropdownItem>UI/UX</DropdownItem>
                          <DropdownItem>VLSI</DropdownItem>
                          <DropdownItem>Flutter</DropdownItem>
                        </DropdownMenu>
                      </Dropdown> </div>
                <div style={{width:100,height:50,float:"left"}}> </div>
                <div style={{width:100,height:50,float:"left",padding:15}}>
                <Dropdown
                        isOpen={singlebtn1}
                        toggle={() => setSinglebtn1(!singlebtn1)}
                      >
                        <DropdownToggle className="btn btn-success" caret>
                          Count
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>No.of Presentees</DropdownItem>
                          <DropdownItem>No.of Absentees</DropdownItem>
                          <DropdownItem>Total Students</DropdownItem>
                          
                        </DropdownMenu>
                      </Dropdown>  </div>

            </div>
            <div className="table-responsive">
                  <Table className="table table-striped mb-0"style={{margin:"auto",width:"65%",textAlign:"center"}} >
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Roll Number</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Todays Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                       data.map((item,index)=>{
                        return(
                          <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.rollNo}</td>
                            <td>{item.name}</td>
                            <td>{item.course}</td>
                            <td>{"Present"}</td>
                            <td><button type="button" className="btn btn-primary" style={{color:"white"}}>Edit</button></td>
                          <td><button type="button" className="btn btn-danger" style={{color:"white"}} onClick={() => handleDelete(item.id)}>Delete</button></td>

                          </tr>
                        )
                       })
                      }

                    </tbody>
                    </Table>
          </div>
           
        </div>

    )
}
export default GetDetails