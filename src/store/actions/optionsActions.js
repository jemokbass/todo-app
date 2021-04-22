import * as actionTypes from './actionTypes';
import app from '@src/firebase';

export const changeOptionsStart = () => ({
  type: actionTypes.CHANGE_OPTIONS_START,
});

export const changeOptionsError = error => ({
  type: actionTypes.CHANGE_OPTIONS_ERROR,
  error,
});

export const changeOptionsSuccess = () => ({
  type: actionTypes.CHANGE_OPTIONS_SUCCESS,
});

export const changeInfo = (userKey, data) => dispatch => {
  dispatch(changeOptionsStart());

  app
    .database()
    .ref(`users/${userKey}`)
    .update(data)
    .then(result => {
      dispatch(changeOptionsSuccess());
    })
    .catch(err => {
      dispatch(changeOptionsError(err));
    });
};

export const changeAvatar = (userKey, data) => dispatch => {
  dispatch(changeOptionsStart());
  const avatar = data.avatar[0];

  app
    .storage()
    .ref(`images/${userKey}/${avatar.name}`)
    .put(avatar)
    .then(result => {
      dispatch(changeOptionsSuccess());
    })
    .catch(err => {
      dispatch(changeOptionsError(err));
    });
};
