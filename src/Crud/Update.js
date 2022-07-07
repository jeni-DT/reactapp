import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const nav = useNavigate();
  let { id } = useParams();
  const [fetch, setFetch] = useState(false);
  const [InValue, setInValue] = useState({});

  const [error, setError] = useState({
    regno: "",
    name: "",
    Class: "",
    num: "",
    total: "",
  });

  const handleText = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "regno":
        error.regno = "";
        break;

      case "Name":
        error.name = "";
        break;

      case "class":
        error.Class = "";
        break;

      case "num":
        error.num = "";
        break;

      case "total":
        error.total = "";
        break;

      default:
        break;
    }

    setInValue({ ...InValue, [name]: value });
  };

  const Validate = () => {
    const { regno, name, Class, total, num } = InValue;
    let errors = {};
    if (regno === "") {
      errors.regno = "RegNo can not be blank";
    }

    if (name === "") {
      errors.name = "Name can not be blank";
    }
    if (Class === "") {
      errors.Class = "Class can not be blank";
    }
    if (num === "") {
      errors.num = "Mobilenumber can not be blank";
    } else if (num.length != 10) {
      errors.num = "Enter valid mobile number";
    }
    if (total === "") {
      errors.total = "Enter your mark";
    }

    return errors;
  };

  const handleSub = (e) => {
    e.preventDefault();
    let errorsValid = Validate();
    if (Object.keys(errorsValid).length === 0) {
      axios
        .put(`http://localhost:8000/List/${id}`, InValue)
        .then((response) => {
          console.log("Added your data");
          nav("/fetch");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("errorvalid", errorsValid);
      setError(errorsValid);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/List/${id}`)
      .then((res) => {
        setInValue(res.data);
        setFetch(true);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(InValue);
  }, [fetch]);

  return (
    fetch && (
      <div>
        <div className="col-lg-12">
          <div className="col-lg-12">
            <Container className="col-3">
              <h1>Student Details</h1>
              <Form>
                <div>
                  <Form.Label>Reg.no:</Form.Label>
                  <Form.Control
                    type="text"
                    name="regno"
                    onChange={handleText}
                    value={InValue.regno}
                  ></Form.Control>
                  {error.regno && (
                    <span style={{ color: "red" }}>{error.regno}</span>
                  )}
                </div>
                <div>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={handleText}
                    value={InValue.name}
                  ></Form.Control>
                  {error.name && (
                    <span style={{ color: "red" }}>{error.name}</span>
                  )}
                </div>
                <div>
                  <Form.Label>Class:</Form.Label>
                  <Form.Control
                    type="text"
                    name="Class"
                    onChange={handleText}
                    value={InValue.Class}
                  ></Form.Control>
                  {error.Class && (
                    <span style={{ color: "red" }}>{error.Class}</span>
                  )}
                </div>
                <div>
                  <Form.Label>Mobile:</Form.Label>
                  <Form.Control
                    type="number"
                    name="num"
                    onChange={handleText}
                    value={InValue.num}
                  ></Form.Control>
                  {error.num && (
                    <span style={{ color: "red" }}>{error.num}</span>
                  )}
                </div>
                <div>
                  <Form.Label>Mark:</Form.Label>
                  <Form.Control
                    type="text"
                    name="total"
                    onChange={handleText}
                    value={InValue.total}
                  ></Form.Control>
                  {error.total && (
                    <span style={{ color: "red" }}>{error.total}</span>
                  )}
                </div>
                <br></br>
                <div className="d-grid ">
                  <Button
                    variant="dark"
                    size="lg"
                    type="submit"
                    onClick={(e) => handleSub(e)}
                  >
                    Update
                  </Button>
                </div>
              </Form>
            </Container>
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
    )
  );
}

export default Update;
