const m = require('mithril');

let league = require('../models/league');

let addTeam = {
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
                },addTeam)
            }),
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]",{
                oninput: m.withAttr('value',function (name) {
                    this.name = name;
                },addTeam)
            }),
            m("label.label", "League"),
            m("input.position.input[placeholder=League]",{
                oninput: m.withAttr('value',function (league) {
                    this.league = league;
                },addTeam)
            }),
            m("br"),
            m("button.button[type=submit]",{
                onclick:function () {
                    league.addTeam(addTeam.rank,addTeam.name,addTeam.league);
                    window.location = '/'
                }
            }, "Save"),
        ]
    }
};


module.exports = addTeam;