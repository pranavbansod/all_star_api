const m = require('mithril');

let team = require('../models/team');

let addPlayerForm = {
    display: 'none',
    number: '',
    name: '',
    position: '',
    view: function () {
        return m("div", {style: `display:${addPlayerForm.display}`}, [
            m("h3", "Add Player"),
            m("label.label", "Number"),
            m("input.number.input[type=text][placeholder=Number]", {
                oninput: m.withAttr('value', function (num) {
                    this.number = num;
                }, addPlayerForm)
            }),
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]", {
                oninput: m.withAttr('value', function (name) {
                    this.name = name;
                }, addPlayerForm)
            }),
            m("label.label", "Position"),
            m("input.position.input[placeholder=Position]", {
                oninput: m.withAttr('value', function (pos) {
                    this.position = pos;
                }, addPlayerForm)
            }),
            m("br"),
            m("button.button[type=submit]", {
                onclick: function () {
                    addPlayerForm.display = "none";
                    let player = addPlayerForm;
                    team.addPlayer(player.number, player.name, player.position);
                    location.reload();
                }
            }, "Add"),
        ])
    }
};


module.exports = addPlayerForm;