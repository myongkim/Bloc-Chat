(function() {
  function Message($firebaseArray, $cookies) {
    var Message={};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    var getMessagesByRoomId = function(roomId){
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    var getTime = function(){
      var today = new Date();
      var date = (today.getMonth()+1)+"/"+ today.getDate()+ "/" + today.getFullYear();
      var time = today.getHours()+":"+ today.getMinutes()+":"+today.getSeconds();
    };

    var sendMessage = function(newMessage, roomId){
        var newMessageKey = firebase.database().ref().child("messages").push().key;
        var sendRef = ref + newMessageKey;

        return {
            send: function(newMessage, roomId){
              var message = {
                    content: newMessage,
                    roomId: roomId,
                    sentAt: getTime(),
                    username: $cookies.get('blocChatCurrentUser')
              }
              newMessageKey.$add(message);
            }
        };
    }
    console.log(sendMessage);
    return {
        Message,
        all: messages,
        getMessagesByRoomId: getMessagesByRoomId,
        sendMessage: sendMessage,
    };

  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray','$cookies', Message]);
})();
