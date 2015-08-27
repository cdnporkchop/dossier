angular.module('Dossier', []);
angular.module('Dossier').controller('BaseCtrl', ['$scope', function($scope) {

	io.socket.get('/dossier', function(data) {
		$scope.dossiers = data;
		$scope.$apply();
	});	

	io.socket.on('dossier', function(event) {
		switch(event.verb) {
			case 'created':
				$scope.dossiers.push(event.data);
				$scope.$apply();
				break;
		}
	});
}]);
