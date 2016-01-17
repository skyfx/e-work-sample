'use strict';
var m = require('mithril');
var TextItem = require('../model/TextItem');
var TextItemList = require('../model/TextItemList');
var _ = require('lodash');

var vm = {
    items: new TextItemList(),
    searchText: m.prop(''),
    searchResult: new TextItemList(),
    newItem: new TextItem()
};

vm.init = function() {
    //noting yet
};

vm.search = function(searchText) {

    vm.searchText(searchText);

    vm.searchResult = _(vm.items)
        .filter(function(item) {

            if (!vm.searchText()) return true;

            var searchExp = new RegExp(vm.searchText(), 'i');
            var titleFound = item.title().search(searchExp) >= 0;
            var bodyFound = item.body().search(searchExp) >= 0;

            return titleFound || bodyFound;
        })
        .value();
};

vm.resetNewItem = function() {
    vm.newItem = new TextItem();
};

vm.add = function() {
    if (vm.newItem.title() && vm.newItem.body()) {
        vm.items.push(vm.newItem);
        m.route('/');
    }
};

module.exports = vm;
