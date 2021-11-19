// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const toLogin = (email) => ({
  type: LOGIN,
  email,
});
