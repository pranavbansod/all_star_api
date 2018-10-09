const m = require('mithril');

let team = require('../models/team');

module.exports = {
    view: function () {
        return m("form", {
            onsubmit: function(e) {
                e.preventDefault();
                let number = document.body.getElementsByClassName("number")[0].value;
                let name = document.body.getElementsByClassName("name")[0].value;
                let position = document.body.getElementsByClassName("position")[0].value;
                if(name && position){
                    team.addPlayer(number,name,position)
                }
            }
        }, [
            m("label.label", "Number"),
            m("input.number.input[type=text][placeholder=Number]"),
            m("br"),
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]"),
            m("br"),
            m("label.label", "Position"),
            m("input.position.input[placeholder=Position]"),
            m("br"),
            m("button.button[type=submit]", "Save"),
        ])
    }
};