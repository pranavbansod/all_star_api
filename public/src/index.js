const m = require("mithril");

const league = require('./views/league');
const addTeamForm = require('./views/addTeamForm.js');
const team = require('./views/team.js');
const editPlayerForm = require('./views/editPlayerForm');

m.route(document.body,"/league",{
    "/league":league,
    "/addTeam":addTeamForm,
    "/teams/:teamId":team,
    "/teams/:teamId/players/:playerId":editPlayerForm
});