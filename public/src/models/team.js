let m = require('mithril');

let team = {
    rank:'',
    name:'',
    league:'',
    player:'',
    players: [],
    load:function (team_id) {
        return m.request({
            method:'get',
            url:`/teams/${team_id}`
        }).then(function (res) {
            team.name = res.name;
            team.rank = res.rank;
            team.league = res.league;
        })

    },
    // fetchPlayers: function () {
    //     return m.request({
    //         method: 'get',
    //         url: '/players'
    //     }).then(function (players) {
    //         team.players = players;
    //     })
    // },
    // loadPlayer: function (id) {
    //     return m.request({
    //         method: "GET",
    //         url: `/player/${id}`,
    //     })
    //         .then(function (result) {
    //             team.player = result;
    //         })
    // },
    // addPlayer: function (number, name, position) {
    //     return m.request({
    //         method: 'post',
    //         url: '/players',
    //         data: {'player': {'number': number, 'name': name, 'position': position}},
    //     })
    // },
    // savePlayer:function () {
    //     return m.request({
    //         method: 'put',
    //         url:`/players/${team.player.id}`,
    //         data:team.player
    //     })
    // },
    // deletePlayer:function () {
    //     return m.request({
    //         method:'delete',
    //         url:`/players/${team.player.id}`
    //     })
    // }
};

module.exports = team;