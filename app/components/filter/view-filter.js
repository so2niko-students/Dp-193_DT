export default class ViewFilter{
  filterAge = document.querySelector('.btns-filter-age');
  filterCount = document.querySelector('.filter-count');

  constructor(handleFilterClick){
    this.filterAge.addEventListener('click', handleFilterClick);
  }

  renderCount(count){
    this.filterCount.innerText = count;
  }

}