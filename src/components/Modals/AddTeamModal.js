import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addMember } from "../../redux/team/teamActions";

function AddTeamModal({ show, handleClose }) {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const handle = (e) => {
    e.preventDefault();
    dispatch(addMember(data));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add Member</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handle}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setData({ ...data, full_name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formType">
            <Form.Label>Position</Form.Label>
            <Form.Select
              required
              onChange={(e) => setData({ ...data, position: e.target.value })}
            >
              <option value="" disabled selected>
                Select a position
              </option>
              <option value="manager">Manager</option>
              <option value="chef">Chef</option>
              <option value="waiter">Waiter</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              required
              onChange={(e) => setData({ ...data, image: e.target.files[0] })}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" type="button" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddTeamModal;
