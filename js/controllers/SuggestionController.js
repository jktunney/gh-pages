app.controller('SuggestionController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) {
    $scope.post = suggestions.posts[$routeParams.id];

    $scope.addComment = function(index) {

        // are they even wanting an object in here?
    $scope.post.comments.push({
        body: $scope.comment,
        upvotes: 0
    })
};
    $scope.upVote = function(comment) {
    comment.upvotes += 1;
};

    // $scope.currentIndex = parseInt($routeParams.id);
    }]);