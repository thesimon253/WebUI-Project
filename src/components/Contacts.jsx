import ContactsCards from "./ContactsCards";
import "../scss/Overview.scss";
import React, { useState } from "react";
function Contacts() {
  return (
    <>
      <div className="subtitle">
        <h1>Contacts</h1>
      </div>

      <section className="card">
        <ContactsCards />
      </section>
    </>
  );
}

export default Contacts;
