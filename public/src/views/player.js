let m = require('mithril');
let team = require('../models/team');


let player = {
    oninit: function (vnode) {
        team.loadPlayer(vnode.attrs.id)
    },
    view: function () {
        return m("form",{
            onsubmit : function (e) {
                e.preventDefault();
                team.savePlayer();
            }
        }, [
            m("label.label", "Number"),
            m("input.input[type=text][placeholder=Number]", {
                oninput: m.withAttr("value", function (num) {
                    team.player.number = num
                }),
                value:team.player.number
            }),
            m("label.label", "Name"),
            m("input.input[placeholder=Name]", {
                oninput: m.withAttr("value", function (name) {
                    team.player.name = name
                }),
                value: team.player.name
            }),
            m("label.label", "Position"),
            m("input.input[placeholder=Position]", {
                oninput: m.withAttr("value", function (pos) {
                    team.player.position = pos
                }),
                value: team.player.position
            }),
            m("button.button[type=submit]", "Save"),
            m("button.button",{
                onclick:function () {
                    team.deletePlayer();
                }
            },"Delete")
        ])
    }
};

module.exports = player;