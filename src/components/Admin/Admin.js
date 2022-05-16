import React, { useEffect, useState } from "react";
import BreadCrumb from "../AssetComponents/BreadCrumb/BreadCrumb";
import Title from "../AssetComponents/Title/Title";
import { useSelector, useDispatch } from "react-redux";
import { deleteAdmin, getAdmins } from "../../redux/admin/adminActions";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Loading from "../AssetComponents/Loading/Loading";
import AddAdminModal from "../Modals/AddAdminModal";

function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admins, loadingAdmins } = useSelector((state) => state.adminReducer);
  const { role, isAuthenticated } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (admins.length === 0) dispatch(getAdmins());
  }, []);

  useEffect(() => {
    if (!isAuthenticated || role !== "super admin") {
      navigate("/");
    }
  }, [isAuthenticated, role]);

  const handle = (id) => {
    dispatch(deleteAdmin(id));
  };

  const [addOpen, setAddOpen] = useState(false);

  const handleOpen = () => setAddOpen(true);
  const handleClose = () => setAddOpen(false);

  return (
    <div className="contact">
      <BreadCrumb title={"Admin Page"} pageName={"Admin"} />

      <Title title="Admins" subtitle={"Manage website administrators"} />

      <AddAdminModal show={addOpen} handleClose={handleClose} />
      <div className="container">
        {loadingAdmins ? (
          <Loading />
        ) : (
          admins.map((admin, i) => {
            return (
              <div className="row mt-3 mb-3" key={i}>
                <div className="col">{admin.first_name}</div>
                <div className="col">{admin.last_name}</div>
                <div className="col">{admin.email}</div>
                <div className="col">
                  <FaTrash onClick={() => handle(admin.id)} />
                </div>
              </div>
            );
          })
        )}
        <div className="d-flex justify-content-center mt-5">
          <button className="btn primaryBtn" onClick={handleOpen}>
            + Add Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
