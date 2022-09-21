import React from 'react'
import {Navbar,Nav,Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import img from "../../Images/Lucky.png"
import "./Navbar.css"

const Navbars = () => {
  return (
    <>
      <Navbar  expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand href="#home">
         <img src={img} alt="Luckyinfo tech"></img>   
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className='fw-bolder fonts'><i class="fa-solid fa-house"></i> Home</Nav.Link>
            <Nav.Link href="#link" className='fw-bolder fonts'><i class="fa-solid fa-user-plus"></i> Register</Nav.Link>
            <Nav.Link href="#link" className='fw-bolder fonts'> <i class="fa-solid fa-user"></i> Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbars
