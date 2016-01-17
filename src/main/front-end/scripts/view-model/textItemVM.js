'use strict';
var m = require('mithril');
var TextItem = require('../model/TextItem');
var TextItemList = require('../model/TextItemList');

var vm = {
    results: new TextItemList(),
    searchText: m.prop(''),
    newItem: new TextItem()
};

vm.init = function() {
    //noting yet
};

vm.search = function() {
    console.log(vm.searchText());
};

vm.resetNewItem = function() {
    vm.newItem = new TextItem();
};

vm.add = function() {
    if (vm.newItem.title() && vm.newItem.body()) {
        vm.results.push(vm.newItem);
        m.route('/');
    }
};

module.exports = vm;
