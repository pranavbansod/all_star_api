let m = require('mithril');

let team = {
    players:[],
    fetchPlayers:function(){
      return m.request({
          method:'get',
          url:'players'
      }).then(function (players) {
          team.players = players;
      })
    },
    addPlayer:function (name,position) {
        console.log(`Add player called with name: ${name} & position: ${position}`);
        return m.request({
            method:'post',
            url:'/players',
            data:{'player': {'name':name, 'position':position}},
        })
    }
};

module.exports = team;