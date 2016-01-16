'use strict';
var m = require('mithril');
var todoVM = require('../view-model/searchVM');

function view() {

    return m('main', [
        m('h1', 'My texts'),
        searchBox(),
        m('ul', [
            todoVM.results.map(function(text) {
                return m('li', text.title());
            })
        ]),
        m('button', { onclick: todoVM.add }, 'Add')
    ]);
}

function searchBox() {
    return m('input', {
        onchange: m.withAttr('value', todoVM.search),
        value: todoVM.searchText(),
        type: 'search',
        placeholder: 'Search'
    });
}

module.exports = view;
