module.exports = function(config) {
    config.set({
        colors: true,
        frameworks: ['browserify', 'jasmine'],

        autoWatch: true,
        autoWatchBatchDelay: 1000,

        port: 9876,
        singleRun: false,
        logLevel: config.LOG_DEBUG,

        files: [
            'tests/*.js'
        ],

        preprocessors: {
            'tests/*.js': [ 'browserify' ]
        },

        browserify: {
            debug: true
        },

        browsers: ['Chrome']
    });
};
