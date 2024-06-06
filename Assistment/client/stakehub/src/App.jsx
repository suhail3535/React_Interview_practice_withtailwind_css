import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form, Button } from 'react-bootstrap';

function App () {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [orderType, setOrderType] = useState('');
  const [qty, setQty] = useState('');
  const [price, setPrice] = useState('');
  const [editOrder, setEditOrder] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchOrders();
    fetchCompletedOrders();
  }, []);
  // <------------------get all  order------------>

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/orders');
      setPendingOrders(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching pending orders:', error);
      setError('Error fetching pending orders');
    }
  };
// <------------------get all completd order------------>
  const fetchCompletedOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/completedOrders');
      setCompletedOrders(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching completed orders:', error);
      setError('Error fetching completed orders');
    }
  };
// <---------------used for reset input----------->
  const handleResetInput = () => {
    setPrice('');
    setQty('');
    setOrderType('');
    setEditOrder(null);
    setError(null);
  };
// <---------------Used for post request------------>

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    if (orderType === "" || qty === "" || price === "") {
      alert("Please Enter Value First")
      return
    }
    try {
        await axios.post('http://localhost:5000/order', { type: orderType, qty: parseInt(qty), price: parseFloat(price) });
        console.log("Order placed");

      fetchOrders();
      fetchCompletedOrders();
      handleResetInput();
      alert("submited successfully")
  } catch (error) {
    console.error('Error processing order:', error);
    setError('Error processing order');
  }
  };

// <-----------------For delete order----------->

  const handleDelete = async (orderId) => {
    try {
      await axios.delete(`http://localhost:5000/order/${orderId}`);
      fetchOrders();
      fetchCompletedOrders();
      setError(null);
      alert("deleted ")

    } catch (error) {
      console.error('Error deleting order:', error);
      setError('Error deleting order');
    }
  };
  // <-----------------For delete completed order----------->

  const handleDelete2 = async (completedOrderId) => {
    try {
      await axios.delete(`http://localhost:5000/CompletedOrder/${completedOrderId}`);
      fetchOrders();
      fetchCompletedOrders();
      setError(null);
      alert("deleted ")
    } catch (error) {
      console.error('Error deleting completed order:', error);
      setError('Error deleting completed order');
    }
  };

  return (
    <>

      <h1 style={{textAlign:"center"}}>Order Matching System</h1>
    <div className='app'>
      <div className='form_div'>


          <Form className='form' onSubmit={handleOrderSubmit}>
            <h3>Order Form</h3>
        <Form.Group controlId="orderType">
          <Form.Label>Order Type</Form.Label>
          <Form.Control as="select" value={orderType} onChange={(e) => setOrderType(e.target.value)} disabled={!!editOrder}>
            <option value="">Select</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="qty">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" value={qty} onChange={(e) => setQty(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>
        <Button className='mt-3' variant="primary" type="submit">
          {editOrder ? 'Update Order' : 'Place Order'}
        </Button>

        </Form>
      </div>
      <div className='table_div'>


      <h2>Pending Orders</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Buyer Qty</th>
            <th>Buyer Price</th>
            <th>Seller Price</th>
            <th>Seller Qty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingOrders.map((order, index) => (
            <tr key={index}>
              <td>{order.buyerQty}</td>
              <td>{order.buyerPrice}</td>
              <td>{order.sellerPrice}</td>
              <td>{order.sellerQty}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(order._id)} className="ml-2">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2>Completed Orders</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {completedOrders.map((order, index) => (
            <tr key={index}>
              <td>{order.price}</td>
              <td>{order.qty}</td>
              <td>
                <Button id="del-btn" variant="danger" onClick={() => handleDelete2(order._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      </div>
    </>
  );
}

export default App;
