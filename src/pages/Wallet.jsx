import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { fetchAPI, saveExpense } from '../actions';
import './wallet.css';

import Currency from '../components/Currency';
import Category from '../components/Category';
import Description from '../components/Description';
import Method from '../components/Method';
import Price from '../components/Price';
import Header from '../components/Header';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '0', // price
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      // expenses: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.saveCurrencyButton = this.saveCurrencyButton.bind(this);
  }

  componentDidMount() {
    const { currencyFetch } = this.props;
    currencyFetch();
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  saveCurrencyButton() {
    const { id, value, description, currency, method, tag } = this.state;
    const { currencies, expenseSaved, currencyFetch } = this.props;
    currencyFetch();
    // console.log('savebtton', moeda);
    expenseSaved({ id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies });

    this.setState({
      id: id + 1,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const { email } = this.props;
    const { id, value, tag } = this.state;
    // console.log('wallet', expenses[0]);
    // console.log('state', ...(Object.values((expenses))));
    return (
      <div>
        <div className="header-walletBar-div">
          <span>{id}</span>
          <Header email={ email } />
          <form action="GET" className="expenses-Form">
            <Price onInputChange={ this.onInputChange } value={ value } />
            <Currency onInputChange={ this.onInputChange } />
            <Method onInputChange={ this.onInputChange } />
            <Category onInputChange={ this.onInputChange } tag={ tag } />
            <Description onInputChange={ this.onInputChange } />
            <button type="button" onClick={ () => this.saveCurrencyButton() }>
              Adicionar despesa
            </button>
          </form>
        </div>
        <WalletTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currencyFetch: () => dispatch(fetchAPI()),
  expenseSaved: (obj) => dispatch(saveExpense(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencyFetch: PropTypes.func.isRequired,
  expenseSaved: PropTypes.func.isRequired,
  currencies: (PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object])),
};

Wallet.defaultProps = {
  currencies: [],
};
