import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addMenu } from "../../redux/menu/menuActions";

function AddMenuModal({ showAddMenu, handleAddMenuClose }) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handle = () => {
    if (name.length === 0) return;
    dispatch(addMenu(name));
  };

  return (
    <Modal show={showAddMenu} onHide={handleAddMenuClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add Menu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Menu Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter menu name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Text className="text-muted">
              e.g : Burgers, Pizza, Beverages...
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleAddMenuClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleAddMenuClose();
            handle();
          }}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddMenuModal;
