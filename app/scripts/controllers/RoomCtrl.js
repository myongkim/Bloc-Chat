(function() {
    function RoomCtrl() {
        $scope.rooms = Room;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
