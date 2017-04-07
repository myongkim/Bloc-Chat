
(function() {
    function HomeCtrl($scope,Room, Message, $cookies, $uibModal) {


        rooms = Room.all;
        this.rooms=rooms;

        var chatapp ={};



        chatapp.title = "Chat Rooms";

        chatapp.allRooms = Room.all;
        console.log(chatapp.allRooms);
        chatapp.currentRoom = {name:"General",
                               $id:"-KgMdeMPDoodPX5UwBkW",
                               roomname:"Room1"
                             };
        chatapp.currentTime = null;



        chatapp.selectRoom = function(room){
            chatapp.currentRoom = room;
            chatapp.messages = Message.getMessagesByRoomId(chatapp.currentRoom.$id);
        };


        var current = function(){
            return $cookies.get('blockChatCurrentUser');
        };

        chatapp.currentUser = current();

        chatapp.newUser = function(){
            var modalInstance = $uibModal.open({
                templateUrl:'/templates/user-modal.html',
                controller: function($scope, $uibModalInstance){
                              $scope.create = function() {
                                if ($scope.newUser !== undefined && $scope.newUser !="") {
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

              // reset the username to ""
        chatapp.resetUser = function(){
              chatapp.currentUser = null;
              $cookies.put('blocChatCurrentUser', "");
        };

        var getTime = function(){
          var today = new Date();
          var date = (today.getMonth()+1)+"/"+ today.getDate()+ "/" + today.getFullYear();
          var time = today.getHours()+":"+ today.getMinutes()+":"+today.getSeconds();
        };


        chatapp.sendMessage = function(){
          chatapp.currentTime= getTime();
          //(newMessage, roomId, sent, user)
          Message.sendMessage($scope.newMessage, chatapp.currentRoom.$id, chatapp.currentTime, chatapp.currentUser);
          $scope.newMessage=null;
        };


        chatapp.logger=function(message){
          console.log(message);

        }
        $scope.chatapp=chatapp;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope','Room', 'Message','$cookies','$uibModal', HomeCtrl]);
})();
