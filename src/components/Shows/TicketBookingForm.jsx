import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const TicketBookingForm = () => {
  const data = useLoaderData();
  const { name, language, status } = data;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    movie: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("ticketData", JSON.stringify(formData));
    setFormData({
      name: "",
      email: "",
      movie: "",
      date: "",
      time: "",
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <h2 className="text-center my-5">Movie Ticket Booking Form</h2>
      <h4 className="text-center">Movie Name: {name}</h4>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-5">
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="movie">
          <Form.Label>Movie Language: {language}</Form.Label>
          <Form.Control
            type="text"
            name="movie"
            value={formData.movie}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Status: {status}</Form.Label>
          <Form.Control
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="mt-4 d-flex justify-content-between">
          <Button variant="warning" type="submit">
            Book Ticket
          </Button>
          <Link to="/">
            <Button variant="success">Back to Home</Button>
          </Link>
        </div>
      </Form>
    </>
  );
};

export default TicketBookingForm;
