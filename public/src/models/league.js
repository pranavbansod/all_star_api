let m = require('mithril');

let league = {
    addTeam:function (rank, name, league) {
        return m.request({
            method:'post',
            url:'/teams',
            data:{'team':{'rank':rank,'name':name,'league':league}}
        }).then(
            function (res) {
                console.log(res)
            }
        )
    }

};

module.exports =league;