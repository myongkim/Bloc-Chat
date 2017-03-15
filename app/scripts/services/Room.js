(function() {
  function Room($firebaseArray) {

    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    var genRoom = function(){
        return $firebaseArray(ref.orderByChild('name').equalTo('General'));

    };

    return {
      all: rooms,
      create: function(newRoomName){
        rooms.$add(newRoomName);
      },
      general: genRoom
    };

  }

  angular
    .module('blocChat')
    .service('Room', ['$firebaseArray', Room]);
})();
