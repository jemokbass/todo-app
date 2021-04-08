import * as actionTypes from './actionTypes';
import app from '@src/firebase';

export const signUpStart = () => ({
  type: actionTypes.SIGN_UP_START,
});

export const signUpSuccess = () => ({
  type: actionTypes.SIGN_UP_SUCCESS,
});

export const signUpError = error => ({
  type: actionTypes.SIGN_UP_ERROR,
  error,
});

export const signUp = (info, auth) => dispatch => {
  dispatch(signUpStart());
  app
    .auth()
    .createUserWithEmailAndPassword(auth.email, auth.password)
    .then(result => {
      const databaseRef = app.database().ref('/users');
      databaseRef
        .push(info)
        .then(result => {
          dispatch(signUpSuccess());
        })
        .catch(err => {
          dispatch(signUpError(err));
        }); 
    })
    .catch(err => {
      dispatch(signUpError(err));
    });
};

export const logout = () => ({
  type: actionTypes.LOGOUT,
});
