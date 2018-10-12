let m = require('mithril');

let team = {
    rank:'',
    name:'',
    league:'',
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
};

module.exports = team;