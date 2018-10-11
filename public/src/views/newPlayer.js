const m = require('mithril');

let team = require('../models/team');

let newPlayer = {
    number:'',
    name:'',
    position:'',
    view: function () {
        return [
            m("label.label", "Number"),
            m("input.number.input[type=text][placeholder=Number]",{
                oninput: m.withAttr('value',function (num) {
                    this.number = num;
                },newPlayer)
            }),
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]",{
                oninput: m.withAttr('value',function (name) {
                    this.name = name;
                },newPlayer)
            }),
            m("label.label", "Position"),
            m("input.position.input[placeholder=Position]",{
                oninput: m.withAttr('value',function (pos) {
                    this.position = pos;
                },newPlayer)
            }),
            m("br"),
            m("button.button[type=submit]",{
                onclick:function () {
                    team.addPlayer(newPlayer.number,newPlayer.name,newPlayer.position);
                    window.location = '/'
                }
            }, "Save"),
        ]
    }
};


module.exports = newPlayer;