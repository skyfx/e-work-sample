'use strict';
var textItemVM = require('../view-model/textItemVM');
var m = require('mithril');

var controller = function() {

    textItemVM.selectCurrentItem(m.route.param('itemId'));
};

module.exports = controller;
