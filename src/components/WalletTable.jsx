import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
// import './WalletTable.css';

class WalletTable extends Component {
  constructor() {
    super();
    this.generateExpense = this.generateExpense.bind(this);
    this.askValue = this.askValue.bind(this);
    this.currencyName = this.currencyName.bind(this);
  }

  askValue(currElem) {
    // const { expenses } = this.props;
    const cambio = Object.values(currElem.exchangeRates);
    // console.log('currElem', currElem);
    // console.log('cambio', cambio);
    const coin = cambio.find((elem2) => elem2.code === currElem.currency);
    return coin.ask;
  }

  currencyName(currElem) {
    const everyName = Object.values(currElem.exchangeRates);
    // console.log(currElem);
    const name = everyName.find((elem2) => elem2.code === currElem.currency);
    // console.log(name.name.split('/')[0])
    return name.name.split('/');
  }

  generateExpense() {
    const { expenses } = this.props;
    // const { value, description, currency, method, tag } = expenses;
    return (
      expenses.map((elem, idx) => (
        <tr key={ idx }>
          <td>{elem.description}</td>
          <td>{elem.tag}</td>
          <td>{elem.method}</td>
          <td>{`${elem.value}`}</td>
          <td>{this.currencyName(elem)[0]}</td>
          <td>{`${Number((this.askValue(elem))).toFixed(2)}`}</td>
          <td>
            {`${Number((this.askValue(elem))) * Number(elem.value).toFixed(2)}`}
          </td>
          <td>Real</td>
          <td><button type="button">Editar/Excluir</button></td>
        </tr>)));
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
            {this.generateExpense()}
          </thead>
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
