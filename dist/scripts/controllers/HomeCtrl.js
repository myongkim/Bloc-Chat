(function() {
    function HomeCtrl(Room, Message, $scope) {
        rooms=Room.all;
        this.rooms = rooms;

        rooms.$loaded().then(function(rooms) {
            var key1 = '<KEY_FIRST_ROOM';
            room = rooms.$getRecord(key1);

            $scope.currentRoom = room;
            if ($scope.currentRoom != null) {
                $scope.messages = Message.getMessagesByRoomId($scope.currentRoom.$id);
            }
        });

        this.selectRoom = function(room){
            $scope.currentRoom = room;
            if ($scope.currentRoom != null) {
                $scope.messages = Message.getMessagesByRoomId($scope.currentRoom.$id);
            }
        };
    }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room','Message', '$scope',HomeCtrl]);
})();
