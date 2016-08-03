'use strict';

const app = require('../app.js');


const getAllMatches = () => {
  return $.ajax({
    url: app.host + '/matches/',
    method: "GET",
  });
};

const createMatch = function (time, hostUser) {
  return $.ajax(
  {
    url: app.host + '/matches',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data :{
          "match": {
            "time": time,
            "hostUser" : hostUser,
            "opponent": ""
            }
          }
  });
};

const opponentUpdateMatch = function (matchIdToUpdate, updatedOpponentName) {
  return $.ajax(
  {
    url: app.host + '/matches-update/' + matchIdToUpdate,
    method: 'PATCH',
    headers: {
     Authorization: 'Token token=' + app.user.token,
   },
    data :{
            "match": {
              "opponent": updatedOpponentName,
              "opponentID": app.user._id
              }
            }
  }
  );
};

const getUserOwnedMatches = () => {
  return $.ajax({
    url: app.host + '/owner_matches/' + app.user._id,
    headers: {
     Authorization: 'Token token=' + app.user.token,
   },
    method: "GET",
  });
};

const updateMatchTime = function (matchIDtoUpdate, updatedMatchTime) {
  return $.ajax(
  {
    url: app.host + '/matches/' + matchIDtoUpdate,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data :{
          "match": {
            "time": updatedMatchTime
            }
          }
  });
};

const deleteMatch = function (matchIDtoDelete) {
  return $.ajax(
  {
    url: app.host + '/matches/' + matchIDtoDelete,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }
  );
};

const getNonHostedMatches = () => {
  return $.ajax({
    url: app.host + '/opponent_matches/' + app.user._id,
    headers: {
     Authorization: 'Token token=' + app.user.token,
   },
    method: "GET",
  });
};

const removeOpponentUpdate = function (matchIdToRemove) {
  return $.ajax(
    {
      url: app.host + '/update-remove-opponent/' + matchIdToRemove,
      method: 'PATCH',
      headers: {
       Authorization: 'Token token=' + app.user.token,
      },
      data :{
              "match": {
                "opponent": "",
                "opponentID": ""
                }
            }
    }
  );
};

module.exports = {
  getAllMatches,
  createMatch,
  opponentUpdateMatch,
  getUserOwnedMatches,
  deleteMatch,
  updateMatchTime,
  getNonHostedMatches,
  removeOpponentUpdate,
};
