const m = require("mithril");

let Team = require('./views/team.js');
let newPlayer = require('./views/newPlayer.js');
let Player = require('./views/player.js');

m.route(document.body,"/team",{
    "/team": Team,
    "/newPlayer": newPlayer,
    "/player/:id": Player
});