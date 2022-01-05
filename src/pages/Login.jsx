import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { toLogin } from '../actions';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.isLoginButtonDisabled = this.isLoginButtonDisabled.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.loginImage = this.loginImage.bind(this);
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

  loginImage() {
    return (
      <div>
        <img
          src="https://woobewoo.com/wp-content/uploads/2018/06/exchange-rate-lg.jpg"
          className="login-image"
          alt="exchange rates"
        />
      </div>
    );
  }

  render() {
    const { loginFunc } = this.props;
    const { email } = this.state;
    return (
      <div className="main-container">
        <div className="login-page-fieldset">
          {this.loginImage()}
          <label htmlFor="email-input" className="login-page-label">
            <span className="login-login">Email</span>
            <input
              type="email"
              name="email"
              className="login-page-input"
              id="email-input"
              data-testid="email-input"
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="input-pass" className="login-page-label">
            <span className="login-login">Senha</span>
            <input
              type="password"
              name="password"
              className="login-page-input"
              id="input-pass"
              data-testid="password-input"
              onChange={ this.onInputChange }
            />
          </label>
          <Link to="/TrybeWallet/carteira">
            <div className="login-page-label">
              <button
                type="submit"
                className="login-page-enter-button"
                disabled={ this.isLoginButtonDisabled() }
                onClick={ () => loginFunc(email) }
              >
                Entrar
              </button>
            </div>
          </Link>
        </div>
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
