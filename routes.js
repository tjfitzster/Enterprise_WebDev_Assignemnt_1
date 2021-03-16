"use strict";
const Accounts = require("./app/controllers/accounts");
const showPOI = require("./app/controllers/showPOI");

module.exports = [
    { method: "GET", path: "/", config: Accounts.index },
    { method: "GET", path: "/signup", config: Accounts.showSignup },
    { method: "GET", path: "/login", config: Accounts.showLogin },
    { method: "GET", path: "/logout", config: Accounts.logout },
    { method: "POST", path: "/signup", config: Accounts.signup },
    { method: "POST", path: "/login", config: Accounts.login },
    { method: "GET", path: "/home", config: showPOI.home },
    { method: "GET", path: "/report", config: showPOI.report },
    { method: 'POST', path: '/POI', config: showPOI.poi },
    {
        method: "GET",
        path: "/{param*}",
        handler: {
            directory: {
                path: "./public",
            },
        },
        options: { auth: false }
    },
];