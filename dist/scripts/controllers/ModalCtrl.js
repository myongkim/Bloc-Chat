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

          this.room.create(this.name);
          // call Room.addRoom

        this.dismiss()
        // Dissmiss Modal
        };

        this.dismiss = function() {
          var top = $uibModalStack.getTop();
          if (top){
            $uibModalStack.dismiss(top.key);
          }
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal','$uibModalStack', 'Room', ModalCtrl]);
})();
