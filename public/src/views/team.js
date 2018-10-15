const m = require('mithril');

let team = require('../models/team');
let editTeam = require('./editTeam');
let addPlayer = require('./addPlayer');

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
                    if (addPlayer.display == 'none') {
                        addPlayer.display = "block";
                        teamView.addPlayerButtonText = 'Cancel';
                    } else {
                        addPlayer.display = "none";
                        teamView.addPlayerButtonText = 'Add Player';
                    }
                }
            }, teamView.addPlayerButtonText),
            m(editTeam, {'teamId': vnode.attrs.teamId}),
            m(addPlayer)
        ];

    }
};

module.exports = teamView;