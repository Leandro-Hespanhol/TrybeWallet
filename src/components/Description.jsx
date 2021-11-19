import React, { Component } from 'react';

export default class Description extends Component {
  render() {
    return (
      <div>
        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            name="descricao"
            data-testid="description-input"
            // onChange={ this.onInputChange }
          />
        </label>
      </div>
    );
  }
}
