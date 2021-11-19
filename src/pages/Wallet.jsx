import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">{email}</div>
          <div>
            Despesa Total:
            {' '}
            <input data-testid="total-field" value="0" disabled />
            <span data-testid="header-currency-field"> BRL </span>
          </div>
        </header>
        TrybeWallet
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
