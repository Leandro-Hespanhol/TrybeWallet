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
      password: '',
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
    const { email, password } = this.state;
    const CINCO = 5;
    const emailRegex = /\S+@\S+.\S\.+com/;
    if (password.length > CINCO && emailRegex.test(email)) return false;
    return true;
  }

  render() {
    const { loginFunc } = this.props;
    const { email } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            name="email"
            id="email-input"
            data-testid="email-input"
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="input-pass">
          Senha
          <input
            type="password"
            name="password"
            id="input-pass"
            data-testid="password-input"
            onChange={ this.onInputChange }
          />
        </label>
        <Link to="/TrybeWallet/carteira">
          <button
            type="submit"
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
