const m = require('mithril');

let players = require('../models/players');

let editPlayerForm = {
    oninit: function (vnode) {
        let attrs = vnode.attrs;
        players.getPlayer(attrs.teamId, attrs.playerId)
    },
    display: 'none',
    view: function (vnode) {
        return [
            m("h3", "Edit Player"),
            m("label.label", "Number"),
            m("input.number.input[type=text][placeholder=Number]", {
                oninput:m.withAttr("value",function (number) {
                    players.currentPlayer.number = number;
                }),
                value: players.currentPlayer.number
            }),
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]", {
                oninput:m.withAttr("value",function (name) {
                    players.currentPlayer.name = name;
                }),
                value: players.currentPlayer.name
            }),
            m("label.label", "Position"),
            m("input.position.input[placeholder=Position]",{
                oninput:m.withAttr("value",function (position) {
                    players.currentPlayer.position = position;
                }),
                value: players.currentPlayer.position
            }),
            m("br"),
            m("button.button[type=submit]",{
                onclick:function () {
                    players.updatePlayer(vnode.attrs.teamId,vnode.attrs.playerId).then(function () {
                        window.location = `#!/teams/${vnode.attrs.teamId}`
                    });
                }
            }, "Save")
        ]
    }
};

module.exports = editPlayerForm;