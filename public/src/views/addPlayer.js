const m = require('mithril');

let team = require('../models/team');

module.exports = {
    view: function () {
        return m("form", {
            onsubmit: function(e) {
                e.preventDefault();
                let name = document.body.getElementsByClassName("name")[0].value;
                let position = document.body.getElementsByClassName("position")[0].value;
                if(name && position){
                    team.addPlayer(name,position)
                }
            }
        }, [
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]"),
            m("label.label", "Position"),
            m("input.position.input[placeholder=Position]"),
            m("button.button[type=submit]", "Save"),
        ])
    }
};