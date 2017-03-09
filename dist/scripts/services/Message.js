(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    var getMessagesByRoomId = function(roomId){
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    return {
        getMessagesByRoomId: getMessagesByRoomId
    };

  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
