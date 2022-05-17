import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

function DeleteModal({ showDelete, handleDeleteClose, id, action }) {
  const dispatch = useDispatch();

  const handle = () => {
    dispatch(action(id));
    handleDeleteClose();
  };

  return (
    <Modal show={showDelete} onHide={handleDeleteClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to proceed?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleDeleteClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handle}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
