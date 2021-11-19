import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { toLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      passInput: '',
    };

    this.isLoginButtonDisabled = this.isLoginButtonDisabled.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  isLoginButtonDisabled() {
    const { email, passInput } = this.state;
    const CINCO = 5;
    const emailRegex = /\S+@\S+.\S+/;
    if (passInput.length > CINCO && emailRegex.test(email)) return false;
    return true;
  }

  render() {
    const { loginFunc } = this.props;
    const { email } = this.state;
    return (
      <div>
        <label htmlFor="input-email">
          Email
          <input
            type="email"
            name="email"
            id="input-email"
            testid="email-input"
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="input-pass">
          Senha
          <input
            type="password"
            name="passInput"
            id="input-pass"
            data-testid="password-input"
            onChange={ this.onInputChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ this.isLoginButtonDisabled() }
            onClick={ () => loginFunc(email) }
          >
            Entrar

          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginFunc: (email) => dispatch(toLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  loginFunc: propTypes.func.isRequired,
};
