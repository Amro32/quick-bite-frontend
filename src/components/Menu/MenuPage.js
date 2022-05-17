import React, { useEffect } from "react";
import menu1 from "../../assets/menu-1.jpg";
import MenuItem from "./MenuItem";
import MenuTitle from "./MenuTitle";
import BreadCrumb from "../AssetComponents/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../AssetComponents/Loading/Loading";
import { getMenus } from "../../redux/menu/menuActions";
import { getCurrencies } from "../../redux/currency/currencyActions";
import Title from "../AssetComponents/Title/Title";
import Menu from "./Menu";

function MenuPage() {
  const dispatch = useDispatch();
  const { loadingMenus, menus } = useSelector((state) => state.menuReducer);
  const { currency, currencyRate, currencies } = useSelector(
    (state) => state.currencyReducer
  );

  useEffect(() => {
    if (menus.length === 0) dispatch(getMenus());
    if (currencies.length === 0) dispatch(getCurrencies());
  }, [dispatch]);

  return (
    <div>
      <BreadCrumb title={"Food Menu"} pageName={"Menu"} />
      <div className="container-xxl py-5">
        <div className="container">
          <Title title="Food Menu" subtitle="Most Popular Items" />
          {loadingMenus ? (
            <Loading />
          ) : (
            <Menu
              menus={menus}
              loadingMenus={loadingMenus}
              currency={currency}
              currencyRate={currencyRate}
              currencies={currencies}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
