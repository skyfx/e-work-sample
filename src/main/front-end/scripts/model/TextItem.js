'use strict';
var m = require('mithril');
var _ = require('lodash');

function TextItem(data) {
    this.title = m.prop(_.result(data, 'title', ''));
    this.body = m.prop(_.result(data, 'body', ''));
}

module.exports = TextItem;
