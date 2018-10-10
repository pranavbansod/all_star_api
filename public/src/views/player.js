let m = require('mithril');
let team = require('../models/team');


let player = {
    oninit: function (vnode) {
        team.loadPlayer(vnode.attrs.name)
    },
    view: function () {
        return m("form",{
            onsubmit : function (e) {
                e.preventDefault();
                // team.savePlayer();
            }
        }, [
            m("label.label", "Number"),
            m("input.input[type=text][placeholder=Number]", {
                oninput: m.withAttr("value", function (num) {
                    team.current.number = num
                }),
                value:team.current.number
            }),
            m("label.label", "Name"),
            m("input.input[placeholder=Name]", {
                oninput: m.withAttr("value", function (name) {
                    team.current.name = name
                }),
                value: team.current.name
            }),
            m("label.label", "Position"),
            m("input.input[placeholder=Position]", {
                oninput: m.withAttr("value", function (pos) {
                    team.current.position = pos
                }),
                value: team.current.position
            }),
            m("button.button[type=submit]", "Save"),
        ])
    }
};

module.exports = player;