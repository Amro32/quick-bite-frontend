import React, { Suspense, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loading from "./components/AssetComponents/Loading/Loading";
import Header from "./components/AssetComponents/Header/Header";
import Footer from "./components/AssetComponents/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function PagesSwitch() {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Suspense fallback={<Loading />}>
      {/* Header component */}
      <Header />

      <Routes>
        {/* Home page */}
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>

      {/* Footer component*/}
      <Footer />
    </Suspense>
  );
}

export default PagesSwitch;
