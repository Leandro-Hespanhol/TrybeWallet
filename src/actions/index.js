// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const GET_CURRENCY = 'GET_CURRENCY';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const getCurrency = (currency) => ({ type: GET_CURRENCY, currency });
export const saveExpense = (expenseObj) => ({ type: SAVE_EXPENSE, expenseObj });
export const deleteExpense = (ObjRemainder) => ({ type: DELETE_EXPENSE, ObjRemainder });

export const toLogin = (email) => ({
  type: LOGIN,
  email,
});

export function fetchAPI() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then((curr) => dispatch(getCurrency(curr)));
}
