'use strict';

const app = require('../app.js');

const getMatchesSuccess = (data) => {
  app.matches = data.matches;

    let matchHistory = "<table><th>Time</th><th>Host</th><th>Opponent</th><th>Add Opponent</th>";

    for (let i = 0; i < app.matches.length; i++)
      {
        matchHistory = matchHistory + "<tr><td>" + app.matches[i].time + "</td>";
        matchHistory = matchHistory + "<td>" + app.matches[i].hostUser + "</td>";
        matchHistory = matchHistory + "<td>" + app.matches[i].opponent + "</td>";
        matchHistory = matchHistory + "<td> <button class='updateButtons' data-match-id='" + app.matches[i]._id + "' data-match-opponent-id='" + app.matches[i].opponent + "' data-match-owner-id='" + app.matches[i]._owner + "'>Update</button>" + "</td></tr>";
      }

      matchHistory = matchHistory + "</table>";

      $("#matches").html(matchHistory);
};


const getUserOwnedMatchesSuccess = (data) => {
  app.matches = data.matches;

    let matchHistory = "<table>";

    for (let i = 0; i < app.matches.length; i++)
      {
        matchHistory = matchHistory + "<tr><td>" + app.matches[i].time + "</td>";
        matchHistory = matchHistory + "<td>" + app.matches[i].opponent + "</td></tr>";
      }

      matchHistory = matchHistory + "</table>";

      $("#user-owned-matches").html(matchHistory);
};

const getNonHostedMatchesSuccess = (data) => {
  app.matches = data.matches;

    let matchHistory = "<table>";

    for (let i = 0; i < app.matches.length; i++)
      {
        matchHistory = matchHistory + "<tr><td>" + app.matches[i].time + "</td>";
        matchHistory = matchHistory + "<td>" + app.matches[i].opponent + "</td>";
        matchHistory = matchHistory + "<td> <button class='updateRemoveOpponentButtons' data-match-id-remove='" + app.matches[i]._id + "' + data-match-opponent='" + app.matches[i].opponent + "'>Update</button>" + "</td></tr>";

      }

      matchHistory = matchHistory + "</table>";

      $("#non-hosted-matches").html(matchHistory);
};


// with delete column
// let orderHistory = "<table> <tr> <th> Delete </th> <th> Total Cost ($) </th> <th> Item </th> <th> Quantity </th> </tr>";
// without delete column  -- to re add delete button, add the <tr> tag to the first order history
// let orderHistory = "<table> <tr> <th> Total Cost ($) </th> <th> Item </th> <th> Quantity </th> </tr>";
//

module.exports = {
  getMatchesSuccess,
  getUserOwnedMatchesSuccess,
  getNonHostedMatchesSuccess,
};
