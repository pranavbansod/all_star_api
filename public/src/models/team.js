let m = require('mithril');

let team = {
    id: '',
    rank: '',
    name: '',
    league: '',
    players:[],
    load: function (teamId) {
        return m.request({
            method: 'get',
            url: `/teams/${teamId}`
        }).then(function (res) {
            team.id = res.id;
            team.name = res.name;
            team.rank = res.rank;
            team.league = res.league;
        })

    },
    update: function () {
        console.log("Update team");
        return m.request({
            method: 'put',
            url: `/teams/${team.id}`,
            data: {'team': {'rank': team.rank, 'name': team.name, 'league': team.league}}
        })
    },
    addPlayer: function (number, name, position) {
        return m.request({
            method: 'post',
            url: `/teams/${team.id}/players`,
            data: {'player': {'number': number, 'name': name, 'position': position}}
        })
    },
    fetchPlayers:function (teamId) {
        return m.request({
            method:'get',
            url:`/teams/${teamId}/players`
        }).then(function (result) {
            team.players = result
        })
    },
    delete: function () {
        return m.request({
            method: 'delete',
            url: `/teams/${team.id}`
        })
    }
};

module.exports = team;