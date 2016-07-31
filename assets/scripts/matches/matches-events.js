'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./matches-api.js');
const ui = require('./matches-ui.js');


// const onBrowse = function(event) {
//   event.preventDefault();
//   $('#checkout-page').hide();
//   $('#products').show();
// };

const onGetAllMatches = function () {
  console.log("this is get all matches");
  api.getAllMatches()
  .done(ui.getMatchesSuccess)
};

const onOpponentUpdateMatch = (event)=> {
  event.preventDefault();
  let matchIdToUpdate = $(event.target).data("match-id");
  let matt = $(event.target).data("match-opponent");
  console.log("this is matchIdToUpdateOpponent:" + matt);
  if (matt !== "")
    {
      alert("user already has opponent");
      return
    }
  let updatedOpponentName = $("#update-opponent-name").val();
  api.opponentUpdateMatch(matchIdToUpdate, updatedOpponentName)
  .done(onGetAllMatches)
  // .fail(ui.failure);
};

const addHandlers = () => {
  $(document).ready(onGetAllMatches);
  // $('#get-orders').on('submit', onGetOrderHistory);
  $(document).on('click','.updateButtons', onOpponentUpdateMatch);
};



module.exports = {
  addHandlers,
  onGetAllMatches,
};
