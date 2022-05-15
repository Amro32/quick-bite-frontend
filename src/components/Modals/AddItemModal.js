import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addItem } from "../../redux/menu/menuActions";
import { useDispatch } from "react-redux";

function AddItemModal({ showAddItem, handleAddItemClose, menu_id }) {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const handle = (e) => {
    e.preventDefault();
    dispatch(
      addItem({
        ...data,
        menu_id: menu_id,
        is_trending: false,
        average_rating: 2.5,
      })
    );
    handleAddItemClose();
  };

  return (
    <Modal show={showAddItem} onHide={handleAddItemClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add Item</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handle}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter menu name"
              required
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formType">
            <Form.Label>Details</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter menu details"
              required
              onChange={(e) => setData({ ...data, details: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formType">
            <Form.Label>Type</Form.Label>
            <Form.Select
              required
              onChange={(e) => setData({ ...data, type: e.target.value })}
            >
              <option value="" disabled selected>
                Select a type
              </option>
              <option value="plate">Plate</option>
              <option value="sandwich">Sandwich</option>
              <option value="dessert">Dessert</option>
              <option value="drink">Drink</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Base Price</Form.Label>
            <Form.Control
              type="number"
              required
              onChange={(e) => setData({ ...data, base_price: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSale">
            <Form.Label>Sale</Form.Label>
            <Form.Control
              type="number"
              required
              onChange={(e) => setData({ ...data, sale: e.target.value })}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            type="button"
            onClick={handleAddItemClose}
          >
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

export default AddItemModal;
