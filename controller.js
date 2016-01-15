var myApp = angular.module('myApp', []);

myApp.controller('appController', ['$scope', '$http', '$q', function ($scope, $http, $q) {

    $scope.stuffs = [];

    $scope.getData = function() {
        var firstCallData = $http.get('data.json');
        var secondCallData = $http.get('more.data.json');

        $q.all([firstCallData, secondCallData])
            .then(function (response) {
                $scope.stuffs.push(response.data);
            });
    };

}]);