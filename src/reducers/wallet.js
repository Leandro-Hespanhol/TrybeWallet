// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_CURRENCY, SAVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  price: 0,
  moeda: [],
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
  expenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  // console.log('walletAction', action.currency);
  switch (action.type) {
  case GET_CURRENCY:
    return {
      // ...state, moeda: Object.keys(action.currency).filter((elem) => elem !== 'USDT'),
      ...state, moeda: action.currency,
    };
  case SAVE_EXPENSE:
    return {
      ...state,
    };
  default:
    return state;
  }
}
