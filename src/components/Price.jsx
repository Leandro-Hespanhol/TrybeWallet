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
            name="value"
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
  value: state.wallet.value,
});

export default connect(mapStateToProps)(Price);

Price.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
