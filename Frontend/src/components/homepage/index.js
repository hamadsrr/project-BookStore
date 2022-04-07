import React, { useEffect, useState } from "react";
import Footer from "../footer/index";
import Header from "../header/index";
import "./homePage.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
export default function Home() {

  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");

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
        setEmail(data.token.email);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/showBook")
      .then((respone) => respone.json())
      .then((data) => setData(data.result))
      .catch((err) => console.log(err));
  }, []);
 

  function buy(e) {
    let qty = 1;
    const id = e.target.id;
    let book = {};
    data.map((el) => {
      if (id == el.bookId) {
        book = {
          userEmail: email,
          id: id,
          title: el.title,
          price: el.price,
          qty: qty,
          total: el.price,
        };
      }
    });

    const arr = JSON.parse(localStorage.getItem("Cart")) ?? [];

    const itemIndex = arr.findIndex(
      (item) => item.id === book.id && item.userEmail === book.userEmail
    );
    if (itemIndex !== -1) {
      const quantity = parseInt(arr[itemIndex].qty);
      const total1 = parseInt(arr[itemIndex].total);
      arr[itemIndex].qty = quantity + book.qty;
      arr[itemIndex].total = total1 + book.price * book.qty;
    } else {
      arr.push(book);
    }

    localStorage.setItem("Cart", JSON.stringify(arr));
  }

  return (
    <div>
      <Header />
      <Container>
        <Row>
          {data.map((element) => {
            return (
              <Col sm={12} md={4}>
                <Card className="Card-book">
                  <Card.Img
                    className="imgBooks"
                    variant="top"
                    src={element.img}
                  />
                  <Card.Body>
                    <Row>
                      <Col sm={12} md={7}>
                        <Card.Title>{element.title}</Card.Title>
                      </Col>
                      {/* <Col sm={3}></Col> */}
                      <Col md={5} className="Price">
                        <Card.Text>{element.price}$</Card.Text>
                      </Col>
                    </Row>

                    <hr />

                    <Card.Text>{element.wrater}</Card.Text>
                    <Button
                      className="Buy-button"
                      id={element.bookId}
                      onClick={(e) => buy(e)}
                      variant="primary"
                    >
                      Buy
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
