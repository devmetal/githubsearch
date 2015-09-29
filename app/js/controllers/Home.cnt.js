'use strict';

module.exports = ['$scope', '$state', 'PageService', 'GithubService', ($scope, $state, ps, gs) => {
  ps.setTitle('Github Repo Browser');
  $scope.Page = ps;
  $scope.goHome = () => {
    $state.go('home.list');
  }
}];
