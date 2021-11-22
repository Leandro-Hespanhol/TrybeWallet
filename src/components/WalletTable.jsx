import React, { Component } from 'react';

import './WalletTable.css';

export default class WalletTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr className="tr-class">
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
