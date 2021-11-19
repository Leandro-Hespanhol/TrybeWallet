import React, { Component } from 'react';

export default class Price extends Component {
  render() {
    return (
      <div>
        <label htmlFor="value-input">
          Valor:
          <input
            name="valor"
            // value={ valor }
            type="number"
            data-testid="value-input"
            id="value-input"
            // onChange={ this.onInputChange }
          />
        </label>
      </div>
    );
  }
}
