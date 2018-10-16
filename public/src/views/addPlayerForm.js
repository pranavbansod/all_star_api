const m = require('mithril');

const team = require('../models/team');

const formState = {
    number: '',
    name: '',
    position: '',
    setNumber:function (no) {
      formState.number = no;
    },
    setName:function (name) {
        formState.name = name;
    },
    setPosition:function (pos) {
        formState.position = pos;
    }
};

const addPlayerForm = {
    display: 'none',
    view: function () {
        return m("div", {style: `display:${addPlayerForm.display}`}, [
            m("h3", "Add Player"),
            m("label.label", "Number"),
            m("input.number.input[type=text][placeholder=Number]", {
                oninput: m.withAttr('value',formState.setNumber)
            }),
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]", {
                oninput: m.withAttr('value',formState.setName)
            }),
            m("label.label", "Position"),
            m("input.position.input[placeholder=Position]", {
                oninput: m.withAttr('value',formState.setPosition)
            }),
            m("br"),
            m("button.button[type=submit]", {
                onclick: function () {
                    addPlayerForm.display = "none";
                    team.addPlayer(formState.number, formState.name, formState.position);
                    location.reload();
                }
            }, "Add"),
        ])
    }
};


module.exports = addPlayerForm;