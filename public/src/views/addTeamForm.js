const m = require('mithril');

const league = require('../models/league');

const addTeamForm = {
    rank:'',
    name:'',
    league:'',
    view: function () {
        return [
            m('h3',"Add Team"),
            m("label.label", "Rank"),
            m("input.number.input[type=text][placeholder=Rank]",{
                oninput: m.withAttr('value',function (rank) {
                    this.rank = rank;
                },addTeamForm)
            }),
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]",{
                oninput: m.withAttr('value',function (name) {
                    this.name = name;
                },addTeamForm)
            }),
            m("label.label", "League"),
            m("input.position.input[placeholder=League]",{
                oninput: m.withAttr('value',function (league) {
                    this.league = league;
                },addTeamForm)
            }),
            m("br"),
            m("button.button[type=submit]",{
                onclick:function () {
                    league.addTeam(addTeamForm.rank,addTeamForm.name,addTeamForm.league);
                    window.location = '/'
                }
            }, "Save"),
        ]
    }
};


module.exports = addTeamForm;