function AlbumCtrl($scope,$timeout) {
    $scope.counter = 180;
    $scope.onTimeout = function(){
      $scope.counter--;
      mytimeout = $timeout($scope.onTimeout,1000);
      if($scope.counter == 150){console.log("first change");}
      if($scope.counter == 120){console.log("second change");}
      if($scope.counter == 90){console.log("third change");}
      if($scope.counter == 60){console.log("turn yellow");}
      if($scope.counter == 30){console.log("turn red");}
      if($scope.counter == 0){console.log("go out ultraman");}
      if($scope.counter == -3){console.log("gozilla get ramen");}
    }
    var mytimeout = $timeout($scope.onTimeout,1000);
}

function ImageArea($scope) {
  $scope.gozillaCounter = 0;
  $scope.ultramanCounter = 0;
  $scope.gozillaCountUp = function(){
    $scope.gozillaCounter++
    console.log($scope.gozillaCounter);
  }
  $scope.ultramanCountUp = function(){
    $scope.gozillaCounter++
    console.log($scope.gozillaCounter);
  }
}
