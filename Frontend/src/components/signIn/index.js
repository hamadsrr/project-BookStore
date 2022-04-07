import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Container, Row, Card, Col, Alert } from "react-bootstrap";
import { TextField } from "@mui/material/";
import "./signIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);

  function getLoginData() {
    axios
      .post("http://localhost:5000/Login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data !== undefined) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          const token = JSON.parse(localStorage.getItem("token"));
          fetch("http://localhost:5000/login", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              const isAdmin = data.token.isAdmin;
              if (isAdmin === true) {
                window.location.href = "/AddBook";
              } else if (isAdmin === false) {
                window.location.href = "/Home";
              }
              console.log(data.token.isAdmin);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        // setDisplay("Block");
        setToggle(true);

        setTimeout(() => {
          setToggle(false);
        }, 2000);

        console.log(err);
      });
  }

  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col className="card-center" sm={6}>
            <Card className="card-SignIn">
              <Card.Img
                variant="top"
                className="logo-card"
                src="https://pngimg.com/uploads/book/book_PNG51065.png"
              />
              <Card.Body>
                <Card.Title>Sign in</Card.Title>
                {toggle ? (
                  <Alert variant="danger">
                    your email or password is wrong!
                  </Alert>
                ) : null}
                <Card.Text>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    id="filled-basic"
                    label="Email"
                    variant="standard"
                    size="small"
                  />
                  <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    id="filled-basic"
                    label="Password"
                    variant="standard"
                    size="small"
                    type="password"
                  />
                  <Button className="toSignUp" href="/SignUp">
                    Regeiter
                  </Button>
                </Card.Text>
                <Button onClick={() => getLoginData()} className="buttonSignIn">
                  Sign in
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    </div>
  );
}
