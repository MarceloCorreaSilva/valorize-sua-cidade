import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Select from "../Select";
import Checkbox from "../Checkbox";
import Button from "../Checkbox/Button";

// Data
import data from "../../data/data.json";

function Form() {
  const [structures, setStructures] = useState([]);
  const [months, setMonths] = useState([]);
  const [livestocks, setLivestocks] = useState([]);
  const [productions, setProductions] = useState([]);
  const [commercializations, setCommercializations] = useState([]);
  const [coveredPlanting, setCoveredPlanting] = useState(false);
  const [irrigated, setIrrigated] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Selecione o que você procura:</legend>

        <div
          className="uk-child-width-expand@s uk-child-width-1-3@m uk-margin uk-grid-small uk-grid uk-grid-stack"
          uk-grid=""
        >
          <div className="uk-width-expand uk-first-column">
            <Select
              name="structures"
              placeholder="Selecione a estrutura geográfica..."
              isMultiple={true}
              value={structures}
              options={data.geographic_structure}
              onChange={setStructures}
            />
          </div>
          <div className="uk-width-1-2@s uk-grid-margin uk-first-column">
            <Select
              name="months"
              placeholder="Selecione a sazonalidade..."
              isMultiple={true}
              value={months}
              options={data.months}
              onChange={setMonths}
            />
          </div>
        </div>
        <div
          className="uk-child-width-expand@s uk-child-width-1-3@m uk-margin uk-grid-small uk-grid"
          uk-grid=""
        >
          <div className="uk-width-expand uk-first-column">
            <Select
              name="livestocks"
              placeholder="Selecione a pecuária..."
              isMultiple={true}
              value={livestocks}
              options={data.livestock}
              onChange={setLivestocks}
            />
          </div>
          <div className="uk-width-expand">
            <div id="filter_producao">
              <Select
                name="productions"
                placeholder="Selecione os gêneros alimentícios..."
                isMultiple={true}
                value={productions}
                options={data.production}
                onChange={setProductions}
              />
            </div>
          </div>
        </div>
        <div
          className="uk-child-width-expand@s uk-child-width-1-3@m uk-margin uk-grid-small uk-grid"
          uk-grid=""
        >
          <div className="uk-width-1-2@s uk-first-column">
            <Select
              name="commercializations"
              placeholder="Selecione os canais de comercialização..."
              isMultiple={true}
              value={commercializations}
              options={data.commercialization}
              onChange={setCommercializations}
            />
          </div>
          <div className="uk-width-1-2@s uk-grid-margin uk-first-column">
            <div className="uk-child-width-expand uk-grid" uk-grid="">
              <div className="uk-first-column">
                <Checkbox
                  name="coveredPlanting"
                  label="Plantio coberto"
                  checked={coveredPlanting}
                  onChange={(event) => {
                    setCoveredPlanting(event.target.checked);
                  }}
                />
              </div>
              <div>
                <Checkbox
                  name="irrigated"
                  label="Irrigação"
                  checked={irrigated}
                  onChange={(event) => {
                    setIrrigated(event.target.checked);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="uk-width-expand uk-grid-margin uk-first-column">
            <Button type="submit" label="Filtrar" />
          </div>
          <div className="uk-width-auto uk-grid-margin">
            <Link
              to="#"
              className="uk-icon-link uk-icon"
              uk-icon="close"
              onClick={() => {
                setStructures([]);
                setMonths([]);
                setLivestocks([]);
                setProductions([]);
                setCommercializations([]);
                setCoveredPlanting(false);
                setIrrigated(false);
              }}
            />
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default Form;
