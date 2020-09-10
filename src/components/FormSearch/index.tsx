import React, { useState, useCallback, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { ValueType, OptionTypeBase as OptionType } from "react-select";

// Components
import { Select, Checkbox, Button, Table } from "../Html";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Map from "../Map";

// Data
import data from "../../data/data.json";

// Repositories
import producerRepository, { Producer } from "../../repositories/Producer";
import productRepository, { Product } from "../../repositories/Product";
import highlighterRepository, { Highlighter } from '../../repositories/Highlighter'
import georeferencingRepository, { Georeferencing } from '../../repositories/Georeferencing'

function FormSearch() {
  const [structures, setStructures] = useState([]);
  const [months, setMonths] = useState([]);
  const [livestocks, setLivestocks] = useState([]);
  const [productions, setProductions] = useState([]);
  const [commercializations, setCommercializations] = useState([]);
  const [coveredPlanting, setCoveredPlanting] = useState(false);
  const [irrigated, setIrrigated] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [producers, setProducers] = useState<Producer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [highlighter, setHighlighter] = useState<Highlighter[]>([]);
  const [georeferencing, setGeoreferencing] = useState<Georeferencing[]>([]);

  const handleClearSearchForm = useCallback(() => {
    setStructures([]);
    setMonths([]);
    setLivestocks([]);
    setProductions([]);
    setCommercializations([]);
    setCoveredPlanting(false);
    setIrrigated(false);
  }, []);

  const handleSubmitSearchForm = useCallback(async () => {
    producerRepository.getAll().then((response) => {
      setProducers(response);
      console.log('Produtores', response);
    });

    productRepository.getAll().then((response) => {
      setProducts(response);
      console.log('Produtos', response);
    });

    highlighterRepository.getAll().then((response) => {
      setHighlighter(response);
      console.log('Marcadores', response);
    });

    georeferencingRepository.getAll().then((response) => {
      setGeoreferencing(response);
      console.log('Georeferenciamento', response);
    });
  }, []);

  return (
    <>
      <form
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          handleSubmitSearchForm();

          // console.log(structures);
        }}
      >
        <fieldset className="uk-fieldset">
          <legend className="uk-legend">
            <strong>Selecione o que você procura:</strong>
          </legend>

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
                // onChange={setStructures}
                onChange={(selectedOption: ValueType<OptionType>) => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  const value = (selectedOption as OptionType).value;

                  setStructures(
                    selectedOption?.map((selected: OptionType) => selected)
                  );
                }}
              />
            </div>
            <div className="uk-width-1-2@s uk-grid-margin uk-first-column">
              <Select
                name="months"
                placeholder="Selecione a sazonalidade..."
                isMultiple={true}
                value={months}
                options={data.months}
                // onChange={setMonths}
                onChange={(selectedOption: ValueType<OptionType>) => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  const value = (selectedOption as OptionType).value;

                  setMonths(
                    selectedOption?.map((selected: OptionType) => selected)
                  );
                }}
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
                // onChange={setLivestocks}
                onChange={(selectedOption: ValueType<OptionType>) => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  const value = (selectedOption as OptionType).value;

                  setLivestocks(
                    selectedOption?.map((selected: OptionType) => selected)
                  );
                }}
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
                  // onChange={setProductions}
                  onChange={(selectedOption: ValueType<OptionType>) => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const value = (selectedOption as OptionType).value;

                    setProductions(
                      selectedOption?.map((selected: OptionType) => selected)
                    );
                  }}
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
                // onChange={setCommercializations}
                onChange={(selectedOption: ValueType<OptionType>) => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  const value = (selectedOption as OptionType).value;

                  setCommercializations(
                    selectedOption?.map((selected: OptionType) => selected)
                  );
                }}
              />
            </div>
            <div className="uk-width-1-2@s uk-grid-margin uk-first-column">
              <div className="uk-child-width-expand uk-grid" uk-grid="">
                <div className="uk-first-column">
                  <Checkbox
                    name="coveredPlanting"
                    label="Plantio coberto"
                    checked={coveredPlanting}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setCoveredPlanting(event.target.checked);
                    }}
                  />
                </div>
                <div>
                  <Checkbox
                    name="irrigated"
                    label="Irrigação"
                    checked={irrigated}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
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
                className="uk-button uk-button-default uk-button-large uk-icon-link uk-icon"
                uk-icon="icon: close; ratio: 2"
                onClick={handleClearSearchForm}
              />
            </div>
          </div>
        </fieldset>
      </form>

      <hr />

      {/* <Map /> */}

      {producers &&
        producers.map((producer: Producer, index: number) => (
          <Table key={index} data={producer} />
        ))}
    </>
  );
}

export default FormSearch;
