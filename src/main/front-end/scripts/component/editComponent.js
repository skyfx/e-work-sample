'use strict';
var m  = require('mithril');
var editController = require('../controller/editController');
var addView = require('../view/addView');

var component = {
    controller: editController,
    view: addView
};

module.exports = m.component(component, { title: 'Edit' });
