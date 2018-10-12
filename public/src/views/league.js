let m = require('mithril');

let League = require('../models/league');

let league = {
    view:function () {
        return [m('h1','Champions League'),m('button',{href:'/addTeam', oncreate:m.route.link},"+")]
    }
};


module.exports = league;