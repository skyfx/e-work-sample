'use strict';
var m = require('mithril');
var TextItem = require('../model/TextItem');
var textItemVM = require('../view-model/textItemVM');

var controller = function() {

    m.request({
        method: 'GET',
        url: 'https://e-work-sample.herokuapp.com/rest/text-items',
        type: TextItem
    }).then(function(result) {
        textItemVM.items = result;
        textItemVM.search(textItemVM.searchText());
    });

    return textItemVM;
};

module.exports = controller;
