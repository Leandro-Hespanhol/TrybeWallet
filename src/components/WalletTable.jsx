import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import './WalletTable.css';
import { deleteExpense } from '../actions';

class WalletTable extends Component {
  constructor(props) {
    super(props);
    this.generateExpense = this.generateExpense.bind(this);
    this.expenseDeletionButton = this.expenseDeletionButton.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   const { expenses } = this.props;
  //   if (expenses !== prevProps.expenses) {
  //     this.setState({ expenses });
  //   }
  // }

  // askValue(currElem) {
  //   const cambio = Object.values(currElem.exchangeRates);
  //   const coin = cambio.find((elem2) => elem2.code === currElem.currency);
  //   return coin.ask;
  // }
  // deixarei essas funções como memória!
  // currencyName(currElem) {
  //   const everyName = Object.values(currElem.exchangeRates);
  //   const name = everyName.find((elem2) => elem2.code === currElem.currency);
  //   return name.name.split('/')[0];
  // }
  expenseDeletionButton({ target: { id } }) {
    const { expenses, expenseDeletion } = this.props;
    const removeExpense = expenses.filter((elem) => Number(elem.id) !== Number(id));

    return expenseDeletion(removeExpense);
  }

  generateExpense() {
    const { expenses } = this.props;
    return (
      expenses.map((elem) => (
        <tbody key={ elem.id } id={ elem.id }>
          <tr className="body-tr">
            <td>{elem.description}</td>
            <td>{elem.tag}</td>
            <td>{elem.method}</td>
            <td>{`${elem.value}`}</td>
            <td>{elem.exchangeRates[elem.currency].name.split('/')[0]}</td>
            <td>{Number(elem.exchangeRates[elem.currency].ask).toFixed(2)}</td>
            <td>
              {`${Number(elem.exchangeRates[elem.currency].ask)
                * Number(elem.value).toFixed(2)}`}
            </td>
            <td>Real</td>
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                id={ elem.id }
                onClick={ this.expenseDeletionButton }
              >
                Editar/Excluir
              </button>
            </td>
          </tr>
        </tbody>)));
  }

  render() {
    const { expenses } = this.props;
    console.log('log', expenses);
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
  totalExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expenseDeletion: (obj) => dispatch(deleteExpense(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);

WalletTable.propTypes = {
  expenses: (PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object])),
  expenseDeletion: PropTypes.func,
};

WalletTable.defaultProps = {
  expenses: [],
  expenseDeletion: () => {},
};
