import React, { useState } from "react";
import { addTicketApi } from "../services/allApi";
import { useNavigate } from "react-router-dom";

function AddTicket() {
  const navigate = useNavigate();

  const [ticket, setTicket] = useState({
    title: "",
    category: "",
    price: "",
    availablecount: "",
    status: ""
  });

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, category, price } = ticket;
    if (!title || !category || !price) {
      alert("Fill all required fields");
      return;
    }
    await addTicketApi(ticket);
    navigate("/");
  }

  return (
    <div className="container-fluid mt-3">
      <div className="row justify-content-center">
        <div className="col-md-6 border bg-light p-3">
          <h2 className="fw-bold text-center">Add New Ticket</h2>
          

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Event Name</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={ticket.title}
                onChange={handleChange}
                placeholder="Enter event name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                name="category"
                value={ticket.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option value="Technical">Technical</option>
                <option value="Cultural">Cultural</option>
                <option value="Workshop">Workshop</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={ticket.price}
                onChange={handleChange}
                placeholder="Enter Price"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Available Count</label>
              <input
                type="number"
                className="form-control"
                name="availablecount"
                value={ticket.availablecount}
                onChange={handleChange}
                placeholder="Enter available tickets"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Status</label>
              <select
                className="form-select"
                name="status"
                value={ticket.status}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Soldout">Sold out</option>
              </select>
            </div>

            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-primary">Add Ticket</button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTicket;
