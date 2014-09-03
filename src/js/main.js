require([
  "angular",
  "share",
], function(Share) {

  var app = angular.module("seahawks-prediction", []);

  app.controller("seahawksTable", ["$scope", function($scope) {

    $scope.seahawks = seahawksData;
    
    $scope.guessers = ["condotta", "jenks", "brewer", "stone", "celebrity", "fan"];


  }]);

  angular.bootstrap(document.body, ["seahawks-prediction"]);

  var share = new Share(".share", {
    ui: {
      flyout: "bottom left"
    }
  });

});