
Tennis Matchr

Embedded screenshot of Tennis Matchr:

![Tennis Matchr Screen Shot](http://imgur.com/4YWEIbQ)

Link to screenshot of Tennis Matchr:

http://imgur.com/a/gwJjl

Link to working app:

https://mattb5.github.io/Capstone-Client/

Link to deployed Express Server:

http://polar-earth-47067.herokuapp.com/

Link to Express Backend GitHub Repository:

https://github.com/mattb5/Capstone-Express-Template-API

Link to wireframes:

http://imgur.com/a/FWRmH

Front end was built with HTML, CSS, jQuery, Bootstrap, and Google Fonts.  Initially, I built the backend using the Express Template as given.  I created a "matches" model with different fields that would store in my MongoDB database.  The matches model was "owned" by the user who created it, and also had fields for strings of the name of the host user, opponent, time of the tennis match, and opponentID number.

From there, the matches controller was adjusted to appropriately be hit with curl requests in produce the proper CRUD actions that were desired to the MongoDB-stored data.

Next, a front end was constructed using starting with the JS-Template as given to us.  User authentication buttons were constructed so a user could signup, in, out, and change passwords.  Appropriate click handlers and ajax requests were constucted in order to allow these actions. Next, and very similarly, click handlers, ajax requests, and UI constructs were built to emulate the appropriate data that was retrieved and created in the backend database.

Finally, Bootstrap, Google Fonts and Handlebars were used for styling the SPA visualization.

Upon cloning the project, user should run NPM install to install dependencies.

USER STORIES:
As a user, I want to be able to visualize all matches that happening on the upcoming Sunday matches.
As a user, I want to be able to create a match to be able to potentially receive an opponent to play in said match.
As a user, I want to be able to join a match as an opponent if someone was to already create a match with a host and time in which I wanted to play.
As a user, I want to be able to delete a match should I not want to play on this Sunday.
As a user, I want to be able to change the time of match that I created.

Hurdles that I overcame included designing the model fields for Matches in the backend.  Additionally, I had to make a few additional controller methods for matches beyond what was just given to us in order to fulfill all of my desired app actions.  Using handlebars was a challenge but managed by using my group project's handlebars templates as a great reference.  Deploying to Express was a huge challenge, but with instructor help was able to overcome.
