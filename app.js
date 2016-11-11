angular.module('myApp',[] )
.service('contactService' , function () {
	var self = this

	self.contacts = []
	
	self.list = function () {
		return self.contacts
	}

	self.add = function (contact) {
		self.contacts.push(contact)
	}
})
.controller('listTodo' , function ($scope , contactService){
	$scope.contacts = contactService.list()
	
	$scope.checkboxModel = {
      		 value : ''
        };
})
.controller('addTodo' , function ($scope , contactService){
	$scope.save = function () {
		if ( $scope.newtodo != undefined){
			var contact = {
				full : $scope.newtodo
				//value : ''	
			}
			console.log($scope.newtodo)
			contactService.add(contact)
			reset()
		}
	}
	function reset() {
		$scope.newtodo = undefined
	}
})