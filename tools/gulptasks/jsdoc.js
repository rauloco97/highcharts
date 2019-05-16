/*
 * Copyright (C) Highsoft AS
 */

const gulp = require('gulp');

/* *
 *
 *  Tasks
 *
 * */

/**
 * Create Highcharts API and class references from JSDoc
 *
 * @return {Promise<void>}
 *         Promise to keep
 */
function jsDoc() {

    const log = require('./lib/log');

    return new Promise(resolve => {

        log.success('Created API documentation');

        if (!process.argv.includes('jsdoc-watch')) {
            log.message(
                'Hint: Run the `jsdoc-watch` task to start the JSDoc server.'
            );
        }

        resolve();
    });
}

require('./jsdoc-clean');
require('./jsdoc-classes');
require('./jsdoc-namespace');
require('./jsdoc-options');

gulp.task(
    'jsdoc',
    gulp.series(
        'jsdoc-clean', 'jsdoc-classes', 'jsdoc-namespace', 'jsdoc-options', jsDoc
    )
);
