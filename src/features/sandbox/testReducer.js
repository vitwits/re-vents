export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const MULTIPLY_COUNTER = 'MULTIPLY_COUNTER';

export function increment(amount) {
  return {
    type: INCREMENT_COUNTER,
    payload: amount
  }
}

export function decrement(amount) {
  return {
    type: DECREMENT_COUNTER,
    payload: amount
  }
}

export function multiply(amount) {
  return {
    type: MULTIPLY_COUNTER,
    payload: amount
  }
}

const initialState = {
  data: 0,
}

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data + action.payload
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - action.payload
      };
    case MULTIPLY_COUNTER:
      return {
        ...state,
        data: state.data * action.payload
      };
    default:
      return state;
  }
}