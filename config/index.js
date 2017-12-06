require('dotenv').load();

module.exports = {

    // Services will be used for the application
    providers: [

        // Sphinx default providers
        // remove unused provider if needed to match with the application requirement
        require('@sphinx-software/fusion/acl/acl.provider'),
        require('@sphinx-software/fusion/database/database.provider'),
        require('@sphinx-software/fusion/http/http.provider'),
        require('@sphinx-software/fusion/mongo/mongo.provider'),
        require('@sphinx-software/fusion/hash/hash.provider'),
        require('@sphinx-software/fusion/log/log.provider'),
        require('@sphinx-software/fusion/serializer/serializer.provider'),
        require('@sphinx-software/fusion/redis/redis.provider'),
        require('@sphinx-software/fusion/storage/storage-factory.provider'),
        require('@sphinx-software/fusion/session/session.provider'),
        require('@sphinx-software/fusion/cache/cache.provider'),
        require('@sphinx-software/fusion/console/console.provider'),
        require('@sphinx-software/fusion/view-engine-nunjucks/nunjucks.provider'),
        require('@sphinx-software/fusion/view/view.provider'),
        require('@sphinx-software/fusion/url/url.provider'),
        require('@sphinx-software/fusion/meta-injector/meta-injector.provider'),
        require('@sphinx-software/fusion/routing/routing.provider'),
        
        // Application providers
        // add more providers to extend the application functionality
        require('app/app.provider')
    ],

    injects: [
        // Injects dependencies by its metadata here
        require('app/http/welcome.controller'),
        require('app/command/quotes.command')
    ],

    // Services related configuration
    acl     : require('./acl'),
    auth    : require('./auth'),
    database: require('./database'),
    mongo   : require('./mongo'),
    hash    : require('./hash'),
    http    : require('./http'),
    log     : require('./log'),
    redis   : require('./redis'),
    session : require('./session'),
    cache   : require('./cache'),
    view    : require('./view'),
    routes  : require('./routes'),
};
