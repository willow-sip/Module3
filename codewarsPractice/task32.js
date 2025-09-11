"use strict;" 
//PaginationHelper
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.pages = [];

    for (let i = 0; i < collection.length; i += itemsPerPage) {
      this.pages.push(collection.slice(i, i + itemsPerPage));
    }
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return this.pages.length;
  }
  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    }
    return this.pages[pageIndex].length;
  }
  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
    }
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}