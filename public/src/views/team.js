const m = require('mithril');

let team = require('../models/team');
let editTeam = require('./editTeam');

let teamView = {
    editTeamFormVisibility:false,
    editButtonText :'Edit',
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
                    if(teamView.editTeamFormVisibility == false) {
                        teamView.editTeamFormVisibility = true;
                        teamView.editButtonText = 'Cancel';
                    } else {
                        teamView.editTeamFormVisibility = false;
                        teamView.editButtonText = 'Edit';
                    }
                }
            },teamView.editButtonText),
            m(editTeam,{'show':teamView.editTeamFormVisibility})
        ];

    }
};
module.exports = teamView;