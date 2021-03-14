const POI = require('./app/controllers/POI');

module.exports = [
    { method: 'GET', path: '/', config: POI.index },
    { method: "GET", path: "/signup", config: POI.signup },
    { method: "GET", path: "/login", config: POI.login },
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: './public',
            },
        },
    },
];