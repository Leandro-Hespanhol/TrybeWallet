import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    console.log(expenses);
    return (
      <div>
        <header>
          <div data-testid="email-field">{`Email: ${email}`}</div>
          <div>
            Despesa Total:
            {' '}
            <input data-testid="total-field" value="0" disabled />
            <span data-testid="header-currency-field"> BRL </span>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: (PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object])).isRequired,
};
