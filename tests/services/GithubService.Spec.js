'use strict';

describe('Github Service', () => {

  let github;

  beforeEach(() => {
    angular.mock.module('Hub');
    angular.mock.inject((_GithubService_) => {
      github = _GithubService_;
    });
  });

  it('Search from github', (done) => {
    github.search('bootstrap')
      .then((res) => {
        expect(res.data).to.exists;
        done();
      }, (err) => {
        console.log(err);
        done();
      });
  });

});
