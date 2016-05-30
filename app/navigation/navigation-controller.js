(function(){
  angular.module('SMNetwork')

  //Login controller
  .controller('NavigationController', ['$scope', '$http', '$state',
    function($scope, $http, $state){
      if (localStorage['User-Data']){
        $scope.loggedIn = true;
      } else {
        $scope.loggedIn = false;
      }

      $scope.logUserIn = function (){
        $http.post('api/user/login', $scope.login).success(function(res){
          localStorage.setItem('User-Data', JSON.stringify(res));
          $scope.loggedIn = true;
        }).error(function(error){
          console.error(error);
        });
      }
    }]);

}());
