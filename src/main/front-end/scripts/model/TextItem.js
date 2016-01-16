'use strict';
var m = require('mithril');

function TextItem(data) {
    this.title = m.prop(data.title);
    this.body = m.prop(data.body);
}

module.exports = TextItem;
