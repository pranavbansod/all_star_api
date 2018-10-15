let m = require('mithril');

let editTeam = {
    display:'none',
    onbeforeupdate:function (vnode) {
        if(vnode.attrs.show){
            editTeam.display = "block";
            return
        }
        editTeam.display = "none"
    },
    view: function (vnode) {
        return m('div', {style:`display:${editTeam.display}`}, [
            m('h3',"Edit Team"),
            m("label.label", "Rank"),
            m("input.number.input[type=text][placeholder=Rank]"),
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]"),
            m("label.label", "League"),
            m("input.position.input[placeholder=League]"),
            m("br"),
            m("button.button[type=submit]", "Save"),
        ])
    }
};

module.exports = editTeam;