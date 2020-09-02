import React from "react";

// Components
import Header from "../../../components/Header";

function Default({ children }) {
  return (
    <div className="uk-offcanvas-content">
      <div uk-height-viewport="expand: true">
        <Header />

        {children}
      </div>
    </div>
  );
}

export default Default;
