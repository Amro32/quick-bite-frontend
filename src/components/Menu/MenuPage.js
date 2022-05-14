import React, { useEffect } from "react";
import menu1 from "../../assets/menu-1.jpg";
import MenuItem from "./MenuItem";
import MenuTitle from "./MenuTitle";
import BreadCrumb from "../AssetComponents/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../AssetComponents/Loading/Loading";
import { getMenus } from "../../redux/menu/menuActions";
import Title from "../AssetComponents/Title/Title";

function MenuPage() {
  const dispatch = useDispatch();
  const { loadingMenus, menus } = useSelector((state) => state.menuReducer);
  const { currency, currencyRate } = useSelector(
    (state) => state.currencyReducer
  );

  useEffect(() => {
    if (menus.length === 0) dispatch(getMenus());
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
            <div
              className="tab-class text-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                {menus.map((menu, i) => {
                  return (
                    <MenuTitle
                      href={"#tab-" + i}
                      title={menu.type}
                      subtitle={menu.name}
                      active={i === 0 ? "active" : null}
                      Icon={menu.icon}
                      key={i}
                    />
                  );
                })}
              </ul>
              <div className="tab-content">
                {menus.map((m, i) => {
                  return (
                    <div
                      id={"tab-" + i}
                      className={`tab-pane fade show p-0 ${
                        i === 0 ? "active" : ""
                      }`}
                      key={i}
                    >
                      <div className="row g-4">
                        {m?.items?.data?.map((item, j) => {
                          return (
                            <MenuItem
                              src={menu1}
                              name={item.name}
                              description={item.details}
                              price={item.base_price}
                              currency={currency}
                              currencyRate={currencyRate}
                              key={j}
                              sale={item.sale}
                              id={item.id}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
