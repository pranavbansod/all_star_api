const m = require('mithril');

let team = require('../models/team');
let editTeam = require('./editTeam');
let newPlayerForm = require('./newPlayerForm');

let teamView = {
    editButtonText: 'Edit',
    addPlayerButtonText: 'Add Player',
    oninit: function (vnode) {
        team.load(vnode.attrs.teamId);
    },
    view: function (vnode) {
        return [
            m('h1', team.rank + "  -  " + team.name + "  -  " + team.league),
            m('button', {
                onclick: function () {
                    team.delete();
                    window.location = '/';
                }
            }, "Delete"),
            m('button', {
                onclick: function () {
                    if (editTeam.display == 'none') {
                        editTeam.display = "block";
                        teamView.editButtonText = 'Cancel';
                    } else {
                        editTeam.display = "none";
                        teamView.editButtonText = 'Edit';
                    }
                }
            }, teamView.editButtonText),
            m("button", {
                onclick: function () {
                    if (newPlayerForm.display == 'none') {
                        newPlayerForm.display = "block";
                        teamView.addPlayerButtonText = 'Cancel';
                    } else {
                        newPlayerForm.display = "none";
                        teamView.addPlayerButtonText = 'Add Player';
                    }
                }
            }, teamView.addPlayerButtonText),
            m(editTeam, {'teamId': vnode.attrs.teamId}),
            m(newPlayerForm)
        ];

    }
};

module.exports = teamView;