module.exports = {

    'default': process.env.QUEUE_DEFAULT || 'general',

    'adapters': {
        'send-email': {
            'adapter': 'synced'
        },
        'general': {
            'adapter': 'dumb',
            'worker': {
                number  : 1,
                retry   : 1,
                timeout : 10000
            },
        }
    }
};
