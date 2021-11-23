// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { DELETE_EXPENSE, GET_CURRENCY, SAVE_EXPENSE, UPDATE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  // price: 0,
  currencies: [],
  // method: 'Dinheiro',
  // tag: 'Alimentação',
  // description: '',
  expenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  // console.log('walletAction', action);
  // console.log('state', state.expenses);
  switch (action.type) {
  case GET_CURRENCY:
    return {
      // ...state, moeda: Object.keys(action.currency).filter((elem) => elem !== 'USDT'),
      ...state, currencies: action.currency,
    };
  case SAVE_EXPENSE:
    return {
      ...state, expenses: [...state.expenses, action.expenseObj],
    };
  case DELETE_EXPENSE:
    return {
      ...state, expenses: action.ObjRemainder,
    };
  case UPDATE_EXPENSES:
    return {
      ...state,
    };
  default:
    return state;
  }
}
