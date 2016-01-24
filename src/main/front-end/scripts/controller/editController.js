'use strict';
var m = require('mithril');
var textItemVM = require('../view-model/textItemVM');

var controller = function() {
    textItemVM.selectCurrentItem(m.route.param('itemId'));
    return textItemVM;
};

module.exports = controller;
