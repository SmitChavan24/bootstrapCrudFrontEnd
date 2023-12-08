import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
const NavbarComponent = () => {

  const [Select, setSelect] = useState({ addE: false, removeE: false });
  return (
    <>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand 
           as={Link}
           to={"/"}>MongoDb Crud Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  
            as={Link}
            to={"/addEmp"}
            onMouseOver={() => setSelect({ addE: true })} 
            onMouseOut={() => setSelect({ addE: false })}
            >
              <span
                className={
                  Select.addE === true ? "badge bg-light text-dark fs-7" : {}
                }
              >
                Add Employee
              </span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/removeEmp"}
              onMouseOver={() => setSelect({ removeE: true })} 
              onMouseOut={() => setSelect({ removeE: false })}
            >
              <span
                className={
                  Select.removeE === true
                    ? "badge bg-light text-dark fs-7"
                    : {}
                }
              >
                Remove Employee
              </span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
