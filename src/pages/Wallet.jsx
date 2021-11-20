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
import ExpenseButton from '../components/ExpenseButton';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      // moeda: 'USD',
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
          <Price />
          <Currency />
          <Method />
          <Category />
          <Description />
          <ExpenseButton currency={ currency } />
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
