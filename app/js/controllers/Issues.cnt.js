'use strict';

class IssuesController {
  constructor(GithubService, PageService, $stateParams) {
    this.github = GithubService;
    this.fullName = $stateParams.full_name;
    this.page = 1;
    this.issues = [];
    this.loadIssues();
  }

  back() {
    
  }

  loadIssues() {
    this.github.issues(this.fullName)
      .then((result) => {
        this.issues = result.data.items;
      });
  }

  showMore() {
    this.page++;
    this.github.issues(this.fullName, this.page)
      .then((result) => {
        this.issues = this.issues.concat(result.data.items);
      });
  }

  hasItems() {
    return !!this.issues.length;
  }
}

IssuesController.$inject = ['GithubService', 'PageService', '$stateParams'];

module.exports = IssuesController;
