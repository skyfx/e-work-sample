'use strict';
var m  = require('mithril');
var addController = require('../controller/addController');
var addView = require('../view/addView');

var component = {
    controller: addController,
    view: addView
};

module.exports = m.component(component, { title: 'New' });
