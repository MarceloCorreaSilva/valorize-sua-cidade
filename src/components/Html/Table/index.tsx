import React, { useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";

// Repositories
import { ProductionOfTheMonth } from "../../../repositories/Product";

// Props
export interface TableProps {
  data: {
    id: number;
    nome: string;
    proprietario: string;
    irrigacao: boolean;
    cultivo_protegido: boolean;
    veiculos: number;
    comercializacao: string[];
    produtos: {
      name: string;
      year: number;
      months: ProductionOfTheMonth[];
      jan: number;
      fev: number;
      mar: number;
      abr: number;
      mai: number;
      jun: number;
      jul: number;
      ago: number;
      set: number;
      out: number;
      nov: number;
      dez: number;
      total: number;
    }[];
  };
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [products, setProducts] = useState(data.produtos);
  const columns = [
    { name: "Produto", selector: "name", sortable: true },
    { name: "Ano", selector: "year", sortable: true },
    { name: "Jan", selector: "jan", sortable: true },
    { name: "Fev", selector: "fev", sortable: true },
    { name: "Mar", selector: "mar", sortable: true },
    { name: "Abr", selector: "abr", sortable: true },
    { name: "Mai", selector: "mai", sortable: true },
    { name: "Jun", selector: "jun", sortable: true },
    { name: "Jul", selector: "jul", sortable: true },
    { name: "Ago", selector: "ago", sortable: true },
    { name: "Set", selector: "set", sortable: true },
    { name: "Out", selector: "out", sortable: true },
    { name: "Nov", selector: "nov", sortable: true },
    { name: "Dez", selector: "dez", sortable: true },
    { name: "Total", selector: "total", sortable: true },
  ];

  return (
    <>
      <div className="uk-card uk-card-default" style={{ marginBottom: "25px" }}>
        <div className="uk-card-header">
          <h3 className="uk-card-title">
            {data.id} - {data.nome}
          </h3>
          <p>
            <strong>Proprietário(a):</strong> {data.proprietario} /{" "}
            <strong>Irrigado:</strong> {data.irrigacao === true ? "Sim" : "Não"}{" "}
            / <strong>Cultivo protegido:</strong>{" "}
            {data.cultivo_protegido === true ? "Sim" : "Não"} /{" "}
            <strong>Veiculos:</strong> {data.veiculos} /{" "}
            <strong>Comercialização:</strong> {data.comercializacao.join(", ")}
          </p>
        </div>
        <div className="uk-card-body">
          <div className="uk-overflow-auto">
            <table className="uk-table uk-table-divider uk-table-small" id="datatable" style={{
              height: '200px'
            }}>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Ano</th>
                  <th>Jan</th>
                  <th>Fev</th>
                  <th>Mar</th>
                  <th>Abr</th>
                  <th>Mai</th>
                  <th>Jun</th>
                  <th>Jul</th>
                  <th>Ago</th>
                  <th>Set</th>
                  <th>Out</th>
                  <th>Nov</th>
                  <th>Dez</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {data.produtos &&
                  data.produtos.map((product, index) => (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.year}</td>
                      <td>{product.jan}</td>
                      <td>{product.fev}</td>
                      <td>{product.mar}</td>
                      <td>{product.abr}</td>
                      <td>{product.mai}</td>
                      <td>{product.jun}</td>
                      <td>{product.jul}</td>
                      <td>{product.ago}</td>
                      <td>{product.set}</td>
                      <td>{product.out}</td>
                      <td>{product.nov}</td>
                      <td>{product.dez}</td>
                      <td>{product.total}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

      {/* <DataTable
        columns={columns}
        data={products}
        pagination
        paginationTotalRows={5}
        paginationPerPage={5}
        paginationComponentOptions={{
          rowsPerPageText: "Produtos por página",
          rangeSeparatorText: "de",
          // selectAllRowsItem: true,
          // selectAllRowsItemText: "Todos",
        }}
      /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export { Table };
