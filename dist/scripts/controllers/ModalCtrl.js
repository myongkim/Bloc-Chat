(function() {
    function ModalCtrl($scope, $uibModal, Room) {
        $scope.rooms = Room;

        this.open = function() {
          $scope.modalInstance = $uibModal.open({
              animation: true,
              templateUrl: '/templates/modal.html',
              controller: 'ModalCtrl',
              controllerAs: 'modalCtrl',
          });

          return $scope.modalInstance
        };

        this.createRoom = function() {
            // $scope.rooms.rooms.$add({
            //   name: $scope.newRoomName
            // });

            $uibModal.close();
        };

        this.dismiss = function() {
            $uibModal.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal', 'Room', ModalCtrl]);
})();