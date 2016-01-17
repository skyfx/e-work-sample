'use strict';
describe('textItemVM', function() {

    var vm = require('./textItemVM');

    beforeEach(function() {
        vm.init();
    });

    describe('init',  function() {
        it('should reset state on init', function() {

            vm.init();

        });
    });

    describe('add', function() {

        beforeEach(function() {
            vm.resetNewItem();
            vm.results.length = 0;
        });

        it('should add', function() {

            vm.newItem.title('my title');
            vm.newItem.body('my body');

            vm.add();

            expect(vm.results.length).toBe(1);
        });

        it('should not add then text item is empty', function() {

            vm.add();

            expect(vm.results.length).toBe(0);
        });
    });
});
