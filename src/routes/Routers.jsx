import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "../pages/Layout";
import Login from "../pages/Auth/Login";
import Home from "../components/Home/home";
import Aboutus from "../components/aboutus/Aboutus";
import ContactUs from "../pages/Contact/ContactUs";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
