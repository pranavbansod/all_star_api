const m = require('mithril');

let team = require('../models/team');
let editTeamForm = require('./editTeamForm');
let addPlayerForm = require('./addPlayerForm');
let players = require('./players.js');

let teamView = {
    editButtonText: 'Edit',
    addPlayerButtonText: 'Add Player',
    oninit: function (vnode) {
        team.load(vnode.attrs.teamId);
    },
    view: function (vnode) {
        return [
            m('h1', "Rank:" + team.rank + ",  Name: " + team.name + ",  League: " + team.league),
            m('button', {
                onclick: function () {
                    team.delete();
                    window.location = '/';
                }
            }, "Delete"),
            m('button', {
                onclick: function () {
                    if (editTeamForm.display == 'none') {
                        editTeamForm.display = "block";
                        teamView.editButtonText = 'Cancel';
                    } else {
                        editTeamForm.display = "none";
                        teamView.editButtonText = 'Edit';
                    }
                }
            }, teamView.editButtonText),
            m("button", {
                onclick: function () {
                    if (addPlayerForm.display == 'none') {
                        addPlayerForm.display = "block";
                        teamView.addPlayerButtonText = 'Cancel';
                    } else {
                        addPlayerForm.display = "none";
                        teamView.addPlayerButtonText = 'Add Player';
                    }
                }
            }, teamView.addPlayerButtonText),
            m(editTeamForm, {'teamId': vnode.attrs.teamId}),
            m(addPlayerForm),
            m(players,{'teamId':vnode.attrs.teamId})
        ];

    }
};

module.exports = teamView;