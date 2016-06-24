'use strict';
/* eslint-disable */
angular.module('house-lending.common.services')
  .constant('RuntimeConfiguration',
    // The content below will be replaced by the build script according to the
    // json defined in house-lending-config.<NODE_ENV>.json
    //START_CONFIG_BLOCK
{"logging":{"debug":true},"urls":[{"url":"/api/authenticate","target":"http://localhost:9000/api/authenticate"},{"url":"/api/advertisements","target":"http://localhost:9000/api/advertisements"}]}
    //END_CONFIG_BLOCK
);
/* eslint-enable */


