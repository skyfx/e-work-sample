'use strict';
var m = require('mithril');
var todoVM = require('../view-model/toDoVM');

function view() {

    return m('main', [
        m('p', 'hello world'),
        m('input', { onchange: m.withAttr('value', todoVM.description), value: todoVM.description() }),
        m('button', { onclick: todoVM.add }, 'Add'),
        m('table', [
            todoVM.list.map(function(task) {
                return m('tr', [
                    m('td', [
                        m('input[type=checkbox]', { onclick: m.withAttr('checked', task.done), checked: task.done() })
                    ]),
                    m('td', { style: { textDecoration: task.done() ? 'line-through' : 'none' } }, task.description())
                ]);
            })
        ])
    ]);
}

module.exports = view;
