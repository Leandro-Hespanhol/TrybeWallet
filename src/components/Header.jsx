import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const { email } = this.props;
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

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
