import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { fetchAPI } from '../actions';
import './wallet.css';

import Currency from '../components/Currency';
import Category from '../components/Category';
import Description from '../components/Description';
import Method from '../components/Method';
import Price from '../components/Price';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      value: '0', // price
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      expenses: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.saveCurrencyButton = this.saveCurrencyButton.bind(this);
  }

  async componentDidMount() {
    const { currencyFetch } = this.props;
    await currencyFetch();
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  saveCurrencyButton() {
    const { id, value, description, currency, method, tag, expenses } = this.state;
    const { moeda } = this.props;
    // console.log('savebtton', moeda);

    this.setState({
      id: id + 1,
      expenses: [...expenses, {
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates: moeda },
      ] });
  }

  render() {
    const { email } = this.props;
    const { id, expenses } = this.state;
    // console.log('wallet', moeda);
    console.log('state', (expenses));
    return (
      <div>
        <span>{id}</span>
        <Header email={ email } />
        <form action="GET" className="expenses-Form">
          <Price onInputChange={ this.onInputChange } />
          <Currency onInputChange={ this.onInputChange } />
          <Method onInputChange={ this.onInputChange } />
          <Category onInputChange={ this.onInputChange } />
          <Description onInputChange={ this.onInputChange } />
          {/* <ExpenseButton currency={ currency } /> */}
          <button type="button" onClick={ () => this.saveCurrencyButton() }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  moeda: state.wallet.moeda,
});

const mapDispatchToProps = (dispatch) => ({
  currencyFetch: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencyFetch: PropTypes.func.isRequired,
  moeda: (PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object])),
};

Wallet.defaultProps = {
  moeda: [],
};
