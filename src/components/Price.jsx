import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Price extends Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="value-input">
          Valor:
          <input
            name="price"
            // value={ price }
            type="number"
            data-testid="value-input"
            id="value-input"
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  price: state.wallet.price,
});

export default connect(mapStateToProps)(Price);

Price.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
