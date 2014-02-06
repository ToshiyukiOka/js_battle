function AlbumCtrl($scope,$timeout) {
    $scope.counter = 180;
    $scope.onTimeout = function(){
      $scope.counter--;
      mytimeout = $timeout($scope.onTimeout,1000);
      if($scope.counter == 170){alert("test");}
    }
    var mytimeout = $timeout($scope.onTimeout,1000);
    $scope.stop = function(){
      $timeout.cancel(mytimeout);
    }

}
