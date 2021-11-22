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
// import ExpenseButton from '../components/ExpenseButton';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      // price: 0,
      // moeda: [],
      // method: 'Dinheiro',
      // category: 'Alimentação',
      // description: '',
      // expenses: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {

  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, currency } = this.props;
    return (
      <div>
        <Header email={ email } />
        <form action="GET" className="expenses-Form">
          <Price onInputChange={ this.onInputChange } />
          <Currency onInputChange={ this.onInputChange } />
          <Method onInputChange={ this.onInputChange } />
          <Category onInputChange={ this.onInputChange } />
          <Description onInputChange={ this.onInputChange } />
          {/* <ExpenseButton currency={ currency } /> */}
          <button type="button" onClick={ () => currency() }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  currency: (curr) => dispatch(fetchAPI(curr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currency: PropTypes.func.isRequired,
};
