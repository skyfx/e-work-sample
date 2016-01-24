'use strict';
var m = require('mithril');

function view(vm, data) {

    return m('main', [
        m('h1', data.title),
        m('input', {
            onchange: m.withAttr('value', vm.newItem.title),
            value: vm.newItem.title(),
            type: 'text',
            placeholder: 'Enter title'
        }),
        m('textarea', {
            onchange: m.withAttr('value', vm.newItem.body),
            value: vm.newItem.body(),
            type: 'textarea',
            placeholder: 'Enter text'
        }),
        m('button', { onclick: vm.add }, 'Save')
    ]);
}

module.exports = view;
