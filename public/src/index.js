const m = require("mithril");

let league = require('./views/league');
let addTeam = require('./views/addTeam.js');
let team = require('./views/team.js');

m.route(document.body,"/league",{
    "/league":league,
    "/addTeam":addTeam,
    "/teams/:teamId":team
});