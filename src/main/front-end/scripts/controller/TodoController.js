'use strict';
var todoVM = require('../view-model/toDoVM');

var controller = function() {
    todoVM.init();
};

module.exports = controller;
