(function() {
    function ModalInstanceCtrl($scope, $uibModalInstance, Room) {
        $scope.rooms = Room;

        $scope.create = function() {
            $scope.rooms.rooms.$add({
              name: $scope.newRoomName
            });

            $uibModalInstance.close();
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
