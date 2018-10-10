let m = require('mithril');

let team = {
    current:'',
    players: [],
    fetchPlayers: function () {
        return m.request({
            method: 'get',
            url: 'players'
        }).then(function (players) {
            team.players = players;
        })
    },
    loadPlayer: function (id) {
        return m.request({
            method: "GET",
            url: `/player/${id}`,
        })
            .then(function (result) {
                team.current = result;
            })
    },
    addPlayer: function (number, name, position) {
        return m.request({
            method: 'post',
            url: '/players',
            data: {'player': {'number': number, 'name': name, 'position': position}},
        })
    }
};

module.exports = team;