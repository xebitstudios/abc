// describe('ListCtrl', function(){
//     // Mock the module myApp
//     beforeEach(module('ssceexamsuiApp'));

//     var scope, ctrl;

//     beforeEach(inject(function($controller, $rootScope){
//         // To instantiate a new instance of a scope from the $rootScope with the $new() method
//         scope = $rootScope.$new();
//         // Create the new instance of the controller
//         ctrl = $controller('ListCtrl', {'$scope' : scope});
//     }));

//     // We'll test the two features of our controller
//     // 1. The items data is populated on load
//     // 2. The 'getDoneClass' method returns object based on item argument

//     it('should have items available on load', function() {
//         expect(scope.items).toEqual([
//             {'id': 1, 'label': 'First', 'done': true},
//             {'id': 2, 'label': 'Second', 'done': false}
//         ]);
//         expect(scope.items.length).toBe(2);
//         scope.items.pop();
//         expect(scope.items.length).toBe(1);
//         expect(scope.items.length).toBe(1);
//     });

//     it('should have highlight items based on state', function(){
//         var item = {'id': 1, 'label': 'First', 'done': true};

//         var actualClass = scope.getDoneClass(item);
//         expect(actualClass.finished).toBeTruthy();
//         expect(actualClass.unfinished).toBeFalsy();

//         item.done = false;
//         actualClass = scope.getDoneClass(item);
//         expect(actualClass.finished).toBeFalsy();
//         expect(actualClass.unfinished).toBeTruthy();
//     });

// });