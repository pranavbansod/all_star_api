let m = require('mithril');

let league = {
    teams:[],
    addTeam:function (rank, name, league) {
        return m.request({
            method:'post',
            url:'/teams',
            data:{'team':{'rank':rank,'name':name,'league':league}}
        })
    },
    fetchTeams:function () {
        return m.request({
            method:'get',
            url:'/teams'
        }).then(function (result) {
            league.teams = result;
            league.sortTeamsByRank();
        })
    },
    sortTeamsByRank:function () {
        league.teams.sort(function (teamA, teamB) {
            return teamA.rank - teamB.rank
        })
    }
};

module.exports =league;