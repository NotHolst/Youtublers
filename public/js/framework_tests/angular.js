var app = angular.module('app', []);
app.controller('controller', function($scope, $timeout) {
    $scope.items = [];

    $scope.testAdd10000Items = ()=>{
        for (let index = 0; index < 10000; index++) {
            $scope.items.push({
                id: index,
                name: 'test'
            });
        }
    };


});