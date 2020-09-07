import React, { useEffect } from "react";

// Layout
import Default from "../Layouts/Default";

// Components
import FormSearch from "../../components/FormSearch";
// import Map from "../../components/Map";
// import { Table } from "../../components/Html";

// Repositories
import producerRepository from "../../repositories/Producer";
import productRepository from "../../repositories/Product";
import highlighterRepository from "../../repositories/Highlighter";
import georeferencingRepository from "../../repositories/Georeferencing";

function Home() {
  async function downloadDataGoogleSpreadsheets() {
    await producerRepository.loadData();
    await productRepository.getAll();
    await highlighterRepository.getAll();
    await georeferencingRepository.getAll();
  };

  useEffect(() => {
    // downloadDataGoogleSpreadsheets();
  }, []);

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
