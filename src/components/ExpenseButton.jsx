import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class ExpenseButton extends Component {
  render() {
    const { currency } = this.props;
    return (
      <div>
        <button type="button" onClick={ () => currency() }>
          Adicionar despesa
        </button>
      </div>
    );
  }
}

ExpenseButton.propTypes = {
  currency: PropTypes.func.isRequired,
};
