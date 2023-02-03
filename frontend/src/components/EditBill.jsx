// React & Hooks
import React, { useEffect, useState } from "react";
// Axios
import axios from "axios";
// Bootstrap
import { Button, Form } from "react-bootstrap";
// React-Router-Dom
import { useNavigate, useParams } from "react-router-dom";
// Snackbar
import { useSnackbar } from "notistack";

const EditBill = () => {
  // States
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  // Snackbar constant
  const { enqueueSnackbar } = useSnackbar();
  // React-Router-Dom constant
  let history = useNavigate();
  // React-Router-Dom params: used as a parameter in which argument is pased from another component
  let { id } = useParams();

  // function to edit & update data on onClick
  const handleSubmit = async (e) => {
    e.preventDefault();
    const put = { billingDate: date, amount: amount };
    try {
      await axios.put(`http://localhost:8080/api/bills/${id}`, put);
      enqueueSnackbar("Bill Edited Successfully", { variant: "success" });
    } catch (e) {
      enqueueSnackbar(e, { variant: "success" });
    }
    history("/");
  };

  // useEffect: for fetching data which has to be updated
  useEffect(() => {
    const headers = {
      "Content-type": "application/json",
    };
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `http://localhost:8080/api/bills/${id}`,
          { headers }
        );
        setDate(response.billingDate);
        setAmount(response.amount);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchData();
  }, [id]);

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

export default EditBill;
