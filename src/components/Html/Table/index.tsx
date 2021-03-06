import React, { useState } from "react";

// Props
export interface TableProps {
  data: {
    id: number;
    name: string;
    owner: string;
    irrigated: boolean;
    covered_planting: boolean;
    vehicles: number;
    commercialization: string[];
    products: {
      name: string;
      year: number;
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
  const [products] = useState(data.products);

  return (
    <div className="uk-card uk-card-default" style={{ marginBottom: "25px" }}>
      <div className="uk-card-header">
        <h3 className="uk-card-title">
          {data.id} - {data.name}
        </h3>
        <p>
          <strong>Proprietário(a):</strong> {data.owner} /{" "}
          <strong>Irrigado:</strong> {data.irrigated === true ? "Sim" : "Não"} /{" "}
          <strong>Cultivo protegido:</strong>{" "}
          {data.covered_planting === true ? "Sim" : "Não"} /{" "}
          <strong>Veiculos:</strong> {data.vehicles} /{" "}
          <strong>Comercialização:</strong> {data.commercialization ? data.commercialization.join(", ") : ""}
        </p>
      </div>
      <div className="uk-card-body">
        <div className="uk-overflow-auto">
          <table
            className="uk-table uk-table-divider uk-table-small"
            id="datatable"
          >
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
              {products &&
                products.map((product, index) => (
                  <tr key={index}>
                    <td><strong>{product.name}</strong></td>
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
        </div>
      </div>
    </div>
  );
};

export { Table };
