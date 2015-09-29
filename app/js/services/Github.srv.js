'use strict';

const API_URL = "https://api.github.com";
const REPOS_URL = "/search/repositories";
const ISSUES_URL = "/search/issues";

class GithubService {
  constructor($q, $http) {
    this.promise = $q;
    this.http = $http;
  }

  search(keyword, page) {
    let url = API_URL + REPOS_URL + `?q=${keyword}`;

    url += '&per_page=10';
    if (page) {
      url += `&page=${page}`;
    }

    return this.promise((resolve, reject) => {
      this.http.get(url)
        .then((result) => {
          console.log(result.data);
          resolve(result);
        }, (error) => {
          reject(error);
        });
    });
  }

  issues(fullName, page) {
    let url = API_URL + ISSUES_URL + `?q=repo:${fullName}`;

    url += '&per_page=10';
    if (page) {
      url += `&page=${page}`;
    }

    return this.promise((resolve, reject) => {
      this.http.get(url)
        .then((result) => {
          resolve(result);
        }, (error) => {
          reject(error);
        });
    });
  }
}

GithubService.$inject = ['$q', '$http'];

module.exports = GithubService;
