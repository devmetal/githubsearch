'use strict';

class ListController {
  constructor(GithubService, PageService, $state) {
    this.github = GithubService;
    this.state = $state;
    this.repositories = [];
    this.keyword = "";
    this.page = 1;
    this.current = null;
  }

  doSearch(validity) {
    if (!validity) {
      return;
    }

    this.repositories = [];
    this.page = 1;
    this.current = null;
    this.github.search(this.keyword, this.page)
      .then((result) => {
        this.repositories = result.data.items;
      });
  }

  showMore() {
    this.page++;
    this.github.search(this.keyword, this.page)
      .then((result) => {
        this.repositories = this.repositories.concat(result.data.items);
      });
  }

  showInfo(index) {
    this.current = index;
  }

  showIssues(repo) {
    let fullName = repo.full_name;
    this.state.go('home.issues', {full_name:fullName});
  }

  hasItems() {
    return !!this.repositories.length;
  }
}

ListController.$inject = ['GithubService', 'PageService', '$state'];

module.exports = ListController;
