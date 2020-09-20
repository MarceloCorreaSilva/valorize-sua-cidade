/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { ValueType, OptionTypeBase as OptionType } from "react-select";

// Components
import { Select, Checkbox, Button, Table } from "../Html";
import Pagination from "../Pagination";
import GoogleMap from "../GoogleMaps";
import LeafletMap from "../LeafletMaps";

// Configs
import config from "../../config";

// Data
import data from "../../data/data.json";

// Repositories
import producerRepository, { Producer } from "../../repositories/Producer";
import productRepository, { Product } from "../../repositories/Product";
import highlighterRepository, {
  Highlighter,
} from "../../repositories/Highlighter";

// Props
interface Filter {
  value: string;
  label: string;
}

const FormSearch: React.FC = () => {
  // Filters States
  const [structures, setStructures] = useState<Filter[]>([]);
  const [months, setMonths] = useState<Filter[]>([]);
  const [livestocks, setLivestocks] = useState<Filter[]>([]);
  const [productions, setProductions] = useState<Filter[]>([]);
  const [commercializations, setCommercializations] = useState<Filter[]>([]);
  const [coveredPlanting, setCoveredPlanting] = useState(false);
  const [irrigated, setIrrigated] = useState(false);

  // States
  const [products, setProducts] = useState<Product[]>([]);
  const [producers, setProducers] = useState<Producer[]>([]);
  const [highlighters, setHighlighters] = useState<Highlighter[]>([]);

  // Session State
  const [sessionProducts, setSessionProducts] = useState<Product[]>([]);
  const [sessionProducers, setSessionProducers] = useState<Producer[]>([]);
  const [sessionHighlighters, setSessionHighlighters] = useState<Highlighter[]>(
    []
  );

  // Pagination State
  const [itemsOnPage, setItemsOnPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: itemsOnPage,
  });

  // Load Data From Google Spreadsheets
  useEffect(() => {
    const loadDataSpreadsheetsFromGoogle = async () => {
      const products = sessionStorage.getItem("products");
      if (!products) {
        productRepository
          .getAll()
          .then((response) => {
            setSessionProducts(response);
            sessionStorage.setItem("products", JSON.stringify(response));
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            console.log("Produtos");
          });
      } else {
        setSessionProducts(JSON.parse(products));
      }

      const producers = sessionStorage.getItem("producers");
      if (!producers) {
        producerRepository
          .getAll()
          .then(async (response) => {
            setSessionProducers(response);
            sessionStorage.setItem("producers", JSON.stringify(response));
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            console.log("Produtores");
          });
      } else {
        setSessionProducers(JSON.parse(producers));
      }

      const highlighters = sessionStorage.getItem("highlighters");
      if (!highlighters) {
        highlighterRepository
          .getAll()
          .then((response) => {
            setSessionHighlighters(response);
            sessionStorage.setItem("highlighters", JSON.stringify(response));
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            console.log("Marcadores");
          });
      } else {
        setSessionHighlighters(JSON.parse(highlighters));
      }
    };

    loadDataSpreadsheetsFromGoogle();
  }, []);

  const onPaginationChange = (start: number, end: number) => {
    setPagination({ start: start, end: end });
  };

  const filterHighlighters = useCallback(() => {
    let filterStructures: any[] = [];
    if (structures && structures.length > 0) {
      filterStructures = structures.map((item) => item.value);
      console.log(filterStructures);
    }

    let highlightersWithStructureFilter = sessionHighlighters.filter(
      (highlighter: Highlighter) => {
        return filterStructures.includes(highlighter.type) === true
          ? highlighter
          : null;
      }
    );

    return highlightersWithStructureFilter;
  }, [sessionHighlighters, structures]);

  const filterProducers = useCallback(() => {
    let filterStructures: any[] = [];
    if (structures && structures.length > 0) {
      filterStructures = structures.map((item) => item.value);
      console.log(filterStructures);
    }

    let filterLivestocks: any[] = [];
    if (livestocks && livestocks.length > 0) {
      livestocks.map((item) => filterLivestocks.push(item.value));
      console.log(filterLivestocks);
    }

    let filterProductions: any[] = [];
    if (productions && productions.length > 0) {
      productions.map((item) => filterProductions.push(item.value));
      console.log(filterProductions);
    }

    let producers: any[] = [];
    if (filterStructures.includes("Propriedade")) {
      producers = sessionProducers;

      if (filterLivestocks.length > 0) {
        let producersWithLivestockFilter = producers
          .map((producer: Producer) => {
            let newProducts = producer.produtos.filter((product: Product) =>
              filterLivestocks.includes(product.name) === true ? product : null
            );
            return { ...producer, produtos: newProducts };
          })
          .filter((producer: Producer) => producer.produtos.length > 0);

        producers = producersWithLivestockFilter;
      }

      if (filterProductions.length > 0) {
        let producersWithProductionFilter = producers
          .map((producer: Producer) => {
            let newProducts = producer.produtos.filter(
              (product: Product) =>
                filterProductions.includes(product.name) === true
            );
            return { ...producer, produtos: newProducts };
          })
          .filter((producer: Producer) => producer.produtos.length > 0)
          .filter((producer: Producer) => producer.irrigacao === irrigated)
          .filter((producer: Producer) => producer.cultivo_protegido === coveredPlanting );

          producers.concat(producersWithProductionFilter)
      }
    }

    return producers;
  }, [coveredPlanting, irrigated, livestocks, productions, sessionProducers, structures]);

  // Clear Search Form
  const handleClearSearchForm = useCallback(() => {
    setStructures([]);
    setMonths([]);
    setLivestocks([]);
    setProductions([]);
    setCommercializations([]);
    setCoveredPlanting(false);
    setIrrigated(false);

    setHighlighters([]);
    setProducers([]);
  }, []);

  // Submit Search Form
  const handleSubmitSearchForm = useCallback(() => {
    if (
      structures.length === 0 &&
      livestocks.length === 0 &&
      commercializations.length === 0 &&
      months.length === 0 &&
      productions.length === 0 &&
      coveredPlanting === false &&
      irrigated === false
    ) {
      setHighlighters(sessionHighlighters);
      setProducers(sessionProducers);
    } else {
      setHighlighters(filterHighlighters());
      setProducers(filterProducers());
    }
  }, [
    commercializations.length,
    coveredPlanting,
    filterHighlighters,
    filterProducers,
    irrigated,
    livestocks.length,
    months.length,
    productions.length,
    sessionHighlighters,
    sessionProducers,
    structures.length,
  ]);

   // Submit Search Form
   const handleSubmitSearchForm2 = useCallback(() => {    
    if (
      structures.length === 0 &&
      livestocks.length === 0 &&
      commercializations.length === 0 &&
      months.length === 0 &&
      productions.length === 0 &&
      coveredPlanting === false &&
      irrigated === false
      ) {
        setProducers(sessionProducers);
        setHighlighters(sessionHighlighters);
    } else {
      // List filters
      let filterCommercializations: any[] = [];
      if (commercializations && commercializations.length > 0) {
        filterCommercializations = commercializations.map((item) => item.value);
        // console.log(filterCommercializations);
      }

      let filterLivestocks: any[] = [];
      if (livestocks && livestocks.length > 0) {
        livestocks.map((item) => filterLivestocks.push(item.value));
        // console.log(filterLivestocks);
      }

      let filterProductions: any[] = [];
      if (productions && productions.length > 0) {
        productions.map((item) => filterProductions.push(item.value));
        // console.log(filterProductions);
      }

      let filterMonths: any[] = [];
      if (months && months.length > 0) {
        filterMonths = months.map((item) => item.value);
      }

      let filterStructures: any[] = [];
      if (structures && structures.length > 0) {
        filterStructures = structures.map((item) => item.value);
        // console.log(filterStructures);
      }

      // Production Filter
      let producersWithProductionFilter = sessionProducers
        .map((producer: Producer) => {
          let newProducts = producer.produtos.filter(
            (product: Product) =>
              filterProductions.includes(product.name) === true
          );
          return { ...producer, produtos: newProducts };
        })
        .filter((producer: Producer) => producer.produtos?.length > 0)
        .filter((producer: Producer) =>
          producer.irrigacao === irrigated ? producer : null
        )
        .filter((producer: Producer) =>
          producer.cultivo_protegido === coveredPlanting ? producer : null
        )
        .filter((producer: Producer) => {
          return filterCommercializations.map((item) =>
            producer.comercializacao.indexOf(item) > -1 ? producer : null
          );
        });

      // Livestock Filter
      let producersWithLivestockFilter = sessionProducers
        .map((producer: Producer) => {
          let newProducts = producer.produtos.filter(
            (product: Product) =>
              filterLivestocks.includes(product.name) === true
          );
          return { ...producer, produtos: newProducts };
        })
        .filter((producer: Producer) => producer.produtos.length > 0)
        .filter((producer: Producer) =>
          filterCommercializations.map((item) =>
            producer.comercializacao.includes(item)
          )
        );

      // Livestock and Production Filter
      let producersLivestockAndProduction = producersWithProductionFilter.concat(
        producersWithLivestockFilter
      );

      // Livestock and Month Filter
      let producersWithMonthFilter = producersWithProductionFilter.filter(
        (producer: Producer) => {
          // Products With Month Filter
          let productsWithMonthFilter = producer.produtos.filter(
            (product: Product) => {
              // Month with Positive Production
              let monthsWithProduction = product.months.filter(
                (month) => month.total > 0
              );
              // Filtered Based on the Filter
              let filteredProducts = monthsWithProduction
                .map((production) =>
                  filterMonths.includes(production.month) === true
                    ? product
                    : null
                )
                .filter((product) => product);

              return filteredProducts.length > 0 ? product : null;
            }
          );
          // console.log("productsWithMonthFilter: ", productsWithMonthFilter);
          return { ...producer, produtos: productsWithMonthFilter };
        }
      );

      // Structure Filter
      let highlightersWithStructureFilter = sessionHighlighters.filter(
        (highlighter: Highlighter) => {
          return filterStructures.includes(highlighter.type) === true
            ? highlighter
            : null;
        }
      );
      // console.log("Filter: ", highlightersWithStructureFilter);

      setHighlighters(highlightersWithStructureFilter);
      setProducers(producersLivestockAndProduction);
    }
  }, [commercializations, coveredPlanting, irrigated, livestocks, months, productions, sessionHighlighters, sessionProducers, structures]);

  return (
    <>
      <form
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          handleSubmitSearchForm2();
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
                to="!#"
                className="uk-button uk-button-default uk-button-large uk-icon-link uk-icon"
                uk-icon="icon: close; ratio: 2"
                onClick={handleClearSearchForm}
              />
            </div>
          </div>
        </fieldset>
      </form>

      {config.useGoogleMaps === true ? (
        <GoogleMap producers={producers} highlighters={highlighters} />
      ) : (
        <LeafletMap producers={producers} highlighters={highlighters} />
      )}

      {producers && producers.length > 0 && <hr />}

      {producers &&
        producers.length > 0 &&
        producers
        //   .slice(pagination.start, pagination.end)
          .map((producer, index) => <Table key={index} data={producer} />)}

      {/* {producers && producers.length > 0 && (
        <Pagination
          itemsOnPage={itemsOnPage}
          onPaginationChange={onPaginationChange}
          total={producers.length}
          alignment="right"
        />
      )} */}
    </>
  );
};

export default FormSearch;
