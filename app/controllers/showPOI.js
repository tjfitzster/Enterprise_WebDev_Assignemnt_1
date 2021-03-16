"use strict";

const showPOI = {
    home: {
        handler: function (request, h) {
            return h.view("home", { title: "Add a POI" });
        },
    },
    report: {
        handler: function (request, h) {
            return h.view("report", {
                title: "POI's so far",
                pois: this.pois,
            });
        },
    },
    poi: {
        handler: function (request, h) {
            let data = request.payload;
            data.donor = this.currentUser;
            this.pois.push(data);
            return h.redirect("/report");
        },
    },
};

module.exports = showPOI;