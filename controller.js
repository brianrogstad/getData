var myApp = angular.module('myApp', []);

myApp.controller('appController', ['$scope', '$http', '$q', function ($scope, $http, $q) {

    $scope.objects = [];

    $scope.getData = function() {
        var firstCallData = $http.get('data.json');
        var secondCallData = $http.get('more.data.json');

        $q.all([firstCallData, secondCallData])
            .then(function (response) {
                response.forEach(function (item) {
                  item.data.forEach(function (object) {
                    $scope.objects.push(object);
                });
            });
        });
    };
}]);
