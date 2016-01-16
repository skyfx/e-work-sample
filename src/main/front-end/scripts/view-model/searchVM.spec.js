'use strict';
describe('searchVM', function() {

    var searchVM = require('./searchVM');

    it('should init', function() {
        searchVM.init();

        expect(searchVM.results.length).toBe(0);
        expect(searchVM.searchText()).toBe('');
    });

    it('should add', function() {
        searchVM.init();

        searchVM.add();
        expect(searchVM.results.length).toBe(1);
    });

    it('should search',  function() {
        var expected = 'search text';
        searchVM.init();

        searchVM.search(expected);
        expect(searchVM.searchText()).toBe(expected);
    });
});
