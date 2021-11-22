import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpenseButton extends Component {
  render() {
    const { currency, state } = this.props;
    console.log(state);
    return (
      <div>
        <button type="button" onClick={ () => currency() }>
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.wallet,
});

export default connect(mapStateToProps)(ExpenseButton);

ExpenseButton.propTypes = {
  currency: PropTypes.func.isRequired,
  state: PropTypes.objectOf(
    PropTypes.shape({
    }),
  ),
};

ExpenseButton.defaultProps = {
  state: {},
};
