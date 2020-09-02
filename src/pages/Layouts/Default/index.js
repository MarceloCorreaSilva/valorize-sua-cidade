import React from "react";

// Components
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function Default({ children }) {
  return (
    <div className="uk-offcanvas-content">
      <div uk-height-viewport="expand: true">
        <Header />

        {children}

        <Footer />
      </div>
    </div>
  );
}

export default Default;
