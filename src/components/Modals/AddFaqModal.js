import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addFaq } from "../../redux/faq/faqActions";

function AddFaqModal({ show, handleClose }) {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const handle = (e) => {
    e.preventDefault();
    dispatch(addFaq(data));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add Faq</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handle}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formquestion">
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setData({ ...data, question: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formanswer">
            <Form.Label>Answer</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setData({ ...data, answer: e.target.value })}
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

export default AddFaqModal;
