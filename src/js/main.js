require([
  "share",
  "angular"
], function(Share) {

  var app = angular.module("seahawks-prediction", []);

  app.controller("seahawksTable", ["$scope", function($scope) {

    //preprocess for multiple winners
    window.seahawksData.forEach(function(row) {
      row.winner = row.winner.split(",");
    });

    $scope.seahawks = window.seahawksData;
    
    $scope.guessers = ["condotta", "jenks", "brewer", "stone", "celebrity", "fan"];

  }]);

  angular.bootstrap(document.body, ["seahawks-prediction"]);

  var share = new Share(".share", {
    ui: {
      flyout: "bottom left"
    }
  });

});