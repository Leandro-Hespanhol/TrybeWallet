import React, { Component } from 'react';

export default class Method extends Component {
  constructor() {
    super();
    this.state = {
      methods: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
    };
  }

  render() {
    const { methods } = this.state;
    return (
      <div>
        <label htmlFor="metodo">
          Método de pagamento
          <select
            name="metodo"
            // value={ metodo }
            id="Método de pagamento"
            data-testid="method-input"
            // onChange={ this.onInputChange }
          >
            {methods.map((method, idx) => (
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
