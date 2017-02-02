(function() {
  function Room($firebaseArray) {
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);

		/* this is to test whether an array with rooms shows up in the ng-repeat.*/
		if (rooms.length === 0) {
			rooms = ["Room1", "Room2"];
			console.log(rooms);
		}

        return {
            rooms
        };
    }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
