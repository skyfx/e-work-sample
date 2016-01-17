'use strict';
var m = require('mithril');
var textItemVM = require('../view-model/textItemVM');

function view() {

    return m('main', [
        m('h1', 'Add text'),
        m('input', {
            onchange: m.withAttr('value', textItemVM.newItem.title),
            value: textItemVM.newItem.title(),
            type: 'text',
            placeholder: 'Enter title'
        }),
        m('textarea', {
            onchange: m.withAttr('value', textItemVM.newItem.body),
            value: textItemVM.newItem.body(),
            type: 'textarea',
            placeholder: 'Enter text'
        }),
        m('button', { onclick: textItemVM.add }, 'Save')
    ]);
}

module.exports = view;
