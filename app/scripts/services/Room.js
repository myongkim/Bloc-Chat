(function() {
  function Room($firebaseArray) {

    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    addRoom = function(newRoomName){
      rooms.$add({
          name: newRoomName
      });
    };

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .service('Room', ['$firebaseArray', Room]);
})();
