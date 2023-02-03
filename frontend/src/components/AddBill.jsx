// React & Hooks
import React, { useState } from "react";
// Axios
import axios from "axios";
// Bootstrap
import { Button, Form } from "react-bootstrap";
// React-Router-Dom
import { useNavigate } from "react-router-dom";
// Snackbar
import { useSnackbar } from "notistack";

// AddBill function: for Adding data in list (POST REQ)
const AddBill = () => {
  // States
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  // Snackbar constant
  const { enqueueSnackbar } = useSnackbar();
  // React-Router-Dom constant
  let history = useNavigate();

  // function to send post req on onClick
  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { billingDate: date, amount: amount };
    try {
      await axios.post("http://localhost:8080/api/bills", post);
      enqueueSnackbar("Bill Added Successfully", { variant: "success" });
    } catch (e) {
      enqueueSnackbar(e, { variant: "success" });
    }
    history("/");
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <h2 className="text-white text-decoration-underline">
        <b>ADD BILL</b>
      </h2>
      <Form onSubmit={handleSubmit} className="w-50 mt-5 bg-dark p-5 rounded">
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label className="text-white">Date :</Form.Label>
          <Form.Control
            type="date"
            min="1997-01-01"
            max="2030-12-31"
            placeholder="dd-mm-yyyy"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            Enter the Bill Issue Date
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAmount">
          <Form.Label className="text-white">Amount :</Form.Label>
          <Form.Control
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <Form.Text className="text-muted">Add Bill Amount</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddBill;
