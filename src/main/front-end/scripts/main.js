'use strict';
var m = require('mithril');
var searchComponent = require('./component/searchComponent');
var addComponent = require('./component/addComponent');
var editComponent = require('./component/editComponent');

m.route(document.body, '/', {
    '/': searchComponent,
    '/add': addComponent,
    '/edit/:itemId': editComponent
});
