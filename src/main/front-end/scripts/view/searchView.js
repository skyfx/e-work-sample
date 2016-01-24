'use strict';
var m = require('mithril');

function view(vm) {

    return m('main', [
        m('h1', 'My texts'),
        searchBox(vm),
        m('ul', [
            vm.searchResult.map(function(item) {
                return m('li', { key: item.id }, [
                    m('a[href="/edit/' + item.id + '"]', { config: m.route }, item.title())
                ]);
            })
        ]),
        m('a[href="/add"]', { config: m.route }, 'Add')
    ]);
}

function searchBox(vm) {
    return m('input', {
        onchange: m.withAttr('value', vm.search),
        value: vm.searchText(),
        type: 'search',
        placeholder: 'Search'
    });
}

module.exports = view;
