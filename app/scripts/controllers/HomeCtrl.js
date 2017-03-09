
(function() {
    function HomeCtrl($scope,Room, Message) {


        rooms=Room.all;
        this.rooms = rooms;

        var chatapp = this;
        chatapp.title = "Chat Rooms";
        chatapp.allRooms = Room.all;
        chatapp.currentRoom = null;
        chatapp.messages = null;
        chatapp.hello = "Hello";

        chatapp.selectRoom = function(room){
            chatapp.currentRoom = room;
            chatapp.messages = Message.getMessagesByRoomId(chatapp.currentRoom.$id);
        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope','Room', 'Message', HomeCtrl]);
})();
