var myApp = angular.module('myApp', []);

myApp.controller('appController', ['$scope', '$http', '$q', function ($scope, $http, $q) {

    $scope.objects = [];

    $scope.getData = function() {
        
        var firstCallData = $http.get('data.json');
        var secondCallData = $http.get('more.data.json');

        $q.all([firstCallData, secondCallData])
            .then(function (response) {
                console.log(response);
                response.forEach(function (item) {
                  console.log(item.data);
                  item.data.forEach(function (object) {
                    console.log(object);
                    $scope.objects.push(object);
                });
            });
                console.log($scope.objects);
            });
    };
}]);
