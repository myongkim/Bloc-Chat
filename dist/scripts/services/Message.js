(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    var getMessagesByRoomId = function(roomId){
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    var sendMessage = function(newMessage, roomId, sent, user){
        var newMessageKey = firebase.database().ref().child('messages').push().key;
        var sendRef = firebase.database().ref().child('messages/' + newMessageKey);
        sendRef.update({
            content: newMessage,
            roomId: roomId,
            sentAt: sent,
            username: user
        });
    }

    return {
        all: messages,
        getMessagesByRoomId: getMessagesByRoomId,
        send: sendMessage,
    };

  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
