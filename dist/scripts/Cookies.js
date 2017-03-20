(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || currentUser === "") {

      var modalInstance = $uibModal.open({
          templateUrl: '/templates/user-modal.html',
          controller: function($scope, $uibModalInstance){
              $scope.create = function() {
                if ($scope.newUser !== undefined && $scope.newUer !=""){
                  $uibModalInstance.close($scope.newUser);
                } else {
                  alert ("Error: plesae provide with valide username");
                }
              };
          },

    size: 'md',
  });
    modalInstance.result.then(function(data){
        $cookies.put('blockChatCurrentUser', data);
  });
}
}
  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
