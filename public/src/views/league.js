const m = require('mithril');

let League = require('../models/league');

let league = {
    oninit: function () {
        League.fetchTeams();
    },
    view: function () {
        return [
            m('h1', 'Champions League'),
            m('button', {href: '/addTeam', oncreate: m.route.link}, "+"),
            m('div', League.teams.map(function (team) {
                return m('li',m('a', {
                    href: '/teams/' + team.id,
                    oncreate: m.route.link,
                    type: 'number'
                },team.rank + "   " + team.name))
            }))
        ]
    }
};


module.exports = league;