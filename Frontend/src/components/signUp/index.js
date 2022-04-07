import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Row, Card, Col, Form } from "react-bootstrap";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material/";
import "./signUp.css";

export default function Sign() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [password, setPassword] = useState("");

  function SignUp() {
    axios
      .post("http://localhost:5000/users/SignUp", {
        email: email,
        name: name,
        password: password,
        isAdmin: isAdmin,
      })
      .then((res) => {
        console.log(res);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col className="card-center" sm={6}>
            <Card className="card-Signup">
              <Card.Img
                variant="top"
                className="logo-card"
                src="https://pngimg.com/uploads/book/book_PNG51065.png"
              />
              <Card.Body>
                <Card.Title>Regeiter</Card.Title>
                <Card.Text>
                  <TextField
                    className="input"
                    label="Name"
                    variant="standard"
                    size="small"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    className="input"
                    label="Password"
                    variant="standard"
                    size="small"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextField
                    className="input"
                    label="Email"
                    variant="standard"
                    size="small"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <br />
                  <br />
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    row
                  >
                    <FormControlLabel
                      value="true"
                      control={<Radio size="small" />}
                      label="Admin"
                      onChange={(e) => setIsAdmin(e.target.value)}
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio size="small" />}
                      label="Shopper"
                      onChange={(e) => setIsAdmin(e.target.value)}
                    />
                  </RadioGroup>
                </Card.Text>
                <Button onClick={() => SignUp()} className="buttonRegister">
                  Sign up
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
