'use strict';
var TextItem = require('../model/TextItem');

describe('textItemVM', function() {

    var vm = require('./textItemVM');

    beforeEach(function() {
        vm.init();
        vm.items.length = 0;
    });

    describe('init',  function() {
        it('should reset state on init', function() {

            vm.init();

        });
    });

    describe('add', function() {

        beforeEach(function() {
            vm.resetNewItem();
        });

        it('should add', function() {

            vm.newItem.title('my title');
            vm.newItem.body('my body');

            vm.add();

            expect(vm.items.length).toBe(1);
        });

        it('should not add then text item is empty', function() {

            vm.add();

            expect(vm.items.length).toBe(0);
        });
    });

    describe('search', function() {

        beforeEach(function() {
            vm.items.push(new TextItem({ title: 'dummyTitle1', body: 'dummyBody1' }));
            vm.items.push(new TextItem({ title: 'titleMatch', body: 'dummyBody2' }));
            vm.items.push(new TextItem({ title: 'dummyTitle2', body: 'bodyMatch' }));
        });

        it('should return all items when the searchText is empty', function() {

            vm.search('');

            expect(vm.searchResult.length).toBe(3);
        });

        it('should return one item where the title matches', function() {

            vm.search('titleMatch');

            expect(vm.searchResult.length).toBe(1);
        });

        it('should return one item where the body matches', function() {

            vm.search('bodyMatch');

            expect(vm.searchResult.length).toBe(1);
        });

        it('should return two items, one for title and one for body', function() {

            vm.search('Match');

            expect(vm.searchResult.length).toBe(2);
        });

        it('should return case insensitive results', function() {

            vm.search('match');

            expect(vm.searchResult.length).toBe(2);
        });
    });
});
