import React, { useEffect } from "react";
// import api from "../../services/api-axios";

// Layout
import Default from "../Layouts/Default";

// Components
import FormSearch from "../../components/FormSearch";

// Repositories
import producerRepository from "../../repositories/Producer";
import productRepository from "../../repositories/Product";
import highlighterRepository from "../../repositories/Highlighter";
import georeferencingRepository from "../../repositories/Georeferencing";

function Home() {
  // Load Data From Google Spreadsheets
  useEffect(() => {
    const loadDataSpreadsheetsFromGoogle = () => {
      productRepository
        .getAll()
        .then((response) => {
          localStorage.setItem("products", JSON.stringify(response));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          console.log("Produtos");
        });

      producerRepository
        .getAll()
        .then((response) => {
          localStorage.setItem("producers", JSON.stringify(response));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          console.log("Produtores");
        });

      highlighterRepository
        .getAll()
        .then((response) => {
          localStorage.setItem("highlighters", JSON.stringify(response));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          console.log("Marcadores");
        });

      georeferencingRepository
        .getAll()
        .then((response) => {
          localStorage.setItem("georeferencing", JSON.stringify(response));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          console.log("Georeferenciamento");
        });
    };

    const lastUpdate = localStorage.getItem("lastUpdate");
    const data = new Date();

    if (lastUpdate) {
      let dateFromStorage = Date.parse(JSON.parse(lastUpdate));
      let actualDate = Date.parse(data.toISOString().split("T")[0]);

      if (actualDate > dateFromStorage) {
        localStorage.clear();
        loadDataSpreadsheetsFromGoogle();
      }
    } else {
      localStorage.setItem(
        "lastUpdate",
        JSON.stringify(data.toISOString().split("T")[0])
      );
      loadDataSpreadsheetsFromGoogle();
    }
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
