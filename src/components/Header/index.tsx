import React from "react";

function Header() {
  return (
    <section
      className="uk-section uk-section-small uk-section-primary"
      style={{ background: "#305183" }}
    >
      <div className="uk-container">
        <h2 className="uk-margin-remove uk-text-bold">
          Mapa de {process.env.REACT_APP_CITY_NAME}
        </h2>
      </div>
    </section>
  );
}

export default Header;
