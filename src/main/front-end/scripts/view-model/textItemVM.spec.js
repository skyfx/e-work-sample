'use strict';
var TextItem = require('../model/TextItem');

describe('textItemVM', function() {

    var vm = require('./textItemVM');

    beforeEach(function() {
        vm.items.length = 0;
    });

    describe('add', function() {

        beforeEach(function() {
            vm.resetNewItem();
        });

        it('should add', function() {

            var expectedTitle = 'my title';
            var expectedBody = 'my body';

            vm.newItem.title(expectedTitle);
            vm.newItem.body(expectedBody);

            vm.add();

            expect(vm.items.length).toBe(1);
            expect(vm.items[0].title()).toBe(expectedTitle);
            expect(vm.items[0].body()).toBe(expectedBody);
        });

        it('should not add then text item is empty', function() {

            vm.add();

            expect(vm.items.length).toBe(0);
        });

        it('should not add an existing item', function() {

            var item = new TextItem({ title: 'Some title', body: 'Some body' });
            vm.items.push(item);

            vm.newItem = item;

            vm.add();

            expect(vm.items.length).toBe(1);
        });

        it('should update an existing item', function() {

            var item = new TextItem({ title: 'Some title', body: 'Some body' });
            vm.items.push(item);

            var expectedTitle = 'new title';
            var expectedBody = 'new body';

            var updatedItem = new TextItem();
            updatedItem.id = item.id;
            updatedItem.title(expectedTitle);
            updatedItem.body(expectedBody);

            vm.newItem = updatedItem;

            vm.add();

            expect(vm.items.length).toBe(1);
            expect(vm.items[0].title()).toBe(expectedTitle);
            expect(vm.items[0].body()).toBe(expectedBody);
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

    describe('selectCurrentItem', function() {

        it('should select the current item by id', function() {
            var item1 = new TextItem();
            var item2 = new TextItem();

            vm.items.push(item1, item2);

            vm.selectCurrentItem(item2.id);

            expect(vm.newItem.id).toBe(item2.id);
        });
    });
});
