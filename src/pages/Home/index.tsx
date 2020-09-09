import React, { useEffect } from "react";
// import api from "../../services/api-axios";

// Layout
import Default from "../Layouts/Default";

// Components
import FormSearch from "../../components/FormSearch";

// Repositories
// import producerRepository from "../../repositories/Producer";
// import productRepository from "../../repositories/Product";
// import highlighterRepository from "../../repositories/Highlighter";
// import georeferencingRepository from "../../repositories/Georeferencing";

function Home() {
  // async function downloadDataGoogleSpreadsheets() {
  //   await producerRepository.loadData().then((res) => {
  //     console.log(res);
  //   });
  //   await productRepository.getAll();
  //   await highlighterRepository.getAll();
  //   await georeferencingRepository.getAll();
  // }

  useEffect(() => {
    // downloadDataGoogleSpreadsheets();
    // accessSheet();

    // api
    //   .get("/")
    //   .then(function (response) {
    //     // handle success
    //     console.log(response.data);

    //     response.data.sheets.map((item: any) => {
    //       return console.log(item);
    //     });
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
  }, []);

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
