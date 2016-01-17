'use strict';
var m = require('mithril');
var textItemVM = require('../view-model/textItemVM');

function view() {

    return m('main', [
        m('h1', 'My texts'),
        searchBox(),
        m('ul', [
            textItemVM.searchResult.map(function(text) {
                return m('li', text.title());
            })
        ]),
        m('a[href=\'/add\']', { config: m.route }, 'Add')
    ]);
}

function searchBox() {
    return m('input', {
        onchange: m.withAttr('value', textItemVM.search),
        value: textItemVM.searchText(),
        type: 'search',
        placeholder: 'Search'
    });
}

module.exports = view;
