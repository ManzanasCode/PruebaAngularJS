var MAIN_APP = angular.module("MAIN_APP", []);


MAIN_APP.controller('MainController', function($scope,$http) {

    $scope.$watch('usernameGithub', function() {
        console.log("$scope.usernameGithub: ", $scope.usernameGithub)
        
        $http({
            method:"get",
            url:"https://api.github.com/users/"+$scope.usernameGithub+"/repos"
        })
        .then(function(response){
            $scope.gitHubResponse = response.data;
            $scope.reposFound = response.data.length;
            console.log(response.data)
        });

    }, true);
    
});