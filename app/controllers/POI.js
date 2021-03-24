"use strict";
const POI = require("../models/poi");
const User = require("../models/user");
const ImageStore = require('../utils/image-store');


const Poi = {
    home: {
        handler: async function(request, h) {
            return h.view("home", { title: "Welcome to The POI Application"
                                    });
        }
    },
    report: {
        handler: async function(request, h) {
            const pois = await POI.find().populate("donor").lean();
            return h.view("report", {
                title: "POIS to this  Date",
                pois: pois
            });
        }
    },
    addPoi: {
        handler: async function(request, h) {
            try {
                const id = request.auth.credentials.id;
                const user = await User.findById(id);
                const data = request.payload;
                const newPoi = new POI({
                    location: data.Location,
                    description: data.Description,
                    donor: user._id
                });
                await newPoi.save();
                 return h.redirect("/report");
            } catch (err) {
                return h.view("main", { errors: [{ message: err.message }] });
            }
        }
    }
};

module.exports = Poi;