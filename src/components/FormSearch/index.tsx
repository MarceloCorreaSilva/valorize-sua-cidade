import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { ValueType, OptionTypeBase as OptionType } from 'react-select';

// Components
import { Select, Checkbox, Button } from '../Html';

// Data
import data from '../../data/data.json';

// Entities / Props
import { Producer } from '../../entities/Producer';
import { Highlighter } from '../../entities/Highlighter';
import { Product } from '../../entities/Product';

// Props
interface Filter {
  value: string;
  label: string;
}

interface Props {
  sessionProducers: Producer[];
  sessionHighlighters: Highlighter[];
  handleProducersFilters: (producers: Producer[]) => void;
  handleHighlightersFilters: (highlighters: Highlighter[]) => void;
}

const FormSearch: React.FC<Props> = ({
  sessionProducers,
  sessionHighlighters,
  handleProducersFilters,
  handleHighlightersFilters,
}) => {
  // Filters States
  const [structures, setStructures] = useState<Filter[]>([]);
  const [livestocks, setLivestocks] = useState<Filter[]>([]);
  const [productions, setProductions] = useState<Filter[]>([]);
  const [commercializations, setCommercializations] = useState<Filter[]>([]);
  const [coveredPlanting, setCoveredPlanting] = useState(false);
  const [irrigated, setIrrigated] = useState(false);

  // Filters Highlighters
  const filterHighlighters = useCallback(() => {
    let filterStructures: any[] = [];
    if (structures && structures.length > 0) {
      filterStructures = structures.map((item) => item.value);
      // console.log(filterStructures);
    }

    let highlightersWithStructureFilter = sessionHighlighters.filter((highlighter: Highlighter) => {
      return filterStructures.includes(highlighter.type) === true ? highlighter : null;
    });

    return highlightersWithStructureFilter;
  }, [sessionHighlighters, structures]);

  // Filters Producers
  const filterProducers = useCallback(() => {
    let producers: Producer[] = [];

    if (structures && structures.length > 0) {
      let filterStructures: any[] = [];
      filterStructures = structures.map((item) => item.value);
      console.log(filterStructures);

      if (filterStructures.includes('Propriedade')) {
        producers = sessionProducers;
      }
    }

    if ((livestocks && livestocks.length > 0) || (productions && productions.length > 0)) {
      let filterLivestocksAndProductions: any[] = [];
      livestocks.map((item) => filterLivestocksAndProductions.push(item.value));
      productions.map((item) => filterLivestocksAndProductions.push(item.value));
      console.log(filterLivestocksAndProductions);

      if (filterLivestocksAndProductions.length > 0) {
        let producersLivestocksAndProductions = producers
          .map((producer: Producer) => {
            let newProducts = producer.products.filter(
              (product: Product) => filterLivestocksAndProductions.includes(product.name) === true,
            );
            return { ...producer, products: newProducts };
          })
          .filter((producer: Producer) => producer.products.length > 0);

        producers = producersLivestocksAndProductions;

        console.log({ producers, producersLivestocksAndProductions });
      }
    }

    if (commercializations && commercializations.length > 0) {
      let filterCommercializations: any[] = [];
      filterCommercializations = commercializations.map((item) => item.value);
      //   console.log(filterCommercializations);

      let producersCommercializations = producers.filter((producer: Producer) => {
        return filterCommercializations.map((item) => {
          return producer.commercialization.includes(item) === true ? producer : null;
        });
      });

      producers = producersCommercializations;
    }

    if (irrigated || coveredPlanting) {
      let producersIrrigatedOrCovered = producers.filter((producer: Producer) => {
        return producer.irrigated === irrigated && producer.covered_planting === coveredPlanting;
      });

      producers = producersIrrigatedOrCovered;
    }

    return producers;
  }, [commercializations, coveredPlanting, irrigated, livestocks, productions, sessionProducers, structures]);


  // Clear Search Form
  const handleClearSearchForm = useCallback(() => {
    setStructures([]);
    setLivestocks([]);
    setProductions([]);
    setCommercializations([]);
    setCoveredPlanting(false);
    setIrrigated(false);

    handleProducersFilters([]);
    handleHighlightersFilters([]);
  }, [handleProducersFilters, handleHighlightersFilters]);

  // Submit Search Form
  const handleSubmitSearchForm = useCallback(() => {
    if (
      structures &&
      structures.length === 0 &&
      livestocks &&
      livestocks.length === 0 &&
      commercializations &&
      commercializations.length === 0 &&
      productions &&
      productions.length === 0 &&
      coveredPlanting === false &&
      irrigated === false
    ) {
      handleProducersFilters(sessionProducers);
      handleHighlightersFilters(sessionHighlighters);
    } else {
      handleProducersFilters(filterProducers());
      handleHighlightersFilters(filterHighlighters());
    }
  }, [
    commercializations,
    coveredPlanting,
    filterHighlighters,
    filterProducers,
    irrigated,
    livestocks,
    productions,
    sessionHighlighters,
    sessionProducers,
    structures,
    handleProducersFilters,
    handleHighlightersFilters
  ]);

  return (
    <form
      onSubmit={(event: FormEvent) => {
        event.preventDefault();
        handleSubmitSearchForm();
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
              onChange={(selectedOption: ValueType<OptionType>) => {
                setStructures(selectedOption?.map((selected: OptionType) => selected));
              }}
            />
          </div>
        </div>
        <div className="uk-child-width-expand@s uk-child-width-1-3@m uk-margin uk-grid-small uk-grid" uk-grid="">
          <div className="uk-width-expand uk-first-column">
            <Select
              name="livestocks"
              placeholder="Selecione a pecuária..."
              isMultiple={true}
              value={livestocks}
              options={data.livestock}
              onChange={(selectedOption: ValueType<OptionType>) => {
                setLivestocks(selectedOption?.map((selected: OptionType) => selected));
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
                onChange={(selectedOption: ValueType<OptionType>) => {
                  setProductions(selectedOption?.map((selected: OptionType) => selected));
                }}
              />
            </div>
          </div>
        </div>
        <div className="uk-child-width-expand@s uk-child-width-1-3@m uk-margin uk-grid-small uk-grid" uk-grid="">
          <div className="uk-width-1-2@s uk-first-column">
            <Select
              name="commercializations"
              placeholder="Selecione os canais de comercialização..."
              isMultiple={true}
              value={commercializations}
              options={data.commercialization}
              onChange={(selectedOption: ValueType<OptionType>) => {
                setCommercializations(selectedOption?.map((selected: OptionType) => selected));
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
  );
};

export default FormSearch;
