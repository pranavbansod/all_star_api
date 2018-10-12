const m = require('mithril');

let team = require('../models/team');

module.exports = {
    oninit: function (vnode) {
        team.load(vnode.attrs.team_id);
    },
    view: function () {
        return [
            m('h1', team.rank + "  -  " + team.name + "  -  " + team.league),
        ];

    }
};