var homeCtr = angular.module('HomeModule',[]);

homeCtr.controller('HomeController',['$scope', 'RestService', function($scope, RestService){

    $scope.greeting = "Hello!"
    $scope.user = {
      'name': '',
      'email': ''
    }

    $scope.init = function(){
      console.log('HomeController: INIT');
    }

    $scope.submit = function(){
      console.log('submit: ' +JSON.stringify($scope.user));

      if($scope.user.name.length == 0){
        alert("Please submit your NAME");
        return;
      }

      if($scope.user.email.length == 0){
        alert("Please submit your EMAIL");
        return;
      }

      var params = {resource:'signup'};

      RestService.post(params, $scope.user, function(response){
          console.log(JSON.stringify(response))
      });

      // RestService.query(params, function(response){
      //     console.log(JSON.stringify(response))

      // });

    }

}]);