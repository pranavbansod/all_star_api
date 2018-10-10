const m = require('mithril');

let team = require('../models/team');

module.exports = {
    oninit: function () {
        team.fetchPlayers();
    },
    view: function () {
        return [
            m('h1', 'Real Madrid'),
            m('button', {href: '/addPlayer', oncreate: m.route.link}, "+"),
            m('.player-list', team.players.map(function (player) {
                return  [m('a',{href:'/player/' + player.id, oncreate: m.route.link},player.name),m('br')];
            }))
        ];

    }
};