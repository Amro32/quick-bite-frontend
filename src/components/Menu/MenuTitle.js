import React, { useState } from "react";
import DeleteModal from "../Modals/DeleteModal";
import { FaTrash, FaEdit } from "react-icons/fa";
import { deleteMenu } from "../../redux/menu/menuActions";
import { useSelector } from "react-redux";
import EditMenuModal from "../Modals/EditMenuModal";

function MenuTitle({ href, id, subtitle, active, menu }) {
  const { isAuthenticated, role } = useSelector((state) => state.userReducer);

  const [editMenu, setEditMenu] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);
  const handleEditMenuOpen = () => setEditMenu(true);
  const handleEditMenuClose = () => setEditMenu(false);

  return (
    <li className="nav-item">
      <DeleteModal
        showDelete={deleteOpen}
        id={id}
        handleDeleteClose={handleDeleteClose}
        action={deleteMenu}
      />
      <EditMenuModal
        menu={menu}
        showEditMenu={editMenu}
        handleEditMenuClose={handleEditMenuClose}
      />
      <a
        className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${
          active ? "active" : ""
        }`}
        data-bs-toggle="pill"
        href={href}
      >
        {/* <i className="fa fa-2x primaryColor">
          <Icon size={30} />
        </i> */}
        <div className="ps-3">
          <h6 className="mt-n1 mb-0">{subtitle}</h6>
          {isAuthenticated && role !== "client" && (
            <div>
              <br />
              <FaEdit onClick={handleEditMenuOpen} />
              &nbsp;&nbsp;
              <FaTrash onClick={handleDeleteOpen} />
            </div>
          )}
        </div>
      </a>
    </li>
  );
}

export default MenuTitle;
