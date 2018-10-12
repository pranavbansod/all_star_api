let m = require('mithril');

let League = require('../models/league');

let league = {
    oninit: function () {
        League.fetchTeams();
    },
    view: function () {
        return [
            m('h1', 'Champions League'),
            m('button', {href: '/addTeam', oncreate: m.route.link}, "+"),
            m('ul', League.teams.map(function (team) {
                return m('li', {type: 'disc'}, team.rank + "   " + team.name)
            }))
        ]
    }
};


module.exports = league;