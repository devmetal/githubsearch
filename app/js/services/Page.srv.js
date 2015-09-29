'use strict';

class PageService {
  constructor() {
    this.title = "";
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title
  }
}

module.exports = PageService;
