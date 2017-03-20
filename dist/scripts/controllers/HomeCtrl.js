
(function() {
    function HomeCtrl($scope,Room, Message, $cookies, $uibModal) {


        rooms=Room.all;
        this.rooms = rooms;

        var chatapp = this;
        chatapp.title = "Chat Rooms";
        chatapp.allRooms = Room.all;
        chatapp.currentRoom = null;
        chatapp.hello = "Hello";
        

        chatapp.selectRoom = function(room){
            chatapp.currentRoom = room;
            chatapp.messages = Message.getMessagesByRoomId(chatapp.currentRoom.$id);
        };


        var current = function(){
            return $cookies.get('blockChatCurrentUser');
        };

        chatapp.currentUser = current();

        chatapp.newUser = function(){
            var modalInstnce = $uibModal.open({
                templateUrl:'/templates/user-modal.html',
                controller: function($scope, $uibModalInstance){
                            $scope.create = function(){
                              if ($scope.newUser !== undefined && $scope.newUser !=""){
                            $uibModalInstance.close($scope.newUser);
                          } else {
                            alert("Error: Please provide a valide username");
                          }
                        };
                      },
                    size: 'md',
                });

              modalInstance.result.then(function(data){
                chatapp.currentUser = data;
                $cookies.put('blocChatCurrentUser', data);
              });
            };

            chatapp.resetUser = function(){
              chatapp.currentUser = null;
              $cookies.put('blocChatCurrentUser', "");
            };
}
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope','Room', 'Message','$cookies','$uibModal', HomeCtrl]);
})();
