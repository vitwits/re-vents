import { SIGN_IN_USER, SIGN_OUT_USER } from './authConstants';


const initialState = {
  authenticated: false,
  currentUser: null
}

export default function authReducer(state = initialState, {type, payload}) {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUSer: {
          email: payload.email,
          photoURL: '/assets/user.png'
        }
      }
      case SIGN_OUT_USER:
        return {
          ...state,
          authenticated: false,
          current: null
        }
      default:
        return state;
  }
}