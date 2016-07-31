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
    data :{
            "match": {
              "opponent": updatedOpponentName,
              }
            }
  }
  );
};

module.exports = {
  getAllMatches,
  opponentUpdateMatch,
};
