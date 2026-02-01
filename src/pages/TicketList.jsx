import React, { useState, useEffect } from 'react';
import { getTicketApi, deleteTicketApi } from '../services/allApi';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa6'
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"

function TicketList() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const res = await getTicketApi();
      setTickets(res.data);
    } catch (err) {
      console.log('Error fetching tickets:', err);
    }
  }

  useEffect(() => {
    fetchTickets();
  }, [])

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        'Are you sure you want to delete this ticket?'
      );
      if (!confirmDelete) return;
      await deleteTicketApi(id);
      fetchTickets();
    } catch (err) {
      console.log(err);
    }
  }
 
  const getStatusBadgeClass = (status) => {
  switch (status?.toLowerCase()) {
    case "active":
      return "badge bg-success";
    case "inactive":
      return "badge bg-secondary";
    case "soldout":
      return "badge bg-danger";
    default:
      return "badge bg-dark";
  }
};

  

  return (
    <div className="container mt-4">
     
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold text-dark">DYUTHI 2.0</h1>
        <p className="lead text-secondary fw-bold">
          Techno-Cultural Fest Ticket Management
        </p>
      </div>

      
      <div className="d-flex justify-content-end mb-3">
        <Link to={'/addticket'} className="btn btn-info btn-md">
          <FaPlus className="me-1" /> Add New Ticket
        </Link>
      </div>

     
      <div className="d-none d-md-block table-responsive">
        <table className="table table-bordered table-striped align-middle">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Count</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.length > 0 ? (
              tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.title}</td>
                  <td>{ticket.category}</td>
                  <td>{ticket.price}</td>
                  <td>{ticket.availablecount}</td>
                  <td>
                  <span className={getStatusBadgeClass(ticket.status)}>
                  {ticket.status}
                  </span>
                  </td>

                  <td className="d-flex flex-wrap gap-2">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => navigate(`/editticket/${ticket.id}`)} >
                      <FaEdit className='me-1'/> Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(ticket.id)} >
                      <MdDelete className='me-1'  />Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No tickets found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="d-md-none">
        {tickets.length > 0 ? (
          tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="card mb-3 shadow-sm"
            >
              <div className="card-body">
                <h5 className="card-title">{ticket.title}</h5>
                <p className="card-text mb-1">
                  <strong>Category:</strong> {ticket.category}
                </p>
                <p className="card-text mb-1">
                  <strong>Price:</strong> {ticket.price}
                </p>
                <p className="card-text mb-1">
                  <strong>Available Count:</strong> {ticket.availablecount}
                </p>
                 <p className="card-text mb-2">
                 <strong>Status:</strong>{" "}
                 <span className={getStatusBadgeClass(ticket.status)}>
                 {ticket.status}
                 </span>
                 </p>

                <div className="d-flex flex-wrap gap-2">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => navigate(`/editticket/${ticket.id}`)}>
                    <FaEdit /> 
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(ticket.id)}>
                      <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No tickets found</p>
        )}
      </div>
    </div>
  )
}

export default TicketList;
