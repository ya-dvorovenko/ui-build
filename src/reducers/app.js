import { EXAMPLE } from '../constants';

export default function (state, payload) {
  const { type } = payload;
  switch (type) {
    case EXAMPLE:
      console.log('Awesome reducer');
  }
  return state;
}
