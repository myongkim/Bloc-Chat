(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
    }


    this.open = function() {
    $uibModal.open({
        templateUrl: 'roomsModal.html',
        controller: 'ModalInstanceCtrl'

});
    return this.rooms;

}
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
