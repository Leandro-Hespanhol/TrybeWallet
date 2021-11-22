import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import arrayMethods from '../data/arrayMethods';

class Method extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     methods: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
  //   };
  // }

  render() {
    const { onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            // value={ metodo }
            id="method"
            data-testid="method-input"
            onChange={ onInputChange }
          >
            {arrayMethods.map((method, idx) => (
              <option key={ idx } value={ method }>
                {method}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  method: state.wallet.method,
});

export default connect(mapStateToProps)(Method);

Method.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
