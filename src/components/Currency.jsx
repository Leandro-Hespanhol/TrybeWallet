import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Currency extends Component {
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
            <option value="Moeda">Moeda</option>
            {/* {moeda.map((currency) => <option> {currency} </option>)} */}
          </select>
        </label>
      </div>
    );
  }
}

Currency.propTypes = {
  moeda: PropTypes.string.isRequired,
};
