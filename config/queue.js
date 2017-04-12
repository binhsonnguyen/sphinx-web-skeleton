module.exports = {

    'default': process.env.QUEUE_DEFAULT || 'general',

    'adapters': {
        'send-email': {
            'adapter': 'dumb',
            'retry'         : 1,
            'timeout'       : 10000,
            'instances'     : 1,
            'memory-limit'  : '100M'
        },
        'general': {
            'adapter': 'dumb',
            'retry'         : 1,
            'timeout'       : 10000,
            'instances'     : 1,
            'memory-limit'  : '100M'
        }
    }
};
