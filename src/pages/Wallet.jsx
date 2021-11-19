import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import categoryArray from '../data/categoryArray';
import methodArray from '../data/methodArray';
import './wallet.css';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      moeda: 'USD',
      metodo: 'Dinheiro',
      categoria: 'Alimentação',
      // descricao: '',
      // expenses: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.moedaValor = this.moedaValor.bind(this);
    this.expensesForm = this.expensesForm.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addExpense() {
    return <button type="button">Adicionar despesa</button>;
  }

  moedaValor() {
    const { valor, moeda } = this.state;
    return (
      <div>
        <label htmlFor="value-input">
          Valor:
          <input
            name="valor"
            value={ valor }
            type="number"
            data-testid="value-input"
            id="value-input"
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select
            name="moeda"
            value={ moeda }
            id="currency-input"
            data-testid="currency-input"
            onChange={ this.onInputChange }
          >
            <option value="Moeda">Moeda</option>
          </select>
        </label>
      </div>
    );
  }

  expensesForm() {
    const { metodo, categoria } = this.state;
    return (
      <form action="GET" className="expenses-Form">
        {this.moedaValor()}
        <label htmlFor="metodo">
          Método de pagamento
          <select
            name="metodo"
            value={ metodo }
            id="Método de pagamento"
            data-testid="method-input"
            onChange={ this.onInputChange }
          >
            {methodArray.map((elem, idx) => (
              <option key={ idx } value={ elem }>{elem}</option>
            ))}
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria:
          <select
            name="categoria"
            value={ categoria }
            id="tag-input"
            data-testid="tag-input"
            onChange={ this.onInputChange }
          >
            {categoryArray.map((elem, idx) => (
              <option key={ idx } value={ elem }>{elem}</option>
            ))}
          </select>
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            name="descricao"
            data-testid="description-input"
            onChange={ this.onInputChange }
          />
        </label>
        {this.addExpense()}
      </form>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            {`Email: ${email}`}
          </div>
          <div>
            Despesa Total:
            {' '}
            <input data-testid="total-field" value="0" disabled />
            <span data-testid="header-currency-field"> BRL </span>
          </div>
        </header>
        <div>{this.expensesForm()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
