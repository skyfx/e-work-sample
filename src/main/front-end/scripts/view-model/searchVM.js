'use strict';
var m = require('mithril');
var TextItem = require('../model/TextItem');
var TextItemList = require('../model/TextItemList');

var vm = {};
vm.init = function() {

    vm.results = new TextItemList();

    vm.searchText = m.prop('');

    vm.search = function(searchText) {
        vm.searchText(searchText);
        console.log(vm.searchText());
    };

    vm.add = function() {
        vm.results.push(new TextItem({ title: 'dummy' }));
    };
};

module.exports = vm;
