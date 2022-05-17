import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import EditItemModal from "../Modals/EditItemModal";
import DeleteModal from "../Modals/DeleteModal";
import { deleteItem } from "../../redux/menu/menuActions";
function MenuItem({ src, currency, currencyRate, item, menuid }) {
  const navigate = useNavigate();

  const [showEditItem, setShowEditItem] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleEditItemClose = () => setShowEditItem(false);
  const handleEditItemOpen = () => setShowEditItem(true);
  const handleDeleteClose = () => setDeleteOpen(false);
  const handleDeleteOpen = () => setDeleteOpen(true);

  const { isAuthenticated, role } = useSelector((state) => state.userReducer);

  return (
    <div className="col-lg-6">
      <EditItemModal
        item={item}
        handleEditItemClose={handleEditItemClose}
        showEditItem={showEditItem}
        menu_id={menuid}
      />
      <DeleteModal
        action={deleteItem}
        handleDeleteClose={handleDeleteClose}
        showDelete={deleteOpen}
        id={item.id}
      />
      <div className="d-flex align-items-center">
        <img
          className="flex-shrink-0 img-fluid rounded itemDiv"
          src={src}
          alt=""
          style={{ width: "80px" }}
          onClick={() => navigate("/item/" + item.id)}
        />
        <div className="w-100 d-flex flex-column text-start ps-4">
          <h5 className="d-flex justify-content-between border-bottom pb-2">
            <span
              className="itemDiv"
              onClick={() => navigate("/item/" + item.id)}
            >
              {item.name}
            </span>
            <span className="primaryColor">
              <small>{currency}</small>
              {item.sale ? (
                <span>
                  {(currencyRate * (item.base_price - item.sale)).toFixed(2)}
                  &nbsp;
                  <strike>{(item.base_price * currencyRate).toFixed(2)}</strike>
                </span>
              ) : (
                (item.base_price * currencyRate).toFixed(2)
              )}
            </span>
          </h5>
          <small className="fst-italic">{item.details}</small>
          {isAuthenticated && role !== "client" && (
            <div>
              <FaEdit onClick={handleEditItemOpen} />
              &nbsp;&nbsp;
              <FaTrash onClick={handleDeleteOpen} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
