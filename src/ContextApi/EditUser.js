import React from "react";
import { Form, FormGroup, Label, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const EditUser = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Name"
          ></Form.Control>
        </FormGroup>
        <Button type="submit">Edit</Button>
        <Link to="/Home" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default EditUser;
