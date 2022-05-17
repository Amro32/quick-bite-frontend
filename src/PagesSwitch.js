import React, { Suspense, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loading from "./components/AssetComponents/Loading/Loading";
import Header from "./components/AssetComponents/Header/Header";
import Footer from "./components/AssetComponents/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AboutPage from "./components/About/AboutPage";
import Contact from "./components/Contact/Contact";
import MenuPage from "./components/Menu/MenuPage";
import Book from "./components/Book/Book";
import Item from "./components/Item/Item";
import Admin from "./components/Admin/Admin";
import Terms from "./components/Terms/Terms";
import Privacy from "./components/Privacy/Privacy";

function PagesSwitch() {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Suspense fallback={<Loading />}>
      {/* Header component */}
      {location.pathname !== "/login" && <Header />}

      <Routes>
        {/* Home page */}
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/menu" exact element={<MenuPage />} />
        <Route path="/book" exact element={<Book />} />
        <Route path="/admin" exact element={<Admin />} />
              <Route path="/item/:id" exact element={<Item />} />
              <Route path="/terms" exact element={<Terms />} />
              <Route path="/privacy" exact element={<Privacy />} />
      </Routes>

      {/* Footer component*/}
      {location.pathname !== "/login" && <Footer />}
    </Suspense>
  );
}

export default PagesSwitch;
