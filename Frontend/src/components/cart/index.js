import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Footer from "../footer/index";
import Header from "../header/index";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "./cart.css";

export default function Cart() {
  const [email, setEmail] = useState("");
  
  const [data, setData] = useState([]);
  const [sum, setSum] = useState();
  const [vat, setVat] = useState();
  const [total, setTotal] = useState();
  const [isChange, setIsChange] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Cart"));
    if (data) {
      setData(data);
      let sumArr = parseInt(
        data
          .filter(({ userEmail }) => userEmail === email)
          .reduce((a, b) => a + b.total, 0)
      );
      setSum(sumArr);
      setTotal(sumArr + sumArr * 0.15);

      setVat(sumArr + sumArr * 0.15 - sumArr);
    }
  }, [isChange]);

  function ChickOut() {
    swal({
      title: "THANK YOU",
      text: "Visit us again",
      icon: "success",
    });
    let items = localStorage.getItem("Cart")
      ? JSON.parse(localStorage.getItem("Cart"))
      : [];
    let index;
    for (let i = 0; i < items.length; i++) {
      // console.log(element);
      if (items[i].userEmail === email) {
        index = i;
        break;
      }
    }
    if (index === undefined) return;
    items.splice(index, 1);
    localStorage.setItem("Cart", JSON.stringify(items));
    // localStorage.setItem("Cart", e);
    setTimeout(() => {
      window.location.href = "/Home";
    }, 2500);
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:5000/login", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())

      .then((data) => {
        setEmail(data.token.email);
        setIsChange(!isChange);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col sm={12} md={8}>
            <Table className="table-Cart">
              <thead>
                <tr>
                  <th> Title</th>
                  <th> Qty</th>
                  <th>Price</th>
                </tr>
              </thead>

              {data.map((el) => {
                if (email === el.userEmail) {
                  // let sum=el.qty*el.price

                  return (
                    <tbody>
                      <tr>
                        <td>
                          <b>{el.title}</b>
                        </td>
                        <td>{el.qty}</td>
                        <td>{el.price} $</td>
                      </tr>
                    </tbody>
                  );
                }
              })}
            </Table>
          </Col>
          <Col md={4}>
            <Table className="table-Cart">
              <thead>
                <tr>
                  <th>Summry</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <b>Subtotal: </b>
                    {sum} $
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Vat: </b> {vat} $
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Total: </b>
                    {total} $
                  </td>
                </tr>
              </tbody>

              <Button
                onClick={() => ChickOut()}
                className="ChickOut-button"
                variant="primary"
              >
                CHICK OUT
              </Button>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
