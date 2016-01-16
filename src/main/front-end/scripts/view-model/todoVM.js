'use strict';
var m = require('mithril');
var Todo = require('../model/Todo');
var TodoList = require('../model/TodoList');

var vm = (function() {
    var vm = {};
    vm.init = function() {

        vm.list = new TodoList();

        vm.description = m.prop('');

        vm.add = function() {
            if (vm.description()) {
                vm.list.push(new Todo({ description: vm.description() }));
                vm.description('');
            }
        };
    };

    return vm;
}());

module.exports = vm;
