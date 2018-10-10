const m = require("mithril");

let Team = require('./views/team.js');
let AddPlayer = require('./views/addPlayer.js');
let Player = require('./views/player.js');

m.route(document.body,"/team",{
    "/team": Team,
    "/addPlayer": AddPlayer,
    "/player/:name": Player
});