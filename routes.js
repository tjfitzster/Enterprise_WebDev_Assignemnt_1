const POI = require('./app/controllers/POI');

module.exports = [
    { method: 'GET', path: '/', config: POI.index },
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