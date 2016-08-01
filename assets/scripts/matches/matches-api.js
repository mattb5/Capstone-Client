'use strict';

const app = require('../app.js');


const getAllMatches = () => {
  return $.ajax({
    url: app.host + '/matches/',
    method: "GET",
  });
};
//
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

module.exports = {
  getAllMatches,
  opponentUpdateMatch,
};
