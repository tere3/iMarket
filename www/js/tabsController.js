angular.module('tabsModule', [])

.controller('TabsController', function($scope, $state, $ionicModal){
		/*Incio de modal de agregar tarea*/
		$ionicModal.fromTemplateUrl('templates/modals/addTaskModal.html', {
		    scope: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		    $scope.addTaskModal = modal;
		    
		  });
		  $scope.openTaskModal = function() {
		    $scope.addTaskModal.show();
		  };
		  $scope.closeTaskModal = function() {
		    $scope.addTaskModal.hide();
		  };		
		/*Final de modal agregar tarea*/
		/*Incio de modal de agregar evento*/
		$ionicModal.fromTemplateUrl('templates/modals/addEventModal.html', {
		    scope: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		    $scope.addEventModal = modal;
		    
		  });
		  $scope.openEventModal = function() {
		    $scope.addEventModal.show();
		  };
		  $scope.closeEventModal = function() {
		    $scope.addEventModal.hide();
		  };		
		/*Final de modal agregar evento*/
		/*Incio de modal de agregar super*/
		$ionicModal.fromTemplateUrl('templates/modals/addMarketModal.html', {
		    scope: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		    $scope.addMarketModal = modal;
		    
		  });
		  $scope.openMarketModal = function() {
		    $scope.addMarketModal.show();
		  };
		  $scope.closeMarketModal = function() {
		    $scope.addMarketModal.hide();
		  };		
		/*Final de modal agregar super*/
})

.controller('TaskController', function($scope, $state, $ionicModal){

	
   	 	$scope.formData = {};
 
	/* status: a tiempo
	status: retrasada
	status: entregada*/
	var tasks = [

	
	{id: 0, name: 'Tarea 1', materia: 'Dispositivos moviles', description: 'Ionic', beginDate: Date.now(), endDate: Date.now(),
		check: $scope.isChecked,
		status: function(eD, bD){
			var today = Date.now();
			//ontime, overdue, delivered,undelivered
			var status = false;
			if(today < eD){
				return status = 'ontime';
			}else if(today > eD){
				return status = 'overdue';
			}
		}
	},

	{id: 1, name: 'Tarea 2', materia: 'Seguridad perimetra', description: 'UTM', beginDate: Date.now(), endDate: Date.now(),
		check:  function(check){
			if(check===true){
				return status = 'delivered'
			}else{
				return status = 'undelivered'
			}
		},
		status: function(eD, bD){
			var today = Date.now();
			//ontime, overdue, delivered,undelivered
			var status = false;
			if(today < eD){
				return status = 'ontime';
			}else if(today > eD){
				return status = 'overdue';
			}
		}
	},

	{id: 2, name: 'Tarea 3', materia: 'Auditoria', description: 'Auditar', beginDate: Date.now(), endDate: Date.now(),
		check:  function(check){
			if(check===true){
				return status = 'delivered'
			}else{
				return status = 'undelivered'
			}
		},
		status: function(eD, bD){
			var today = Date.now();
			//ontime, overdue, delivered,undelivered
			var status = false;
			if(today < eD){
				return status = 'ontime';
			}else if(today > eD){
				return status = 'overdue';
			}
		}
	},
	]

	/*Incio de modal de detalles de lista tarea*/
	$ionicModal.fromTemplateUrl('templates/modals/tasksModal.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	  }).then(function(modal) {
	    $scope.tasksModal = modal;
	    $scope.showDetails = function(task){
				$scope.taskDetails = task;
				$scope.tasksModal.show();
			}
	  });
	  $scope.openModal = function() {
	    $scope.tasksModal.show();
	  };
	  $scope.closeModal = function() {
	    $scope.tasksModal.hide();
	  };
	  // Cleanup the modal when we're done with it!
	  $scope.$on('$destroy', function() {
	    $scope.modal.remove();
	  });
	  // Execute action on hide modal
	  $scope.$on('modal.hidden', function() {
	    // Execute action
	  });
	  // Execute action on remove modal
	  $scope.$on('modal.removed', function() {
	    // Execute action
	  });
	$scope.tasks = tasks;
	
	$scope.isChecked = {
		value: true
	};
	$scope.valor = 'Delivered';
	 $scope.statusChange = function(value) {
    		if(value === true){
    			 $scope.valor='Delivered'
    			console.log($scope.valor);
    		}else {
    			console.log($scope.valor);
    			 $scope.valor = 'Undelivered'
    		}
  	};

})

.controller('EventController', function($scope, $state, $ionicModal){
	var events = [
	{id: 0, name: 'Platica residencias', hour: '10:00', description: 'Llevar cuaderno', lugar: 'Biblioteca', Date: Date.now()},

	{id: 1, name: 'Llevar plan de servicio social', hour: '10:30', description: 'Llevar borrador de servicio', lugar: 'Edificio P', Date: Date.now()},
	]



	/*Incio de modal de detalles de lista evento*/
	$ionicModal.fromTemplateUrl('templates/modals/eventsModal.html', {
		    scope: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		    $scope.eventsModal = modal;
		    $scope.showDetails = function(event){
					$scope.eventDetails = event;
					$scope.eventsModal.show();
				}
		  });
		  $scope.openModal = function() {
		    $scope.eventsModal.show();
		  };
		  $scope.closeModal = function() {
		    $scope.eventsModal.hide();
		  };
		  // Cleanup the modal when we're done with it!
		  $scope.$on('$destroy', function() {
		    $scope.modal.remove();
		  });
		  // Execute action on hide modal
		  $scope.$on('modal.hidden', function() {
		    // Execute action
		  });
		  // Execute action on remove modal
		  $scope.$on('modal.removed', function() {
		    // Execute action
		  });
			$scope.events = events;
		})

.controller('MarketController', function($scope, $state, $ionicModal){
	var listM = [
	{id: 0,superMarket: 'Soriana',products: [{name: 'Jabon', brand: 'Ariel'},{name: 'Leche', brand: 'Lala'},{name: 'Agua', brand: 'Epura'},{name: 'Zanahoria', brand: 'Naranja'},{name: 'Aguacate', brand: 'Verde'}]
	},

	{id: 1, superMarket: 'Oxxo', products: [ {name: 'Papel', brand: 'Petalo'}, {name: 'Soda', brand: 'coca'}, {name: 'Pan', brand: 'Bimbo'}, {name: 'Jugo durazno', brand: 'JUMEX'}, {name: 'Papas', brand: 'Sabritas'}]
	},
	]


	/*Incio de modal de detalles de lista super*/
			$ionicModal.fromTemplateUrl('templates/modals/marketModal.html', {
		    scope: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		    $scope.marketModal = modal;
		    $scope.showDetails = function(list){
					$scope.listDetails = list;
					$scope.marketModal.show();
				}
		  });
		  $scope.openModal = function() {
		    $scope.marketModal.show();
		  };
		  $scope.closeModal = function() {
		    $scope.marketModal.hide();
		  };
		  // Cleanup the modal when we're done with it!
		  $scope.$on('$destroy', function() {
		    $scope.modal.remove();
		  });
		  // Execute action on hide modal
		  $scope.$on('modal.hidden', function() {
		    // Execute action
		  });
		  // Execute action on remove modal
		  $scope.$on('modal.removed', function() {
		    // Execute action
		  });
			$scope.listM = listM;
		})