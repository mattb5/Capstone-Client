'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./matches-api.js');
const ui = require('./matches-ui.js');

const onGetAllMatches = function () {
  console.log("this is get all matches");
  api.getAllMatches()
  .done(ui.getMatchesSuccess)
};

const onCreateMatch = (event) => {
  event.preventDefault();
  let time = $("#match-time").val();
  let hostUser = $("#host-name").val();
  api.createMatch(time, hostUser)
  .done(onGetAllMatches)
};

const onOpponentUpdateMatch = (event) => {
  event.preventDefault();
  let matchIdToUpdate = $(event.target).data("match-id");
  let matt = $(event.target).data("match-opponent");
  if (matt !== "")
    {
      alert("user already has opponent");
      return
    }
  let updatedOpponentName = $("#update-opponent-name").val();
  api.opponentUpdateMatch(matchIdToUpdate, updatedOpponentName)
  .done(onGetAllMatches)
};

const onGetUserOwnedMatches = (event) => {
  event.preventDefault();
  api.getUserOwnedMatches()
  .done(ui.getUserOwnedMatchesSuccess)
};

const onGetNonHostedMatches = (event) => {
  event.preventDefault();
  api.getNonHostedMatches()
  .done(ui.getNonHostedMatchesSuccess)
};

const onRemoveOpponentUpdate = (event) => {
  event.preventDefault();
  let matchIdToRemove = $(event.target).data("match-id-remove");
  api.removeOpponentUpdate(matchIdToRemove)
  .done(console.log("this is onRemoveOpponentUpdate"))
};

const addHandlers = () => {
  $(document).ready(onGetAllMatches);
  $('#create-match').on('submit', onCreateMatch);
  $(document).on('click','.updateButtons', onOpponentUpdateMatch);
  $('#get-user-owned-matches').on('submit', onGetUserOwnedMatches);
  $('#get-non-hosted-matches').on('submit', onGetNonHostedMatches);
  $(document).on('click','.updateRemoveOpponentButtons', onRemoveOpponentUpdate);
};



module.exports = {
  addHandlers,
  onGetAllMatches,
};
