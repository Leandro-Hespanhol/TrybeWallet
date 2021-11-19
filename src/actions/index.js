// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const GET_CURRENCY = 'GET_CURRENCY';

export const getCurrency = (currency) => ({ type: GET_CURRENCY, currency });

export const toLogin = (email) => ({
  type: LOGIN,
  email,
});

export function fetchAPI() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then((curr) => dispatch(getCurrency(curr)));
}
