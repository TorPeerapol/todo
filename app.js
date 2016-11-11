angular.module('myApp',[] )
.service('contactService' , function ($http) {
	var self = this

	self.contacts = [
		{id : 0 ,full : "Tor Peerapol",	done : false},
		{id : 1 ,full : "Bow Kamonluk",	done : true},
	]
	
	self.list = function () {
		return self.contacts
	}

	self.add = function (contact) {
		self.contacts.push(contact)
	}


	self.setTrue = function (contact) {
		self.contacts[contact].done = true
	}

	self.setFalse = function (contact) {
		self.contacts[contact].done = false
	}
})
.controller('listTodo' , function ($scope , contactService){
	$scope.contacts = contactService.list()
	
	$scope.onCompleteTodo = function(contact) {
		
		if (contactService.contacts[contact].done == false ){
			contactService.setTrue(contact)
		}else if (contactService.contacts[contact].done == true ){
			contactService.setFalse(contact)
		}
        
	}
})
.controller('addTodo' , function ($scope , contactService){
	var i = 2
	$scope.save = function () {
		if ($scope.newtodo != undefined ){
			var contact = {
				id : i++ ,
				full : $scope.newtodo,
				done : false
			}
			contactService.add(contact)
			reset()
		}
	}
	function reset() {
		$scope.newtodo = undefined
	}
})