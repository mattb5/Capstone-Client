
'use strict';

const app = require('../app.js');
const ui = require('./ui.js');


const signUp = (data) => {
  return $.ajax (
  {
  url: app.host + '/sign-up',
  method: 'POST',
  data: data
  }
);
};


const signIn = (signInData) => {
  return $.ajax ({
    url: app.host + '/sign-in',
    method: 'POST',
    data: signInData
  });
};

const signOut = function (){
    return $.ajax ({
      url: app.host + '/sign-out/' + app.user._id,
      method: 'DELETE',
      headers: {
        Authorization: "Token token=" + app.user.token,
      },
    });

};

const changePassword = function (data) {
  return $.ajax(
    {
      url: app.host + '/change-password/' + app.user._id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: data
    });
  };


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
