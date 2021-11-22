import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.sommationValue = this.sommationValue.bind(this);
  }

  sommationValue() {
    const { expenses } = this.props;
    const sum = expenses
      .reduce((acc, curr) => acc
        + ((curr.value) * curr.exchangeRates[curr.currency].ask), 0);

    return sum;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">{`Email: ${email}`}</div>
          <div>
            Despesa Total:
            {' '}
            <input
              data-testid="total-field"
              value={ this.sommationValue().toFixed(2) }
              disabled
            />
            <span data-testid="header-currency-field"> BRL </span>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: (PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object])).isRequired,
};
