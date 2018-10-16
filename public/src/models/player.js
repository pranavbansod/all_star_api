const m = require('mithril');

const player = {
    number:'',
    name:'',
    position:'',
    getPlayer:function (teamId, playerId) {
        return m.request({
            method:'get',
            url:`/teams/${teamId}/players/${playerId}`
        }).then(function (result) {
            player.name = result.name;
            player.number = result.number;
            player.position = result.position;
        })
    },
    updatePlayer:function (teamId,id) {
        return m.request({
            method: 'put',
            url:`/teams/${teamId}/players/${id}`,
            data:{'player':{'name':player.name,'number':player.number,'position':player.position}}
        })
    }
};

module.exports = player;