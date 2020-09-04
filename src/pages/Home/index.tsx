import React from "react";

// Layout
import Default from "../Layouts/Default";

// Components
import FormSearch from "../../components/FormSearch";
// import Map from "../../components/Map";
// import { Table } from "../../components/Html";

function Home() {
  return (
    <Default>
      <section className="uk-section uk-section-small">
        <div className="uk-container">
          <FormSearch />

          {/* <Map /> */}

          {/* <Table /> */}
        </div>
      </section>
    </Default>
  );
}

export default Home;
