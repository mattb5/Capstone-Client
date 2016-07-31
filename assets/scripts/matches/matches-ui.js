'use strict';

const app = require('../app.js');

const getMatchesSuccess = (data) => {
  app.matches = data.matches;


    // with delete column
    // let orderHistory = "<table> <tr> <th> Delete </th> <th> Total Cost ($) </th> <th> Item </th> <th> Quantity </th> </tr>";
    // without delete column  -- to re add delete button, add the <tr> tag to the first order history
    // let orderHistory = "<table> <tr> <th> Total Cost ($) </th> <th> Item </th> <th> Quantity </th> </tr>";
    //
    let matchHistory = "<table>";

    for (let i = 0; i < app.matches.length; i++)
      {
        matchHistory = matchHistory + "<tr><td>" + app.matches[i].time + "</td>";
        matchHistory = matchHistory + "<td>" + app.matches[i].opponent + "</td></tr>";
        matchHistory = matchHistory + "<td> <button class='updateButtons' data-match-id='" + app.matches[i]._id + "' + data-match-opponent='" + app.matches[i].opponent + "'>Update</button>" + "</td>";
      }

      matchHistory = matchHistory + "</table>";

      $("#matches").html(matchHistory);

};

module.exports = {
  getMatchesSuccess,
};
