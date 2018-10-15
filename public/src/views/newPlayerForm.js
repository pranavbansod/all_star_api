const m = require('mithril');

let team = require('../models/team');

let newPlayerForm = {
    display: 'none',
    number: '',
    name: '',
    position: '',
    view: function () {
        return m("div", {style: `display:${newPlayerForm.display}`}, [
            m("h3", "Add Player"),
            m("label.label", "Number"),
            m("input.number.input[type=text][placeholder=Number]", {
                oninput: m.withAttr('value', function (num) {
                    this.number = num;
                }, newPlayerForm)
            }),
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]", {
                oninput: m.withAttr('value', function (name) {
                    this.name = name;
                }, newPlayerForm)
            }),
            m("label.label", "Position"),
            m("input.position.input[placeholder=Position]", {
                oninput: m.withAttr('value', function (pos) {
                    this.position = pos;
                }, newPlayerForm)
            }),
            m("br"),
            m("button.button[type=submit]", {
                onclick: function () {
                    newPlayerForm.display = "none";
                    let player = newPlayerForm;
                    team.addPlayer(player.number, player.name, player.position);
                    location.reload();
                }
            }, "Add"),
        ])
    }
};


module.exports = newPlayerForm;