import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import './WalletTable.css';

class WalletTable extends Component {
  constructor() {
    super();
    this.generateExpense = this.generateExpense.bind(this);
    this.askValue = this.askValue.bind(this);
    this.currencyName = this.currencyName.bind(this);
  }

  askValue(currElem) {
    const cambio = Object.values(currElem.exchangeRates);
    const coin = cambio.find((elem2) => elem2.code === currElem.currency);
    return coin.ask;
  }

  currencyName(currElem) {
    const everyName = Object.values(currElem.exchangeRates);
    const name = everyName.find((elem2) => elem2.code === currElem.currency);
    return name.name.split('/')[0];
  }

  generateExpense() {
    const { expenses } = this.props;
    return (
      expenses.map((elem, idx) => (
        <tbody key={ idx }>
          <tr className="body-tr">
            <td>{elem.description}</td>
            <td>{elem.tag}</td>
            <td>{elem.method}</td>
            <td>{`${elem.value}`}</td>
            <td>{this.currencyName(elem)}</td>
            <td>{`${Number((this.askValue(elem))).toFixed(2)}`}</td>
            <td>
              {`${Number((this.askValue(elem))) * Number(elem.value).toFixed(2)}`}
            </td>
            <td>Real</td>
            <td><button type="button">Editar/Excluir</button></td>
          </tr>
        </tbody>)));
  }

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
          {this.generateExpense()}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletTable);

WalletTable.propTypes = {
  expenses: (PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object])),
};

WalletTable.defaultProps = {
  expenses: [],
};
