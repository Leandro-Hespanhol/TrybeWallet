import React, { Component } from 'react';

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      categories: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };
  }

  render() {
    const { categories } = this.state;
    // const { onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="tag-input">
          Categoria:
          <select
            name="categoria"
            // value={ categories }
            id="tag-input"
            data-testid="tag-input"
            // onChange={ onInputChange }
          >
            {categories.map((category, idx) => (
              <option key={ idx } value={ category }>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}
