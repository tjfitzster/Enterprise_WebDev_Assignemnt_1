'use strict';
const POI = {
    index: {
        handler: function (request, h) {
            return h.view('main', { title: 'Welcome to the POI Application' });
        },
    },
    signup: {
        handler: function (request, h) {
            return h.view('signup', { title: 'Sign up to add Points Of Interest' });
        },
    },
    login: {
        handler: function (request, h) {
            return h.view('login', { title: 'Login to view Points Of Interest.' });
        },
    },

};

module.exports = POI;