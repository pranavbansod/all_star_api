const m = require('mithril');

let team = require('../models/team');

let players = {
    oninit: function (vnode) {
        team.fetchPlayers(vnode.attrs.teamId);
    },
    view: function () {
        return [
            m('h2', "Player List"),
            m('table',{
                width :"40%",
                border:"1px solid black",
                style:"border-collapse:collapse;text-align:center"
            }, [m('tr',[m('th', "Number"),m('th',"Name"),m('th',"Position")]),team.players.map(function (player) {
            return m('tr', [m('td', player.number),m('td',player.name),m('td',player.position)])
        })])]
    }
};

module.exports = players;