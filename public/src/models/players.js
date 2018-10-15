const m = require('mithril');

let player = {
    currentPlayer:{},
    oninit:function (vnode) {
        player.teamId = vnode.attrs.teamId;
        player.id = vnode.attrs.playerId
    },
    getPlayer:function (teamId, playerId) {
        return m.request({
            method:'get',
            url:`/teams/${teamId}/players/${playerId}`
        }).then(function (result) {
            player.currentPlayer = result;
        })
    },
    updatePlayer:function (teamId,id) {
        return m.request({
            method: 'put',
            url:`/teams/${teamId}/players/${id}`,
            data:{'player':player.currentPlayer}
        })
    }
};

module.exports = player;