(function() {
	function ModalCtrl($scope, $uibModal,Room){

		$scope.rooms = Room;
		$scope.currentRoom = null;


		$scope.open = function(){
				$uibModal.open({
							animation: this.animationsEnabled,
							templateUrl:'roomsModal.html',
							controller: 'ModalInstanceCtrl'
							controlloerAs: 'modal'
				})
		};


		return $scope.rooms;
	}


	angular
		.module('blocChat')
		.controller('ModalCtrl', ['$scope', '$uibModal', 'Room', ModalCtrl]);
})();
