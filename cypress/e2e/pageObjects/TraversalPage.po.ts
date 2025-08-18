import { BasePage } from './BasePage.po';

export class TraversalPage extends BasePage {
  // Private selectors for all major elements on the Traversal page
  #elements = {
    breadcrumb: '.traversal-breadcrumb',
    breadcrumbActive: '.traversal-breadcrumb .active',
    badge: '.traversal-badge',
    listGroup: '.list-group',
    listGroupItem: '.list-group-item',
    traversalList: '.traversal-list > li',
    traversalNav: '.traversal-nav > li',
    traversalNavActive: '.traversal-nav > li.active',
    traversalPagination: '.traversal-pagination',
    traversalPaginationLi: '.traversal-pagination li',
    traversalPaginationA: '.traversal-pagination li a',
    traversalTable: '.traversal-table',
    traversalTableTd: '.traversal-table td',
    traversalButtons: '.traversal-buttons .btn',
    traversalButtonsLink: '.traversal-buttons a.btn',
    traversalButtonsButton: '.traversal-buttons button.btn',
    traversalButtonsInput: '.traversal-buttons input.btn[type="button"]',
    traversalButtonsSubmit: '.traversal-buttons input.btn[type="submit"]',
    traversalUl: '.traversal-ul',
    traversalUlLi: '.traversal-ul li',
    traversalNextAll: '.traversal-next-all',
    traversalNextAllLi: '.traversal-next-all li',
    healthyFoods: '.healthy-foods',
    healthyFoodsLi: '.healthy-foods li',
    foodsList: '.foods-list',
    foodsListLi: '.foods-list li',
    fruitsHeader: '#fruits',
    veggiesHeader: '#veggies',
    nutsHeader: '#nuts',
    traversalDisabled: '.traversal-disabled',
    traversalDisabledBtn: '.traversal-disabled .btn',
    traversalDisabledBtnEnabled: '.traversal-disabled .btn:not([disabled])',
    traversalMark: '.traversal-mark',
    traversalCite: '.traversal-cite',
    clothesNav: '.clothes-nav',
    clothesNavActive: '.clothes-nav .active',
    birdsList: '.birds.list-group',
    birdsListItem: '.birds.list-group .list-group-item',
    birdsListItemActive: '.birds.list-group .list-group-item.active',
    fruitsList: '.fruits-list',
    fruitsListThird: '.fruits-list .third',
    traversalPills: '.traversal-pills',
    traversalPillsActive: '.traversal-pills .active',
    traversalPillsLi: '.traversal-pills li',
  };

  // Public getters for selectors
  get elements() {
    return this.#elements;
  }

  // Workflow methods for all interactive/testable elements

  getBreadcrumbItems() {
    return cy.get(this.#elements.breadcrumb).find('li');
  }
  getActiveBreadcrumb() {
    return cy.get(this.#elements.breadcrumbActive);
  }
  getBadge() {
    return cy.get(this.#elements.badge);
  }
  getListGroupItems() {
    return cy.get(this.#elements.listGroupItem);
  }
  getTraversalListItems() {
    return cy.get(this.#elements.traversalList);
  }
  getTraversalNavItems() {
    return cy.get(this.#elements.traversalNav);
  }
  getTraversalNavActive() {
    return cy.get(this.#elements.traversalNavActive);
  }
  getPaginationLinks() {
    return cy.get(this.#elements.traversalPaginationA);
  }
  getTableCells() {
    return cy.get(this.#elements.traversalTableTd);
  }
  getButtons() {
    return cy.get(this.#elements.traversalButtons);
  }
  clickButtonByText(text: string) {
    return cy.get(this.#elements.traversalButtons).contains(text).click();
  }
  getLinkButton() {
    return cy.get(this.#elements.traversalButtonsLink);
  }
  getButtonButton() {
    return cy.get(this.#elements.traversalButtonsButton);
  }
  getInputButton() {
    return cy.get(this.#elements.traversalButtonsInput);
  }
  getSubmitButton() {
    return cy.get(this.#elements.traversalButtonsSubmit);
  }
  getTraversalUlItems() {
    return cy.get(this.#elements.traversalUlLi);
  }
  getNextAllItems() {
    return cy.get(this.#elements.traversalNextAllLi);
  }
  getHealthyFoodsItems() {
    return cy.get(this.#elements.healthyFoodsLi);
  }
  getFoodsListItems() {
    return cy.get(this.#elements.foodsListLi);
  }
  getFruitsHeader() {
    return cy.get(this.#elements.fruitsHeader);
  }
  getVeggiesHeader() {
    return cy.get(this.#elements.veggiesHeader);
  }
  getNutsHeader() {
    return cy.get(this.#elements.nutsHeader);
  }
  getDisabledButtons() {
    return cy.get(this.#elements.traversalDisabledBtn);
  }
  getEnabledButtons() {
    return cy.get(this.#elements.traversalDisabledBtnEnabled);
  }
  getMark() {
    return cy.get(this.#elements.traversalMark);
  }
  getCite() {
    return cy.get(this.#elements.traversalCite);
  }
  getClothesNavItems() {
    return cy.get(this.#elements.clothesNav).find('li');
  }
  getClothesNavActive() {
    return cy.get(this.#elements.clothesNavActive);
  }
  getBirdsListItems() {
    return cy.get(this.#elements.birdsListItem);
  }
  getBirdsListActive() {
    return cy.get(this.#elements.birdsListItemActive);
  }
  getFruitsListItems() {
    return cy.get(this.#elements.fruitsList);
  }
  getFruitsListThird() {
    return cy.get(this.#elements.fruitsListThird);
  }
  getTraversalPillsItems() {
    return cy.get(this.#elements.traversalPillsLi);
  }
  getTraversalPillsActive() {
    return cy.get(this.#elements.traversalPillsActive);
  }

  // Example workflow methods for traversal commands
  children(selector: string) {
    return cy.get(selector).children();
  }
  closest(selector: string, ancestor: string) {
    return cy.get(selector).closest(ancestor);
  }
  eq(selector: string, index: number) {
    return cy.get(selector).eq(index);
  }
  filter(selector: string, filterSelector: string) {
    return cy.get(selector).filter(filterSelector);
  }
  find(selector: string, findSelector: string) {
    return cy.get(selector).find(findSelector);
  }
  first(selector: string) {
    return cy.get(selector).first();
  }
  last(selector: string) {
    return cy.get(selector).last();
  }
  next(selector: string) {
    return cy.get(selector).next();
  }
  nextAll(selector: string) {
    return cy.get(selector).nextAll();
  }
  nextUntil(selector: string, untilSelector: string) {
    return cy.get(selector).nextUntil(untilSelector);
  }
  not(selector: string, notSelector: string) {
    return cy.get(selector).not(notSelector);
  }
  parent(selector: string) {
    return cy.get(selector).parent();
  }
  parents(selector: string) {
    return cy.get(selector).parents();
  }
  parentsUntil(selector: string, untilSelector: string) {
    return cy.get(selector).parentsUntil(untilSelector);
  }
  prev(selector: string) {
    return cy.get(selector).prev();
  }
  prevAll(selector: string) {
    return cy.get(selector).prevAll();
  }
  prevUntil(selector: string, untilSelector: string) {
    return cy.get(selector).prevUntil(untilSelector);
  }
  siblings(selector: string) {
    return cy.get(selector).siblings();
  }
}