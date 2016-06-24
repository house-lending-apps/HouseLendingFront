'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var fs = require('fs');
var replace = require('gulp-replace');
var path = require('path');
var rename = require('gulp-rename');
var runsequence = require('run-sequence');
var config = require('../config/build.config.js');


/*
 Takes the contents in dbw-config.<NODE_ENV>.json and injects them into
 the RuntimeConfiguration.template.js to be used as a constant.
 */

var replaceSection = /\/\/START_CONFIG_BLOCK([\s\S]*?)\/\/END_CONFIG_BLOCK/g;

gulp.task('inject-config', function (cb) {
    runsequence('copy-runtimeconfig-template', 'inject-config-data', cb);
});

gulp.task('copy-runtimeconfig-template', function () {
    return gulp.src(config.inject.injectedFileTemplate).pipe(rename(config.inject.injectedFileName)).pipe(gulp.dest(config.inject.injectedFilePath));
});

gulp.task('inject-config-data', function () {
    // These logic checks to see whether injectingFilePath together with your chosen environment variable form an exist file pahth
    var defaultEnv = 'local';
    var currentEnv = process.env.NODE_ENV || argv.env || defaultEnv;
    var _injectingFilePath = path.dirname(config.inject.injectingFilePath) + '/' + path.basename(config.inject.injectingFilePath).replace('.', '.' + currentEnv + '.');
    var injectNewContent = function (tobeReplacedContent) {
        var newContent = tobeReplacedContent.split('\n');
        newContent[1] = JSON.stringify(JSON.parse(fs.readFileSync(_injectingFilePath)));
        newContent.concat('\n\n\n');
        return newContent.join('\n');
    };



    if (!fs.existsSync(_injectingFilePath)) {
        console.log('Config for [' + currentEnv + '] not found. Using ' + defaultEnv);
        _injectingFilePath = config.inject.injectingFilePath;
    }

    return gulp.src(config.inject.injectedFilePath + config.inject.injectedFileName)
        .pipe(replace(replaceSection, injectNewContent))
        .pipe(gulp.dest(path.dirname(config.inject.injectedFilePath + config.inject.injectedFileName)));
});
