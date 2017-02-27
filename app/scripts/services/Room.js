(function() {
  function Room($firebaseArray) {

    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    return {
      all: rooms,
      create: function(newRoomName){
        rooms.$add(newRoomName);
      }
    };
  }

  angular
    .module('blocChat')
    .service('Room', ['$firebaseArray', Room]);
})();
