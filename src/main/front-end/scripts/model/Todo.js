'use strict';
var m = require('mithril');

var Todo = function(data) {
    this.description = m.prop(data.description);
    this.done = m.prop(false);
};

module.exports = Todo;
