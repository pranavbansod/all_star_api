const m = require('mithril');

const league = require('../models/league');

const formState = {
    rank:'',
    name:'',
    league:'',
    setRank:function (rank) {
        formState.rank = rank
    },
    setName:function (name) {
        formState.name = name;
    },
    setPosition:function (league) {
        formState.league = league
    }
};

const addTeamForm = {
    view: function () {
        return [
            m('h3',"Add Team"),
            m("label.label", "Rank"),
            m("input.number.input[type=text][placeholder=Rank]",{
                oninput: m.withAttr('value',formState.setRank)
            }),
            m("label.label", "Name"),
            m("input.name.input[type=text][placeholder=Name]",{
                oninput: m.withAttr('value',formState.setName)
            }),
            m("label.label", "League"),
            m("input.position.input[placeholder=League]",{
                oninput: m.withAttr('value',formState.setPosition)
            }),
            m("br"),
            m("button.button[type=submit]",{
                onclick:function () {
                    league.addTeam(formState.rank,formState.name,formState.league);
                }
            }, "Save"),
        ]
    }
};


module.exports = addTeamForm;