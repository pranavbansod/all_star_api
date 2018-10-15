const m = require('mithril');

let team = require('../models/team');
let editPlayerForm = require('./editPlayerForm');

let players = {
    oninit: function (vnode) {
        team.fetchPlayers(vnode.attrs.teamId);
    },
    view: function (vnode) {
        return [
            m('h2', "Squad"),
            m('table', {
                width: "40%",
                border: "1px solid black",
                style: "border-collapse:collapse;text-align:center"
            }, [
                m('tr', [m('th', "Number"), m('th', "Name"), m('th', "Position")]),
                team.players.map(function (player) {
                    return m('tr',
                        [
                            m('td', player.number),
                            m('td', player.name),
                            m('td', player.position),
                            m('td', m('button',{
                                onclick:function () {
                                    if (editPlayerForm.display == 'none') {
                                        editPlayerForm.display = "block";
                                    } else {
                                        editPlayerForm.display = "none";
                                    }
                                }
                            }, "Edit")),
                            m('td', m("button", {
                                onclick: function () {
                                    team.deletePlayer(player.id);
                                }
                            }, "x"))
                        ])
                })]),
            m(editPlayerForm,{'teamId':vnode.attrs.teamId})
        ]
    }
};

module.exports = players;