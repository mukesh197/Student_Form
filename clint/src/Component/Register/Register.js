import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import { styled } from '@mui/material/styles';
import { TextField, Button } from '@mui/material'
import "./Register.css"
import img from "../../Images/IT.png"

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
      color: "white"
    },
    '&:hover fieldset': {
      borderColor: 'white',
      color: "white"
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      color: "white"
    },
    '& .MuiInputBase-input': {
      color: "white"
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important',

    },
    ' .fieldset': {
      color: "white"
    }

  },
});


const Register = () => {
  return (
    <div className='main-box'>
      <div className='wrapper'>
        <Container className='cont1'>
          <Row>
            <Col>
              <CssTextField label="First name" id="custom-css-outlined-input" style={{ marginTop: "100px", color: "#fff" }} />
            </Col>
            <Col>
              <CssTextField label="Middle name" id="custom-css-outlined-input" style={{ marginTop: "100px", color: "#fff" }} />
            </Col>
            <Col>
              <CssTextField label="Last name" id="custom-css-outlined-input" style={{ marginTop: "100px", color: "#fff" }} />
            </Col>
          </Row>
          <Row >
            <Col >
              <CssTextField sx={{ width: '100%' }} label="Email" id="custom-css-outlined-input" style={{ marginTop: "20px" }} />
            </Col>
          </Row>
          <Row >
            <Col >
              <CssTextField sx={{ width: '100%' }} label="Mobile No." id="custom-css-outlined-input" style={{ marginTop: "20px" }} />
            </Col>
          </Row>
          <Row >
            <Col >
              <CssTextField sx={{ width: '100%' }} label="Your proffesion" id="custom-css-outlined-input" style={{ marginTop: "20px" }} />
            </Col>
          </Row>
          <Row >
            <Col >
              <CssTextField className='' sx={{ width: '100%' }} label="Password" id="custom-css-outlined-input" style={{ marginTop: "20px" }} />
            </Col>
          </Row>
          <Row >
            <Col >
              <CssTextField sx={{ width: '100%' }} label="Confirm Password" id="custom-css-outlined-input" style={{ marginTop: "20px" }} />
            </Col>
          </Row>
          <Row style={{marginTop:"20px"}}>
            <Col >
              <Button variant="contained">Submit</Button>
            </Col>
            <Col>
              <Button variant="contained" color='warning'>Contained</Button>
            </Col>
          </Row>
        </Container>
        <Container className='cont2'>
          <img src={img} alt="system"></img>
        </Container>
      </div>

    </div>
  )
}

export default Register
