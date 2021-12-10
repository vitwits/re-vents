import { SING_IN_USER, SIGN_OUT_USER } from './authConstants';

export function signInUser(payload) {
  type: SING_IN_USER,
  payload,
}

export function signOutUser(){
  return {
    type: SIGN_OUT_USER
  }
}