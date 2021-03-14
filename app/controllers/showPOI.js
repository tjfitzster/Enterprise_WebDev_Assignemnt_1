"use strict";

const showPOI = {
    home: {
        handler: function (request, h) {
            return h.view("home", { title: "Add a POI" });
        },
    },
    report: {
        handler: function (request, h) {
            return h.view("report", { title: "POI's so far" });
        },
    },
};

module.exports = showPOI;