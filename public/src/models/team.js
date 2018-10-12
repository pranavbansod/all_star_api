let m = require('mithril');

let team = {
    id:'',
    rank:'',
    name:'',
    league:'',
    load:function (team_id) {
        return m.request({
            method:'get',
            url:`/teams/${team_id}`
        }).then(function (res) {
            team.id = res.id;
            team.name = res.name;
            team.rank = res.rank;
            team.league = res.league;
        })

    },
    delete:function () {
        m.request({
            method:'delete',
            url:`/teams/${team.id}`
        })
    }
};

module.exports = team;