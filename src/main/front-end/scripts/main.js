'use strict';
var m = require('mithril');
var searchComponent = require('./component/searchComponent');
var addComponent = require('./component/addComponent');

m.route(document.body, '/', {
    '/': searchComponent,
    '/add': addComponent
});
