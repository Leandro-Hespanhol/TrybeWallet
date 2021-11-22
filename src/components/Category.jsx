import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categories: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };
  }

  render() {
    const { categories } = this.state;
    const { onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="tag-input">
          Categoria:
          <select
            name="category"
            // value={ categories }
            id="tag-input"
            data-testid="tag-input"
            onChange={ onInputChange }
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

const mapStateToProps = (state) => ({
  category: state.wallet.category,
});

export default connect(mapStateToProps)(Category);

Category.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
