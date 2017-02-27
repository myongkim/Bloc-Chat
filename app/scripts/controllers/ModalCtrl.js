(function() {
    function ModalCtrl($scope, $uibModal, $uibModalStack, Room) {
        this.room = Room;

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
            // Call Room.addRoom
            this.room.create(this.name);

            // Dismiss modal
            this.dismiss()
        };

        this.dismiss = function() {
            var top = $uibModalStack.getTop();
            if (top) {
                $uibModalStack.dismiss(top.key);
            }
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal', '$uibModalStack', 'Room', ModalCtrl]);
})();
