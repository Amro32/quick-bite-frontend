import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { editMenu } from "../../redux/menu/menuActions";

function EditMenuModal({ showEditMenu, handleEditMenuClose, menu }) {
  const [name, setName] = useState(menu.name);
  const dispatch = useDispatch();

  const handle = () => {
    if (name.length === 0) return;
    dispatch(
      editMenu({
        id: menu.id,
        name: name,
      })
    );
    handleEditMenuClose();
  };

  return (
    <Modal show={showEditMenu} onHide={handleEditMenuClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Menu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Menu Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter menu name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Text className="text-muted">
              e.g : Burgers, Pizza, Beverages...
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleEditMenuClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handle();
          }}
        >
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditMenuModal;
