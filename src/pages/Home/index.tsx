import React, { useEffect } from "react";
// import api from "../../services/api-axios";

// Layout
import Default from "../Layouts/Default";

// Components
import FormSearch from "../../components/FormSearch";

function Home() {
  return (
    <Default>
      <section className="uk-section uk-section-small">
        <div className="uk-container">
          <FormSearch />
        </div>
      </section>
    </Default>
  );
}

export default Home;
