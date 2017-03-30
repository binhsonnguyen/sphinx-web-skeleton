require('app-module-path').addPath(__dirname);

const config    = require('config/index');
const bootstrap = require('bootstrap/index');
const Container = require('sphinx/container');
const EventEmitter = require('events').EventEmitter;

(async () => {
    let container       = await bootstrap(config, new Container(new EventEmitter()));
    let consoleKernel   = await container.make('console.kernel');
    consoleKernel.parse(process.argv);
})().catch(error => {
    console.error(error);
    process.exit(error.code);
});
