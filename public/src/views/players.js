const m = require('mithril');

const team = require('../models/team');

const players = {
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
                            m('td', m('a', {
                                    href: '/teams/' + team.id + '/players/' + player.id,
                                    oncreate: m.route.link
                                }, m('button', player.name))
                            ),
                            m('td', player.position),
                            m('td', m("button", {
                                onclick: function () {
                                    team.deletePlayer(player.id);
                                }
                            }, "x"))
                        ])
                })])
        ]
    }
};

module.exports = players;