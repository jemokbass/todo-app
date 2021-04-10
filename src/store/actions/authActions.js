import * as actionTypes from './actionTypes';
import app from '@src/firebase';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const signUpSuccess = () => ({
  type: actionTypes.SIGN_UP_SUCCESS,
});

export const signInSuccess = (token, id) => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  token,
  id,
});

export const authError = error => ({
  type: actionTypes.AUTH_ERROR,
  error,
});

export const signUp = (info, auth) => dispatch => {
  dispatch(authStart());
  app
    .auth()
    .createUserWithEmailAndPassword(auth.email, auth.password)
    .then(result => {
      info.uid = result.user.uid;
      const databaseRef = app.database().ref('/users');
      databaseRef
        .push(info)
        .then(result => {
          dispatch(signUpSuccess());
        })
        .catch(err => {
          dispatch(authError(err));
        });
    })
    .catch(err => {
      dispatch(authError(err));
    });
};

export const signIn = auth => dispatch => {
  dispatch(authStart());
  app
    .auth()
    .signInWithEmailAndPassword(auth.email, auth.password)
    .then(result => {
      const token = app.auth().currentUser.getIdToken();
      dispatch(signInSuccess(token, result.user.uid));
    })
    .catch(err => {
      dispatch(authError(err));
    });
};

export const logout = () => ({
  type: actionTypes.LOGOUT,
});
