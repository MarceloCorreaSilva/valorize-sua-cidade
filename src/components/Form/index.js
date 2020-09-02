import React from "react";

// Components
import Select from "../Select";

function Form() {
  return (
    <form
      className="form_filters"
      id="form_filters"
      novalidate="novalidate"
      onSubmit={(event) => {
          event.preventDefault();
      }}
    >
      <h3>Selecione o que você procura:</h3>
      <div
        className="uk-child-width-expand@s uk-child-width-1-3@m uk-margin uk-grid-small uk-grid uk-grid-stack"
        uk-grid=""
      >
        <div className="uk-width-expand uk-first-column">
          <div id="filter_atividades">
            <Select
              placeholder="Selecione a estrutura geográfica..."
              isMulti
              id="marcadores"
              name="marcadores"
              options={[
                { value: "Propriedade", label: "Propriedades" },
                { value: "Ponte", label: "Pontes" },
                { value: "Mata-burro", label: "Mata-burros" },
                { value: "Porteira", label: "Porteiras" },
                { value: "Silo", label: "Silos" },
                { value: "Tanque represa", label: "Tanques" },
                { value: "Tanque represa", label: "Represas" },
                { value: "Agroindústria", label: "Agroindústrias" },
              ]}
            />
          </div>
        </div>
        <div className="uk-width-1-2@s uk-grid-margin uk-first-column">
          <div id="filter_atividades">
            <Select
              placeholder="Selecione a sazonalidade..."
              isMulti
              id="comercializacao"
              name="meses"
              options={[
                { value: "janeiro", label: "Janeiro" },
                { value: "fevereiro", label: "Fevereiro" },
                { value: "marco", label: "Março" },
                { value: "abril", label: "Abril" },
                { value: "maio", label: "Maio" },
                { value: "junho", label: "Junho" },
                { value: "julho", label: "Julho" },
                { value: "agosto", label: "Agosto" },
                { value: "setembro", label: "Setembro" },
                { value: "outubro", label: "Outubro" },
                { value: "novembro", label: "Novembro" },
                { value: "dezembro", label: "Dezembro" },
              ]}
            />
          </div>
        </div>
      </div>
      <div
        className="uk-child-width-expand@s uk-child-width-1-3@m uk-margin uk-grid-small uk-grid"
        uk-grid=""
      >
        <div className="uk-width-expand uk-first-column">
          <div id="filter_atividades">
            <Select
              placeholder="Selecione a pecuária..."
              isMulti
              id="marcadores"
              name="pecuaria"
              options={[
                { value: "Bovino", label: "Bovino" },
                { value: "Ovino", label: "Ovino" },
                { value: "Caprino", label: "Caprino" },
                { value: "Suíno", label: "Suíno" },
                { value: "Piscicultura", label: "Piscicultura" },
              ]}
            />
          </div>
        </div>
        <div className="uk-width-expand">
          <div id="filter_producao">
            <Select
              placeholder="Selecione os gêneros alimentícios..."
              isMulti
              id="producao"
              name="producao"
              options={[
                { value: "Abobrinhas diversas", label: "Abobrinhas diversas" },
                { value: "Abobrinha verde", label: "Abobrinha verde" },
                { value: "Alface", label: "Alface" },
                { value: "Batat doce", label: "Batata Doce" },
                { value: "Berinjela", label: "Berinjela" },
                { value: "Cebolinha", label: "Cebolinha" },
                { value: "Couve", label: "Couve" },
                { value: "Couve flor", label: "Couve flor" },
                { value: "Melancia", label: "Melancia" },
                { value: "Laranja pera", label: "Laranja pera" },
                { value: "Mandioca descascada", label: "Mandioca descascada" },
                { value: "Maxixe", label: "Maxixe" },
                { value: "Abacaxí", label: "Abacaxí" },
                { value: "Polpa de fruta", label: "Polpa} de fruta" },
                { value: "Babana maçã", label: "Banana maçã" },
                { value: "Banana nanica", label: "Banana nanica" },
                { value: "Mamão formosa", label: "Mamão formosa" },
                { value: "Manga", label: "Manga" },
                { value: "Tomate", label: "Tomate" },
                { value: "Salsa", label: "Salsa" },
                { value: "Limão", label: "Limão" },
                { value: "Maracujá", label: "Maracujá" },
                { value: "Milho verde", label: "Milho verde" },
                { value: "Quiabo", label: "Quiabo" },
                { value: "Chuchu", label: "Chuchu" },
                { value: "Cenoura", label: "Cenoura" },
              ]}
            />
          </div>
        </div>
      </div>
      <div
        className="uk-child-width-expand@s uk-child-width-1-3@m uk-margin uk-grid-small uk-grid"
        uk-grid=""
      >
        <div className="uk-width-1-2@s uk-first-column">
          <div id="filter_atividades">
            <Select
              placeholder="Selecione os canais de comercialização..."
              isMulti
              id="comercializacao"
              name="comercializacao"
              options={[
                { value: "PAA", label: "PAA" },
                { value: "PNAE", label: "PNAE" },
                { value: "Feira", label: "Feira" },
              ]}
            />
          </div>
        </div>

        <div className="uk-width-1-2@s uk-grid-margin uk-first-column">
          <div className="uk-child-width-expand uk-grid" uk-grid="">
            <div className="uk-first-column">
              <label>
                <input
                  name="protegido"
                  value="1"
                  className="uk-checkbox"
                  type="checkbox"
                />{" "}
                Plantio coberto
              </label>
            </div>
            <div>
              <label>
                <input
                  name="irrigado"
                  value="fevereiro"
                  className="uk-checkbox"
                  type="checkbox"
                />{" "}
                Irrigação
              </label>
            </div>
          </div>
        </div>
        <div className="uk-width-expand uk-grid-margin uk-first-column">
          <button
            type="submit"
            id=""
            className="form_submit uk-button uk-button-primary uk-width-expand uk-button-small uk-border-rounded"
          >
            Filtrar
          </button>
        </div>
        <div className="uk-width-auto uk-grid-margin">
          <a href="" className="uk-icon-link uk-icon" uk-icon="close">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              data-svg="close"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-width="1.06"
                d="M16,16 L4,4"
              ></path>
              <path
                fill="none"
                stroke="#000"
                stroke-width="1.06"
                d="M16,4 L4,16"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </form>
  );
}

export default Form;
