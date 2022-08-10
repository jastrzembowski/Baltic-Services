import React from "react";
import Footer from "../footer/Footer";
import "./contact.scss";
function Contact() {
  return (
    <>
      <div className="contact-bg"></div>
      <div className="contact-text-box">
        <h1>Kontakt</h1>
        <p>
          Headquarters and booking center: <br />
          BALTIC SERVICES Sp. z o.o.
          <br />
          ul. Lęborska 4, 00-362 Gdańsk <br />
          Booking: +48 22 450 26 26
          <br />
          Reception: +48 22 450 26 00
          <br />
          NIP 521-350-75-82
          <br />
          <br />
          <br />
          <br />
          Bank account number: MILLENNIUM S.A BANK 05 1160 2202 0000 0001 3190
          2575 <br />
          SWIFT code for foreign transfers: BIGBPLPW
          <br />
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
