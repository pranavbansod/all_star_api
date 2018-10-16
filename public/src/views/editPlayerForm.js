const m = require('mithril');

const player = require('../models/player');

const editPlayerForm = {
    oninit: function (vnode) {
        let attrs = vnode.attrs;
        player.getPlayer(attrs.teamId, attrs.playerId)
    },
    display: 'none',
    view: function (vnode) {
        return [
            m("h3", "Edit Player"),
            m("label.label", "Number"),
            m("input.number.input[type=text][placeholder=Number]", {
                oninput:m.withAttr("value",function (number) {
                    player.number = number;
                }),
                value: player.number
            }),
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]", {
                oninput:m.withAttr("value",function (name) {
                    player.name = name;
                }),
                value: player.name
            }),
            m("label.label", "Position"),
            m("input.position.input[placeholder=Position]",{
                oninput:m.withAttr("value",function (position) {
                    player.position = position;
                }),
                value: player.position
            }),
            m("br"),
            m("button.button[type=submit]",{
                onclick:function () {
                    player.updatePlayer(vnode.attrs.teamId,vnode.attrs.playerId).then(function () {
                        window.location = `#!/teams/${vnode.attrs.teamId}`
                    });
                }
            }, "Save")
        ]
    }
};

module.exports = editPlayerForm;