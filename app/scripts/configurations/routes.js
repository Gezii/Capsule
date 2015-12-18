(function(){
	'use strict';
	angular
		.module('capsuleApp')
		.config(routesConfig);
		
		
	function routesConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
        // 'abstract': true,
      })
      .state('about', {
				url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .state('login', {
				url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .state('register', {
				url: '/register',
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm'
      })
      ;
			
			$urlRouterProvider.otherwise("/");
	}
	
})();