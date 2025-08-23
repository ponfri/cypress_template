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
    }

    verifyAllHeadersVisible() {
      this.fruitsHeader.should('be.visible');
      this.veggiesHeader.should('be.visible');
      this.nutsHeader.should('be.visible');
    }

    verifyListGroupItemsCount(expected: number) {
      this.listGroupItem.should('have.length', expected);
    }

    verifyActiveStates() {
      this.breadcrumbActive.should('be.visible');
      this.traversalNavActive.should('be.visible');
      this.traversalPillsActive.should('be.visible');
      this.clothesNavActive.should('be.visible');
    }
}