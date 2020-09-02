import React from "react";

// Layout
import Default from "../Layouts/Default";

// Components
import Form from "../../components/Form";

function Home() {
  return (
    <Default>
      <section className="uk-section uk-section-small">
        <div className="uk-container">
          <Form />
          <div className="lista uk-margin"></div>
        </div>
      </section>
    </Default>
  );
}

export default Home;
