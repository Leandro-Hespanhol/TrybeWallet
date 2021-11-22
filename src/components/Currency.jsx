import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';

class Currency extends Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
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

  render() {
    const { moeda, onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="currency-input">
          Moeda:
          <select
            name="moeda"
            // value={ moeda }
            id="currency-input"
            data-testid="currency-input"
            onChange={ onInputChange }
          >
            <option value="" selected disabled hidden>Choose currency...</option>
            {moeda.map((currency) => (
              <option key={ currency } value={ currency }>
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
  moeda: PropTypes.arrayOf(
    PropTypes.string,
  ),
  currencyFetch: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

Currency.defaultProps = {
  moeda: [],
};
