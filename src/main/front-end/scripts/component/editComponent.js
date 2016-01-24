'use strict';
var m  = require('mithril');
var editController = require('../controller/editController');
var editView = require('../view/editView');

var component = {
    controller: editController,
    view: editView
};

module.exports = m.component(component, { title: 'Edit' });
