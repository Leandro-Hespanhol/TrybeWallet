// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_CURRENCY } from '../actions';

const INITIAL_STATE = {
  price: 0,
  moeda: [],
  method: 'Dinheiro',
  category: 'Alimentação',
  description: '',
  expenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  // console.log('walletAction', action.currency);
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state, moeda: Object.keys(action.currency).filter((elem) => elem !== 'USDT'),
    };
  default:
    return state;
  }
}
// Object.keys(curr).filter((elem) => elem !== 'USDT'
