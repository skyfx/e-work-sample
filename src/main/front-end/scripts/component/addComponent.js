'use strict';
var m  = require('mithril');
var addController = require('../controller/addController');
var editView = require('../view/editView');

var component = {
    controller: addController,
    view: editView
};

module.exports = m.component(component, { title: 'New' });
