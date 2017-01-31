(function() {
  function Room($scope, $firebaseArray) {
    var firebaseRef = new Firebase("https://bloc-chat-5a794.firebaseio.com");

        $scope.rooms = $firebaseArray(firebaseRef.child('rooms'));

        $scope.addRoom = function() {
            $scope.rooms.$add({
                name: $scope.newRoomName
            });
        };

        return {
            rooms
        };
    }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
