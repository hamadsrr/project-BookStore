import React, {useState, useEffect} from "react";
import {
  Nav,
  Navbar,
  Container,
  Card,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import "./header.css";
export default function Header() {
    const [ name, setName]= useState("")
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));
          fetch("http://localhost:5000/login", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => response.json())
            
            .then((data) => {
             console.log(data);
              setName(data.token.name)
            })
            .catch((err) =>{ 
              console.log(err)
            });
    
      }, []);

  return (
    <div>
      <>
        <Row>
          <Navbar fixed="top" className="Header">
            <Container>
              <Card.Img
                variant="top"
                className="header-logo"
                src="https://pngimg.com/uploads/book/book_PNG51065.png"
              />
              <Nav className="me-auto">
                <Nav.Link className="text" href="/Home">
                  Home
                </Nav.Link>

                <Nav.Link className="text" href="/Cart">
                  Cart
                </Nav.Link>
              </Nav>

              <Row>
                <Col sm={6}>
                  <Dropdown >
                    <Dropdown.Toggle className="drop" id="dropdown-basic">
                      Hi <b>{name}</b> 
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>localStorage.removeItem("token")} href="/">Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col sm={3}></Col>
              </Row>
            </Container>
          </Navbar>
        </Row>
      </>
    </div>
  );
}
