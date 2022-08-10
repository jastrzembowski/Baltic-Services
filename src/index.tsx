import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Offerbox from "./components/offerbox/Offerbox";
import reportWebVitals from "./reportWebVitals";
import PropertyDetails from "./components/propertyDetails/PropertyDetails";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<Offerbox />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>{" "}
  </React.StrictMode>
);

reportWebVitals();
