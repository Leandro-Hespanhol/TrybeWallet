import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';

class Currency extends Component {
  async componentDidMount() {
    const { currencyFetch } = this.props;
    await currencyFetch();
  }

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

const mapDispatchToProps = (dispatch) => ({
  currencyFetch: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);

Currency.propTypes = {
  moeda: PropTypes.string.isRequired,
  currencyFetch: PropTypes.func.isRequired,
};
