import React from "react";
import menu1 from "../../assets/menu-1.jpg";
import menu2 from "../../assets/menu-2.jpg";
import menu3 from "../../assets/menu-3.jpg";
import menu4 from "../../assets/menu-4.jpg";
import menu5 from "../../assets/menu-5.jpg";
import menu6 from "../../assets/menu-6.jpg";
import menu7 from "../../assets/menu-7.jpg";
import menu8 from "../../assets/menu-8.jpg";
import { FaUtensils, FaHamburger, FaCoffee } from "react-icons/fa";
import MenuItem from "./MenuItem";
import MenuTitle from "./MenuTitle";
import BreadCrumb from "../AssetComponents/BreadCrumb/BreadCrumb";

function MenuPage() {
  const menus = [
    {
      id: 1,
      type: "Popular",
      name: "Breakfast",
      icon: FaCoffee,
    },
    {
      id: 2,
      type: "Special",
      name: "Launch",
      icon: FaHamburger,
    },
    {
      id: 3,
      type: "Lovely",
      name: "Dinner",
      icon: FaUtensils,
    },
  ];
  return (
    <div>
      <BreadCrumb title={"Food Menu"} pageName={"Menu"} />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center primaryColor fw-normal">
              Food Menu
            </h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
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
                      <MenuItem
                        src={menu1}
                        name={"Chicken Burger"}
                        description={
                          "Ipsum ipsum clita erat amet dolor justo diam"
                        }
                        price={115}
                        currency={"$"}
                      />
                      <MenuItem
                        src={menu2}
                        name={"Chicken Burger"}
                        description={
                          "Ipsum ipsum clita erat amet dolor justo diam"
                        }
                        price={115}
                        currency={"$"}
                      />
                      <MenuItem
                        src={menu3}
                        name={"Chicken Burger"}
                        description={
                          "Ipsum ipsum clita erat amet dolor justo diam"
                        }
                        price={115}
                        currency={"$"}
                      />
                      <MenuItem
                        src={menu4}
                        name={"Chicken Burger"}
                        description={
                          "Ipsum ipsum clita erat amet dolor justo diam"
                        }
                        price={115}
                        currency={"$"}
                      />
                      <MenuItem
                        src={menu5}
                        name={"Chicken Burger"}
                        description={
                          "Ipsum ipsum clita erat amet dolor justo diam"
                        }
                        price={115}
                        currency={"$"}
                      />
                      <MenuItem
                        src={menu6}
                        name={"Chicken Burger"}
                        description={
                          "Ipsum ipsum clita erat amet dolor justo diam"
                        }
                        price={115}
                        currency={"$"}
                      />
                      <MenuItem
                        src={menu7}
                        name={"Chicken Burger"}
                        description={
                          "Ipsum ipsum clita erat amet dolor justo diam"
                        }
                        price={115}
                        currency={"$"}
                      />
                      <MenuItem
                        src={menu8}
                        name={"Chicken Burger"}
                        description={
                          "Ipsum ipsum clita erat amet dolor justo diam"
                        }
                        price={115}
                        currency={"$"}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
