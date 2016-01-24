'use strict';
var textItemVM = require('../view-model/textItemVM');

var controller = function() {
    textItemVM.resetNewItem();
    return textItemVM;
};

module.exports = controller;
