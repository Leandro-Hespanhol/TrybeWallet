// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_CURRENCY } from '../actions';

const INITIAL_STATE = {
  valor: 0,
  moeda: '',
  metodo: 'Dinheiro',
  categoria: 'Alimentação',
  descricao: '',
  expenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  // console.log('walletAction', action.currency);
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state, moeda: 'USD',
    };
  default:
    return state;
  }
}
