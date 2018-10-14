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
        return m('div', {style:`display:${editTeam.display}`}, 'Form')
    }
};

module.exports = editTeam;