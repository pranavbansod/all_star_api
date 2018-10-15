const m = require('mithril');

let team = require('../models/team');
let editTeam = require('./editTeam');

let teamView = {
    editButtonText :'Edit',
    oninit: function (vnode) {
        team.load(vnode.attrs.teamId);
    },
    view: function (vnode) {
        return [
            m('h1', team.rank + "  -  " + team.name + "  -  " + team.league),
            m('button',{onclick:function () {
                    team.delete();
                    window.location = '/';
                }},"Delete"),
            m('button',{
                onclick: function () {
                    if (editTeam.display == 'none') {
                        editTeam.display = "block";
                        teamView.editButtonText = 'Cancel';
                    } else {
                        editTeam.display = "none";
                        teamView.editButtonText = 'Edit';
                    }
                }
            },teamView.editButtonText),
            m(editTeam,{'teamId':vnode.attrs.teamId})
        ];

    }
};

module.exports = teamView;