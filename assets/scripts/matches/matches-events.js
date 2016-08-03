'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./matches-api.js');
const ui = require('./matches-ui.js');
const app = require('../app.js');

const onGetAllMatches = function () {

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

  let matchOwner = $(event.target).data("match-owner-id");
  // console.log("this is matchOwner:", matchOwner);

  let matchIdToUpdate = $(event.target).data("match-id");
  // console.log("this is matchIdToUpdate,", matchIdToUpdate)

  let matchOpponentId = $(event.target).data("match-opponent-id");
  // console.log("this is matt:",  matchOpponentId);
  // console.log("this is the owner ID:", app.user._id);
  if (matchOwner === app.user._id)
    {
      $('.message').text("You can't join your own match, silly");
      $(".message").show();
      setTimeout(function() { $(".message").hide(); }, 3000);

      // alert("you can't join your own match");
      return
    }
  if (matchOpponentId !== "")
    {
      $('.message').text("User already has opponent, silly");
      $(".message").show();
      setTimeout(function() { $(".message").hide(); }, 3000);
      // alert("user already has opponent");
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

const onUpdateMatchTime = (event) => {
  event.preventDefault();
  let matchIDtoUpdate = $(event.target).data("match-id");
    let updatedMatchTime  = $("#update-match-time").val();
  api.updateMatchTime(matchIDtoUpdate, updatedMatchTime)
  .then(api.getUserOwnedMatches)
  .then(ui.getUserOwnedMatchesSuccess)
  .done(onGetAllMatches);
};

const onDeleteMatch = (event)=> {
  event.preventDefault();
  let matchIDtoDelete = $(event.target).data("match-id");
  api.deleteMatch(matchIDtoDelete)
  .then(api.getUserOwnedMatches)
  .then(ui.getUserOwnedMatchesSuccess)
  .done(onGetAllMatches);
};

const onGetNonHostedMatches = (event) => {
  event.preventDefault();
  api.getNonHostedMatches()
  .then(ui.getNonHostedMatchesSuccess)
  .done(onGetAllMatches)

};

const onRemoveOpponentUpdate = (event) => {
  event.preventDefault();
  let matchIdToRemove = $(event.target).data("match-id-remove");
  api.removeOpponentUpdate(matchIdToRemove)
  .then(api.getNonHostedMatches)
  .then(ui.getNonHostedMatchesSuccess)
  .done(onGetAllMatches)
};



const addHandlers = () => {
  $(document).ready(onGetAllMatches);
  $('#create-match').on('submit', onCreateMatch);
  $(document).on('click','.updateButtons', onOpponentUpdateMatch);
  $('#get-user-owned-matches').on('submit', onGetUserOwnedMatches);
  $(document).on('click','.updateMatchTimeButtons', onUpdateMatchTime);
  $(document).on('click','.deleteButtons', onDeleteMatch);
  $('#get-non-hosted-matches').on('submit', onGetNonHostedMatches);
  $(document).on('click','.updateRemoveOpponentButtons', onRemoveOpponentUpdate);
};



module.exports = {
  addHandlers,
};
