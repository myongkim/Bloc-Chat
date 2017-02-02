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
                 controller: 'HomeCtrl as homeCtrl',
                 templateUrl: '/templates/home.html'
             });

        }


    angular
        .module('blocChat', ['firebase', 'ui.router'])
        .config(config);
})();
