'use strict';
var textItemVM = require('../view-model/textItemVM');

var controller = function() {
    textItemVM.search(textItemVM.searchText());
    return textItemVM;
};

module.exports = controller;
