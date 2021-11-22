import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Price extends Component {
  render() {
    const { onInputChange, value } = this.props;
    return (
      <div>
        <label htmlFor="value-input">
          Valor:
          <input
            name="value"
            value={ value }
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

// const mapStateToProps = (state) => ({
//   value: state.wallet.value,
// });

export default connect()(Price);

Price.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
