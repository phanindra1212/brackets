/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $ */

define(function (require, exports, module) {
    'use strict';

    console.log("and a file that foo depends on!");

    exports.bar = function bar() {
        console.log("in bar in secondary!");
        setTimeout(function () { require("main").bar(); }, 300);
    };

});
