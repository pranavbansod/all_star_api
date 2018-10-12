const m = require('mithril');

let team = require('../models/team');

let addPlayer = {
    number:'',
    name:'',
    position:'',
    view: function () {
        return [
            m("label.label", "Number"),
            m("input.number.input[type=text][placeholder=Number]",{
                oninput: m.withAttr('value',function (num) {
                    this.number = num;
                },addPlayer)
            }),
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]",{
                oninput: m.withAttr('value',function (name) {
                    this.name = name;
                },addPlayer)
            }),
            m("label.label", "Position"),
            m("input.position.input[placeholder=Position]",{
                oninput: m.withAttr('value',function (pos) {
                    this.position = pos;
                },addPlayer)
            }),
            m("br"),
            m("button.button[type=submit]",{
                onclick:function () {
                    team.addPlayer(addPlayer.number,addPlayer.name,addPlayer.position);
                    window.location = '/'
                }
            }, "Save"),
        ]
    }
};


module.exports = addPlayer;