import * as actionTypes from './actionTypes';
import app from '@src/firebase';

export const changeOptionsStart = () => ({
  type: actionTypes.CHANGE_OPTIONS_START,
});

export const changeOptionsError = error => ({
  type: actionTypes.CHANGE_OPTIONS_ERROR,
  error,
});

export const wrongPassword = error => ({
  type: actionTypes.WRONG_PASSWORD,
  error,
});

export const changeOptionsSuccess = isComplete => ({
  type: actionTypes.CHANGE_OPTIONS_SUCCESS,
  isComplete,
});

export const changeInfo = (userKey, data) => dispatch => {
  dispatch(changeOptionsStart());

  app
    .database()
    .ref(`users/${userKey}`)
    .update(data)
    .then(result => dispatch(changeOptionsSuccess(true)))
    .catch(err => dispatch(changeOptionsError(err)));
};

export const changeAvatar = (data, uid) => dispatch => {
  dispatch(changeOptionsStart());
  const avatar = data.avatar[0];

  app
    .storage()
    .ref(`images/${uid}/${avatar.name}`)
    .put(avatar)
    .then(result => dispatch(changeOptionsSuccess(true)))
    .catch(err => dispatch(changeOptionsError(err)));
};

export const deleteAvatar = (uid, userInfo, userKey) => dispatch => {
  dispatch(changeOptionsStart());

  app
    .storage()
    .ref(`images/${uid}/${userInfo.avatar}`)
    .delete()
    .then(result => {
      const newUserInfo = { ...userInfo, avatar: false };
      dispatch(changeInfo(userKey, newUserInfo))
        .then(result => dispatch(changeOptionsSuccess(true)))
        .catch(err => dispatch(changeOptionsError(err)));
    })
    .catch(err => dispatch(changeOptionsError(err)));
};

export const changePassword = data => dispatch => {
  dispatch(changeOptionsStart());
  const currentUser = app.auth().currentUser;

  app
    .auth()
    .signInWithEmailAndPassword(currentUser.email, data.oldPassword)
    .then(result => {
      app
        .auth()
        .currentUser.updatePassword(data.newPassword)
        .then(result => dispatch(changeOptionsSuccess(true)))
        .catch(err => dispatch(changeOptionsError(err)));
    })
    .catch(err => dispatch(wrongPassword(err)));
};
