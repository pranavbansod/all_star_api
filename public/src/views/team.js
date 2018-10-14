const m = require('mithril');

let team = require('../models/team');
let editTeam = require('./editTeam');

let teamView = {
    editTeamFormVisibility:false,
    oninit: function (vnode) {
        team.load(vnode.attrs.team_id);
    },
    view: function () {
        return [
            m('h1', team.rank + "  -  " + team.name + "  -  " + team.league),
            m('button',{onclick:function () {
                    team.delete();
                    window.location = '/';
                }},"Delete"),
            m('button',{
                onclick:function () {
                    teamView.editTeamFormVisibility=true;
                }
            },'Edit'),
            m(editTeam,{'show':teamView.editTeamFormVisibility})
        ];

    }
};
module.exports = teamView;