const m = require("mithril");

let Team = require('./views/team.js');
let AddPlayer = require('./views/addPlayer.js');

m.route(document.body,"/home",{
    "/home": Team,
    "/addPlayer": AddPlayer
});