const m = require('mithril');

const team = require('../models/team');


const editTeamForm = {
    display: 'none',
    view: function () {
        return m("div", {style: `display:${editTeamForm.display}`}, [
            m("h3", "Edit Team"),
            m("label.label", "Rank"),
            m("input.number.input[type=text][placeholder=Rank]", {
                oninput: m.withAttr("value", function (rank) {
                    team.rank = rank;
                }),
                value: team.rank
            }),
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]", {
                oninput: m.withAttr("value", function (name) {
                    team.name = name;
                }),
                value: team.name
            }),
            m("label.label", "League"),
            m("input.position.input[placeholder=League]", {
                oninput: m.withAttr("value", function (league) {
                    team.league = league;
                }),
                value: team.league
            }),
            m("br"),
            m("button.button[type=submit]", {
                onclick: function () {
                    editTeamForm.display = "none";
                    team.update();
                    location.reload();
                }
            }, "Save"),
        ])
    }
};

module.exports = editTeamForm;