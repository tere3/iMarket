angular.module('loginModule', ['ionic', 'ngCordova', 'ngCordovaOauth'])

.controller('loginController', function($scope, $state, $cordovaOauth, $location){
	$scope.init= function(){
	$state.go('tabs.task');
	}

	$scope.login = function(){
	    $cordovaOauth.facebook("230023887411447", ["email", "read_stream", "user_website", "user_location", "user_relationships"]).then(function(result){
	      $window.localStorage.accessToken = result.access_token;
	      $location.path("/login/profile.html");
	    }, function(error){
	      alert("There was a problem singing in! See the console for logs");
	      console.log(error);
	    });
   	 }
})

.controller('profileCtrl', function($scope, $http, $window, $location){
  $scope.init = function(){
    if($window.localStorage.hasOwnProperty("access_token") === true){
      $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: $window.localStorage.accessToken, fields: "id,name,gender,location,website,picture,relationship_status", format: "jason"}}).then(function(result){ $scope.profileData = result.data;
      }, function(error){ 
        alert("There was a problem getting your profile. Check the logs for details."); console.log(error);
      });
    }else{
      alert("Not signed in");
      $location.path("/login");
    }
  }
})

.controller('registerController', function(){

})