'use strict';
var m = require('mithril');
var _ = require('lodash');
var uuid = require('node-uuid');

function TextItem(data) {
    this.id = uuid.v4();
    this.title = m.prop(_.result(data, 'title', ''));
    this.body = m.prop(_.result(data, 'body', ''));
}

module.exports = TextItem;
