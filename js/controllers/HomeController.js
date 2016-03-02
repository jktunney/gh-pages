app.controller('HomeController', [
	'$scope', 
	'suggestions',

 function($scope, suggestions){
	$scope.posts = suggestions.posts;

	$scope.addSuggestion = function(){
		if ($scope.title === "" | !$scope.title){
			return
		}

	//push suggestion posts in suggestion.js
	$scope.posts.push({
		title: $scope.title,
		comments: [],
		upvotes: 0
	});

	//after submit, clear input
	$scope.title = '';
};

	$scope.upVote = function(post){
		post.upvotes +=1;
	};
}]);
