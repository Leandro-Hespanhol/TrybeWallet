import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Currency extends Component {
  render() {
    const { moeda } = this.props;
    return (
      <div>
        <label htmlFor="currency-input">
          Moeda:
          <select
            name="moeda"
            value={ moeda }
            id="currency-input"
            data-testid="currency-input"
            // onChange={ this.onInputChange }
          >
            {/* <option value="Moeda">Moeda</option> */}
            {moeda.map((currency) => (
              <option key={ currency }>
                {' '}
                { currency }
                {' '}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  moeda: state.wallet.moeda,
});

export default connect(mapStateToProps)(Currency);

Currency.propTypes = {
  moeda: PropTypes.string.isRequired,
};
