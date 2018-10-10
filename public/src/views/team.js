const m = require('mithril');

let team = require('../models/team');

module.exports = {
    oninit: function () {
        team.fetchPlayers();
    },
    view: function () {
        return [
            m('h1', 'All Star 2018'),
            m('button', {href: '/addPlayer', oncreate: m.route.link}, "+"),
            m('.player-list', team.players.map(function (player) {
                return [m('',player.number || "N/A" ), m('a',{href:'/player/' + player.name, oncreate: m.route.link},player.name) , m('',player.position), m('br')];
            }))
        ];

    }
};