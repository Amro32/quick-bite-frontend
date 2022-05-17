import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { editItem } from "../../redux/menu/menuActions";
import { useDispatch } from "react-redux";

function EditItemModal({ showEditItem, handleEditItemClose, item, menu_id }) {
  const [data, setData] = useState(item);
  const dispatch = useDispatch();

  const handle = (e) => {
    e.preventDefault();
    if (data.images) delete data.images;
    dispatch(
      editItem({
        ...data,
        menu_id: menu_id,
      })
    );
    handleEditItemClose();
  };

  return (
    <Modal show={showEditItem} onHide={handleEditItemClose} animation={false}>
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
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formType">
            <Form.Label>Details</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter menu details"
              required
              value={data.details}
              onChange={(e) => setData({ ...data, details: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formType">
            <Form.Label>Type</Form.Label>
            <Form.Select
              required
              value={data.type}
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
              value={data.base_price}
              onChange={(e) => setData({ ...data, base_price: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSale">
            <Form.Label>Sale</Form.Label>
            <Form.Control
              type="number"
              required
              value={data.sale}
              onChange={(e) => setData({ ...data, sale: e.target.value })}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            type="button"
            onClick={handleEditItemClose}
          >
            Close
          </Button>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default EditItemModal;
