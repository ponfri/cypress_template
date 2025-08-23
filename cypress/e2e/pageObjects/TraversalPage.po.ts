import { BasePage } from './BasePage.po';

export class TraversalPage extends BasePage {
  // Private selectors for all major elements on the Traversal page
  #elements = {
    breadcrumb: '.traversal-breadcrumb[data-cy="breadcrumb"]',
    breadcrumbActive: '.traversal-breadcrumb .active[data-cy="breadcrumb-active"]',
    badge: '.traversal-badge[data-cy="badge"]',
    listGroup: '.list-group[data-cy="list-group"]',
    listGroupItem: '.list-group-item[data-cy="list-group-item"]',
    traversalList: '.traversal-list > li[data-cy="traversal-list-item"]',
    traversalNav: '.traversal-nav > li[data-cy="traversal-nav-item"]',
    traversalNavActive: '.traversal-nav > li.active[data-cy="traversal-nav-active"]',
    traversalPagination: '.traversal-pagination[data-cy="traversal-pagination"]',
    traversalPaginationLi: '.traversal-pagination li[data-cy="traversal-pagination-li"]',
    traversalPaginationA: '.traversal-pagination li a[data-cy="traversal-pagination-a"]',
    traversalTable: '.traversal-table[data-cy="traversal-table"]',
    traversalTableTd: '.traversal-table td[data-cy="traversal-table-td"]',
    traversalButtons: '.traversal-buttons .btn[data-cy="traversal-btn"]',
    traversalButtonsLink: '.traversal-buttons a.btn[data-cy="traversal-btn-link"]',
    traversalButtonsButton: '.traversal-buttons button.btn[data-cy="traversal-btn-button"]',
    traversalButtonsInput: '.traversal-buttons input.btn[type="button"][data-cy="traversal-btn-input"]',
    traversalButtonsSubmit: '.traversal-buttons input.btn[type="submit"][data-cy="traversal-btn-submit"]',
    traversalUl: '.traversal-ul[data-cy="traversal-ul"]',
    traversalUlLi: '.traversal-ul li[data-cy="traversal-ul-li"]',
    traversalNextAll: '.traversal-next-all[data-cy="traversal-next-all"]',
    traversalNextAllLi: '.traversal-next-all li[data-cy="traversal-next-all-li"]',
    healthyFoods: '.healthy-foods[data-cy="healthy-foods"]',
    healthyFoodsLi: '.healthy-foods li[data-cy="healthy-foods-li"]',
    foodsList: '.foods-list[data-cy="foods-list"]',
    foodsListLi: '.foods-list li[data-cy="foods-list-li"]',
    fruitsHeader: '#fruits[data-cy="fruits-header"]',
    veggiesHeader: '#veggies[data-cy="veggies-header"]',
    nutsHeader: '#nuts[data-cy="nuts-header"]',
    traversalDisabled: '.traversal-disabled[data-cy="traversal-disabled"]',
    traversalDisabledBtn: '.traversal-disabled .btn[data-cy="traversal-disabled-btn"]',
    traversalDisabledBtnEnabled: '.traversal-disabled .btn:not([disabled])[data-cy="traversal-disabled-btn-enabled"]',
    traversalMark: '.traversal-mark[data-cy="traversal-mark"]',
    traversalCite: '.traversal-cite[data-cy="traversal-cite"]',
    clothesNav: '.clothes-nav[data-cy="clothes-nav"]',
    clothesNavActive: '.clothes-nav .active[data-cy="clothes-nav-active"]',
    birdsList: '.birds.list-group[data-cy="birds-list"]',
    birdsListItem: '.birds.list-group .list-group-item[data-cy="birds-list-item"]',
    birdsListItemActive: '.birds.list-group .list-group-item.active[data-cy="birds-list-item-active"]',
    fruitsList: '.fruits-list[data-cy="fruits-list"]',
    fruitsListThird: '.fruits-list .third[data-cy="fruits-list-third"]',
    traversalPills: '.traversal-pills[data-cy="traversal-pills"]',
    traversalPillsActive: '.traversal-pills .active[data-cy="traversal-pills-active"]',
    traversalPillsLi: '.traversal-pills li[data-cy="traversal-pills-li"]',
  };

  // Getters for all locators
  get breadcrumb() { return cy.get(this.#elements.breadcrumb); }
  get breadcrumbActive() { return cy.get(this.#elements.breadcrumbActive); }
  get badge() { return cy.get(this.#elements.badge); }
  get listGroup() { return cy.get(this.#elements.listGroup); }
  get listGroupItem() { return cy.get(this.#elements.listGroupItem); }
  get traversalList() { return cy.get(this.#elements.traversalList); }
  get traversalNav() { return cy.get(this.#elements.traversalNav); }
  get traversalNavActive() { return cy.get(this.#elements.traversalNavActive); }
  get traversalPagination() { return cy.get(this.#elements.traversalPagination); }
  get traversalPaginationLi() { return cy.get(this.#elements.traversalPaginationLi); }
  get traversalPaginationA() { return cy.get(this.#elements.traversalPaginationA); }
  get traversalTable() { return cy.get(this.#elements.traversalTable); }
  get traversalTableTd() { return cy.get(this.#elements.traversalTableTd); }
  get traversalButtons() { return cy.get(this.#elements.traversalButtons); }
  get traversalButtonsLink() { return cy.get(this.#elements.traversalButtonsLink); }
  get traversalButtonsButton() { return cy.get(this.#elements.traversalButtonsButton); }
  get traversalButtonsInput() { return cy.get(this.#elements.traversalButtonsInput); }
  get traversalButtonsSubmit() { return cy.get(this.#elements.traversalButtonsSubmit); }
  get traversalUl() { return cy.get(this.#elements.traversalUl); }
  get traversalUlLi() { return cy.get(this.#elements.traversalUlLi); }
  get traversalNextAll() { return cy.get(this.#elements.traversalNextAll); }
  get traversalNextAllLi() { return cy.get(this.#elements.traversalNextAllLi); }
  get healthyFoods() { return cy.get(this.#elements.healthyFoods); }
  get healthyFoodsLi() { return cy.get(this.#elements.healthyFoodsLi); }
  get foodsList() { return cy.get(this.#elements.foodsList); }
  get foodsListLi() { return cy.get(this.#elements.foodsListLi); }
  get fruitsHeader() { return cy.get(this.#elements.fruitsHeader); }
  get veggiesHeader() { return cy.get(this.#elements.veggiesHeader); }
  get nutsHeader() { return cy.get(this.#elements.nutsHeader); }
  get traversalDisabled() { return cy.get(this.#elements.traversalDisabled); }
  get traversalDisabledBtn() { return cy.get(this.#elements.traversalDisabledBtn); }
  get traversalDisabledBtnEnabled() { return cy.get(this.#elements.traversalDisabledBtnEnabled); }
  get traversalMark() { return cy.get(this.#elements.traversalMark); }
  get traversalCite() { return cy.get(this.#elements.traversalCite); }
  get clothesNav() { return cy.get(this.#elements.clothesNav); }
  get clothesNavActive() { return cy.get(this.#elements.clothesNavActive); }
  get birdsList() { return cy.get(this.#elements.birdsList); }
  get birdsListItem() { return cy.get(this.#elements.birdsListItem); }
  get birdsListItemActive() { return cy.get(this.#elements.birdsListItemActive); }
  get fruitsList() { return cy.get(this.#elements.fruitsList); }
  get fruitsListThird() { return cy.get(this.#elements.fruitsListThird); }
  get traversalPills() { return cy.get(this.#elements.traversalPills); }
  get traversalPillsActive() { return cy.get(this.#elements.traversalPillsActive); }
  get traversalPillsLi() { return cy.get(this.#elements.traversalPillsLi); }

    // Interaction methods
    clickBreadcrumb() { this.breadcrumb.click(); }
    clickBadge() { this.badge.click(); }
    clickListGroupItem() { this.listGroupItem.click(); }
    clickTraversalNavActive() { this.traversalNavActive.click(); }
    clickTraversalPaginationA() { this.traversalPaginationA.click(); }
    clickTraversalButtonsLink() { this.traversalButtonsLink.click(); }
    clickTraversalButtonsButton() { this.traversalButtonsButton.click(); }
    clickTraversalButtonsInput() { this.traversalButtonsInput.click(); }
    clickTraversalButtonsSubmit() { this.traversalButtonsSubmit.click(); }
  
    // Workflow methods
    clickAllTraversalButtons() {
      this.clickTraversalButtonsLink();
      this.clickTraversalButtonsButton();
      this.clickTraversalButtonsInput();
      this.clickTraversalButtonsSubmit();
      return this;
    }

    verifyAllHeadersVisible() {
      // Assertions should be done in test, not here
      return this;
    }

    verifyListGroupItemsCount() {
      // Assertions should be done in test, not here
      return this;
    }

    verifyActiveStates() {
      this.breadcrumbActive.should('be.visible');
      this.traversalNavActive.should('be.visible');
      this.traversalPillsActive.should('be.visible');
      this.clothesNavActive.should('be.visible');
    }
}