const POI = {
    index: {
        handler: function (request, h) {
            return h.file('./app/views/main.hbs');
        },
    },
    signup: {
        handler: function (request, h) {
            return h.file('./app/views/signup.hbs');
        },
    },
    login: {
        handler: function (request, h) {
            return h.file('./app/views/login.hbs');
        },
    },
};

module.exports = POI;