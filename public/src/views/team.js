const m = require('mithril');

const team = require('../models/team');
const editTeamForm = require('./editTeamForm');
const addPlayerForm = require('./addPlayerForm');
const players = require('./players.js');

const teamView = {
    editButtonText: 'Edit',
    addPlayerButtonText: 'Add Player',
    oninit: function (vnode) {
        team.load(vnode.attrs.teamId);
    },
    view: function (vnode) {
        return [
            m('a',{
                href:'/',
                oncreate:m.route.link
            },m('button',"Champions League")),
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