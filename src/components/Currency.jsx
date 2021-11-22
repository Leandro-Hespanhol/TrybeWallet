import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { fetchAPI } from '../actions';

class Currency extends Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
  }

  async componentDidMount() {
    // const { currencyFetch } = this.props;
    // await currencyFetch();
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies, onInputChange } = this.props;
    // console.log('currency', moeda);
    return (
      <div>
        <label htmlFor="currency-input">
          Moeda:
          <select
            name="currency"
            // value='USD'
            id="currency-input"
            data-testid="currency-input"
            onChange={ onInputChange }
          >
            {/* <option value="" selected disabled hidden>Choose currency...</option> */}
            {/* Object.keys(action.currency).filter((elem) => elem !== 'USDT') */}
            {Object.keys(currencies).filter((elem) => elem !== 'USDT')
              .map((currency) => (
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
  currencies: state.wallet.currencies,
});

// const mapDispatchToProps = (dispatch) => ({
//   currencyFetch: () => dispatch(fetchAPI()),
// });

export default connect(mapStateToProps, null)(Currency);

Currency.propTypes = {
  currencies: (PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object])),
  // currencyFetch: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

Currency.defaultProps = {
  currencies: [],
};
