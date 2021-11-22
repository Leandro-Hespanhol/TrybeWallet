import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Description extends Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            name="description"
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  description: state.wallet.description,
});

export default connect(mapStateToProps)(Description);

Description.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
