(function() {
    function HomeCtrl($scope, Room) {
        this.rooms = Room;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();
