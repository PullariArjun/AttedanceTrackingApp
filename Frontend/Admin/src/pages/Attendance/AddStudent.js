import PropTypes from "prop-types"
import React, { useEffect ,useState} from "react"
import { Row, Col, Card, Alert, Container } from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// action
import { registerUser, apiError, registerUserFailed } from "../../store/actions"

// Redux
import { connect } from "react-redux"
import { Link } from "react-router-dom"

// import images
import logo from "../../assets/images/logo-sm-dark.png"
import axios from "axios"

const Register = props => {
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    props.registerUser(values)
  }

  useEffect(() => {
    props.apiError("")
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });
  const [studentdetails, setStudentdetails] = useState({ rollNo: "", name: "", branch: "", course: "" ,college:""})
  const handleclick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/poststudent", {
            method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentdetails)

    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authToken)
      alert("Successfully registered")
      window.location.href='/getdetails'

    }
    else {
      alert("Enter Valid Credentials")
    }
  }
  return (
    <React.Fragment>
      {/* <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div> */}
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">Add Student</h5>
                    <p className="text-white-50 mb-0"></p>
                    <Link to="/" className="logo logo-admin mt-4">
                      <img src={logo} alt="" height="30" />
                    </Link>
                  </div>
                </div>
                <div className="card-body pt-5">

                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.user && props.user ? (
                        <Alert color="success">
                          Added User Successfully
                        </Alert>
                      ) : null}

                      {props.registrationError &&
                        props.registrationError ? (
                          <Alert color="danger">
                            {props.registrationError}
                          </Alert>
                        ) : null}

                      <div className="mb-3">
                        <AvField
                          id="email"
                          value={studentdetails.rollNo}
                          name="rollnumber"
                          label="Rollnumber"
                          className="form-control"
                          placeholder="Enter Rollnumber"
                          type="text"
                          required
                          onChange={e=>{
                            setStudentdetails({...studentdetails, rollNo:e.target.value})}
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                        value={studentdetails.name}
                          name="name"
                          label="Name"
                          type="text"
                          required
                          placeholder="Enter Name"
                          onChange={e=>{
                            setStudentdetails({...studentdetails, name:e.target.value})}
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                        value={studentdetails.branch}
                          name="branch"
                          label="Branch"
                          type="text"
                          required
                          placeholder="Enter Branch"
                          onChange={e=>{
                            setStudentdetails({...studentdetails, branch:e.target.value})}
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                        value={studentdetails.course}
                          name="course"
                          label="Course"
                          type="text"
                          required
                          placeholder="Enter Course"
                          onChange={e=>{
                            setStudentdetails({...studentdetails, course:e.target.value})}
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                        value={studentdetails.college}
                          name="college"
                          label="College"
                          type="text"
                          required
                          placeholder="Enter College"
                          onChange={e=>{
                            setStudentdetails({...studentdetails, college:e.target.value})}
                          }
                        />
                      </div>
                      

                      <div className="mt-4">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                          onClick={handleclick}
                        >
                          Add
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          <Link to="#" className="text-primary">
                          </Link>
                        </p>
                      </div>
                    </AvForm>

                  </div>
                </div>
              </Card>
              {/* <div className="mt-5 text-center">
                <p><a href="/login" className="fw-medium text-primary">
                  </a> </p>
                <p>© {new Date().getFullYear()}  <i
                    className="mdi mdi-heart text-danger"></i> 
                        </p>
              </div> */}
            </Col>
          </Row>
          </Container>
      </div>
    </React.Fragment>
  )
}

Register.propTypes = {
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.func,
  registrationError: PropTypes.any,
  user: PropTypes.any,
}

const mapStatetoProps = state => {
  const { user, registrationError, loading } = state.Account
  return { user, registrationError, loading }
}

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(Register)