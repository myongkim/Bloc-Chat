(function() {
    function config($stateProvider, $locationProvider) {

         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
             });

         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             })

             .state('rooms', {
                url: '/rooms',
                controller: 'RoomCtrl as rooms',
                templateUrl: '/templates/Rooms.html'
            });
        }


    angular
        .module('blocChat', ['firebase', 'ui.router'])
        .config(config);
})();

// try to use a .state for 'rooms' for the page, it does not work. So I have made copy and paste
// from room.html to home.html to show it on the file. It start from <ul></ul>
