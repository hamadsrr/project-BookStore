import React, { useEffect, useState } from "react";
import Footer from "../footer/index";
import Header from "../header/index";
import { TextField, Alert } from "@mui/material/";
import "./addBook.css";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import axios from "axios";

export default function Add() {
  const [bookId, setBookId] = useState();
  const [title, setTitle] = useState();
  const [wrater, setWrater] = useState();
  const [price, setPrice] = useState();
  const [qty, setQty] = useState();
  const [image, setImage] = useState();
  const [displayError,setDisplayError]=useState("none")
  const [displaySuccess,setDisplaySuccess]=useState("none")
  const [displayButton, setDisplayButton]= useState(true)
    
  function AddBook() {
    axios.post("http://localhost:5000/addBook",
       {
        bookId: bookId,
        title: title,
        wrater: wrater,
        price: price,
        qty: qty,
        img: image,
      })
      .then((res) => { 
        
        console.log(res.data);
        setDisplaySuccess("block")
      })
      
      .catch((error) => {
        console.log(error.message);
        setDisplayError("block")
        
      });
      
  }


  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Form className="form-add">
              <Alert severity="error" style={{display:`${displayError}`}}>Fill in all inputs!</Alert>
              <Alert className="alertSuccess" severity="success" style={{display:`${displaySuccess}`}}> Success </Alert>
              <br/>
              <Card.Title className="Add-New-Book">Add New Book</Card.Title>
              <Form.Group className="mb-3" controlId="formBasicEmail" aria-required>
                <TextField
                  required
                  className="inputAddBook"
                  size="small"
                  id="standard-basic"
                  label="ID"
                  variant="filled"
                  onChange={(e) => setBookId(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <TextField
                  required
                  className="inputAddBook"
                  size="small"
                  id="standard-basic"
                  label="Title"
                  variant="filled"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <TextField
                  required
                  className="inputAddBook"
                  size="small"
                  id="standard-basic"
                  label="Wrater"
                  variant="filled"
                  onChange={(e) => setWrater(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <TextField
                  required
                  className="inputAddBook"
                  size="small"
                  id="standard-basic"
                  label="Price"
                  variant="filled"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <TextField
                  required
                  className="inputAddBook"
                  size="small"
                  id="standard-basic"
                  label="Qty"
                  variant="filled"
                  onChange={(e) => setQty(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <TextField
                  required
                  className="inputAddBook"
                  size="small"
                  id="standard-basic"
                  label="Img url"
                  variant="filled"
                  onChange={(e) => setImage(e.target.value)}
                />
              </Form.Group>
              <Button
                onClick={() => AddBook()}
                className="buttonToAdd"
                variant="primary"
                type="button"
                
              >
                Submit
              </Button>
            </Form>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
