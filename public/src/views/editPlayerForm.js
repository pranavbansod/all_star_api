const m = require('mithril');

let editPlayerForm = {
    oninit:function (vnode) {
        console.log(vnode.attrs.teamId)
    },
    display: 'none',
    view: function () {
        return m('div', {style: `display:${editPlayerForm.display}`}, [
            m("h3", "Edit Player"),
            m("label.label", "Number"),
            m("input.number.input[type=text][placeholder=Number]"),
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]"),
            m("label.label", "Position"),
            m("input.position.input[placeholder=Position]"),
            m("br"),
            m("button.button[type=submit]", "Save")
        ])
    }
};

module.exports = editPlayerForm;