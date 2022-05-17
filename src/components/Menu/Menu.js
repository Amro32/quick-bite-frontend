import React, { useState } from "react";
import Loading from "../AssetComponents/Loading/Loading";
import MenuItem from "./MenuItem";
import MenuTitle from "./MenuTitle";
import menu1 from "../../assets/menu-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENCY } from "../../redux/currency/currencyTypes";
import AddMenuModal from "../Modals/AddMenuModal";
import AddItemModal from "../Modals/AddItemModal";

function Menu({ menus, loadingMenus, currency, currencies, currencyRate }) {
  const dispatch = useDispatch();
  const { role, isAuthenticated } = useSelector((state) => state.userReducer);
  const [showAddMenu, setShowAddMenu] = useState(false);
  const handleAddMenuClose = () => setShowAddMenu(false);
  const handleAddMenuOpen = () => setShowAddMenu(true);

  const [showAddItem, setShowAddItem] = useState(false);
  const handleAddItemClose = () => setShowAddItem(false);
  const handleAddItemOpen = () => setShowAddItem(true);

  const [menu_id, set_menu_id] = useState(0);

  const handleCurrencyChange = (e) => {
    let newCurrency = JSON.parse(e.target.value);
    dispatch({
      type: SET_CURRENCY,
      payload: {
        currency: newCurrency.symbol,
        currencyRate: parseFloat(newCurrency.rate),
      },
    });
  };

  return (
    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
      {/* admin modal to add menu */}
      <AddMenuModal
        handleAddMenuClose={handleAddMenuClose}
        showAddMenu={showAddMenu}
      />
      <AddItemModal
        handleAddItemClose={handleAddItemClose}
        showAddItem={showAddItem}
        menu_id={menu_id}
      />

      <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
        {menus.map((menu, i) => {
          return (
            <MenuTitle
              href={"#tab-" + i}
              id={menu.id}
              subtitle={menu.name}
              active={i === 0 ? "active" : null}
              key={i}
              menu={menu}
            />
          );
        })}
        {isAuthenticated && role !== "client" && (
          <div className="col d-flex align-items-center">
            <button className="btn primaryBtn" onClick={handleAddMenuOpen}>
              + Add Menu
            </button>
          </div>
        )}
      </ul>
      <div className="tab-content">
        {loadingMenus ? (
          <Loading />
        ) : (
          menus.map((menu, i) => {
            return (
              <div
                id={"tab-" + i}
                className={`tab-pane fade show p-0 ${i === 0 ? "active" : ""}`}
                key={i}
              >
                <div className="row g-4">
                  {menu?.items?.data?.map((item, j) => {
                    return (
                      <MenuItem
                        src={menu1}
                        currency={currency}
                        currencyRate={currencyRate}
                        key={j}
                        item={item}
                        menuid={menu.id}
                      />
                    );
                  })}
                  {isAuthenticated && role !== "client" && (
                    <div className="col-lg-6">
                      <button
                        className="btn primaryBtn"
                        onClick={() => {
                          handleAddItemOpen();
                          set_menu_id(menu.id);
                        }}
                      >
                        + Add Item
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
      {/* Currencies */}
      <div className="d-flex justify-content-end currencyRow">
        <select
          className="primaryBtn btn"
          defaultValue=""
          onChange={handleCurrencyChange}
        >
          <option disabled value="">
            Change Currency
          </option>
          {currencies.map((curr, i) => {
            return (
              <option value={JSON.stringify(curr)} key={i}>
                {curr.name} ({curr.symbol})
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Menu;
