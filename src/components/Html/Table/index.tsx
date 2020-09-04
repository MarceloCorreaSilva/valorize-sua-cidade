import React from "react";

const Table = () => {
  return (
    <div className="lista uk-margin">
      <div className="uk-width-expand uk-first-column">
        <p>133 - Sitio Santa Tereza</p>
        <p>
          Proprietário(a): Jailson de Oliveira Soares / Irrigado: Sim / Cultivo
          protegido: Não / Veiculos: 1 / Comercialização: PNAE, PAA, FEIRA
        </p>
        <p></p>
        <table className="uk-table uk-table-divider uk-table-small">
          <tbody>
            <tr>
              <th>Produto</th>
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
            <tr>
              <td>Cebolinha</td>
              <td>0</td>
              <td>0</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>100,00</td>
            </tr>

            <tr>
              <td>Couve</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>12.5</td>
              <td>12.5</td>
              <td>12.5</td>
              <td>12.5</td>
              <td>12.5</td>
              <td>12.5</td>
              <td>12.5</td>
              <td>12.5</td>
              <td>0</td>
              <td>100,00</td>
            </tr>

            <tr>
              <td>Banana nanica</td>
              <td>0</td>
              <td>0</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>0</td>
              <td>1107,00</td>
            </tr>

            <tr>
              <td>Banana maçã</td>
              <td>0</td>
              <td>0</td>
              <td>16.6</td>
              <td>16.6</td>
              <td>16.6</td>
              <td>16.6</td>
              <td>16.6</td>
              <td>16.6</td>
              <td>16.6</td>
              <td>16.6</td>
              <td>16.6</td>
              <td>0</td>
              <td>149,40</td>
            </tr>

            <tr>
              <td>Salsa</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>2.77</td>
              <td>2.77</td>
              <td>2.77</td>
              <td>2.77</td>
              <td>2.77</td>
              <td>2.77</td>
              <td>2.77</td>
              <td>2.77</td>
              <td>2.77</td>
              <td>24,93</td>
            </tr>

            <tr>
              <td>Bovino</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>120.5</td>
              <td>120.5</td>
              <td>102.5</td>
              <td>120.5</td>
              <td>102.5</td>
              <td>152.5</td>
              <td>152.5</td>
              <td>152.5</td>
              <td>59</td>
              <td>1083,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Table };
