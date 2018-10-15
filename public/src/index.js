const m = require("mithril");

let league = require('./views/league');
let addTeamForm = require('./views/addTeamForm.js');
let team = require('./views/team.js');
let editPlayerForm = require('./views/editPlayerForm');

m.route(document.body,"/league",{
    "/league":league,
    "/addTeam":addTeamForm,
    "/teams/:teamId":team,
    "/teams/:teamId/players/:playerId":editPlayerForm
});