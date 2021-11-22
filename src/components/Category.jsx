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
    const { onInputChange, tag } = this.props;
    return (
      <div>
        <label htmlFor="tag-input">
          Categoria:
          <select
            name="tag"
            value={ tag }
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

// const mapStateToProps = (state) => ({
//   tag: state.wallet.tag,
// });

export default connect()(Category);

Category.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};
