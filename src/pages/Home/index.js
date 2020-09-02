import React from "react";

// Layout
import Default from "../Layouts/Default";

// Components
import Form from "../../components/Form";
// import Map from "../../components/Map";
import Table from "../../components/Table";

function Home() {
  return (
    <Default>
      <section className="uk-section uk-section-small">
        <div className="uk-container">
          <Form />

          {/* <Map /> */}
          
          <Table />
        </div>
      </section>
    </Default>
  );
}

export default Home;
