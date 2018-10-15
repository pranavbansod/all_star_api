const m = require("mithril");

let league = require('./views/league');
let addTeamForm = require('./views/addTeamForm.js');
let team = require('./views/team.js');

m.route(document.body,"/league",{
    "/league":league,
    "/addTeam":addTeamForm,
    "/teams/:teamId":team
});