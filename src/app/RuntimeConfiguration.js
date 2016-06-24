'use strict';
/*jshint -W109 */ //Use double quotes in string
angular.module('house-lending.common.services')
  .constant('RuntimeConfiguration',
    // The content below will be replaced by the build script according to the
    // json defined in house-lending-config.<NODE_ENV>.json
    //START_CONFIG_BLOCK
{"logging":{"debug":true},"urls":[{"url":"/api/authenticate","target":"http://localhost:3000/api/authenticate"}]}
    //END_CONFIG_BLOCK
);
