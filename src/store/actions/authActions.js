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

export const getUserInfo = info => ({
  type: actionTypes.GET_USER_INFO,
  info,
});

export const getAvatar = avatar => ({
  type: actionTypes.GET_AVATAR,
  avatar,
});

export const signUp = (info, auth) => dispatch => {
  dispatch(authStart());
  app
    .auth()
    .createUserWithEmailAndPassword(auth.email, auth.password)
    .then(result => {
      info.uid = result.user.uid;
      app
        .database()
        .ref('/users')
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
      localStorage.setItem('token', result.user.za);
      localStorage.setItem('id', result.user.uid);

      dispatch(checkLogin());
      dispatch(signInSuccess(result.user.za, result.user.uid));
    })
    .catch(err => {
      dispatch(authError(err));
    });
};

const checkUserInfo = () => {
  const uid = localStorage.getItem('id');

  return new Promise((resolve, reject) => {
    app
      .database()
      .ref('users/')
      .orderByChild('uid')
      .equalTo(uid)
      .on('value', snapshot => {
        if (snapshot.exists()) {
          return resolve(snapshot.val());
        } else reject('error');
      });
  });
};

const checkAvatar = avatarName => {
  const uid = localStorage.getItem('id');

  return new Promise((resolve, reject) => {
    app
      .storage()
      .ref('/images/' + uid + `/${avatarName}`)
      .getDownloadURL()
      .then(result => {
        resolve(result + '/webp4.webp');
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const startInfoResponse = () => ({
  type: actionTypes.START_INFO_RESPONSE,
});

export const checkLogin = () => dispatch => {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');
  dispatch(startInfoResponse());

  if (!token) {
    dispatch(logout());
  } else {
    dispatch(signInSuccess(token, id));

    checkUserInfo()
      .then(res => {
        dispatch(getUserInfo(res));
        const avatar = res[Object.keys(res)[0]].avatar;

        if (avatar) {
          checkAvatar(avatar)
            .then(result => {
              dispatch(getAvatar(result));
            })
            .catch(err => {});
        }
      })
      .catch(err => 'error');
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('id');

  return {
    type: actionTypes.LOGOUT,
  };
};
