import { BasePage } from './BasePage';

export class TraversalPage extends BasePage {
  // Private elements
  #elements = {
    header: () => cy.get('h1'), // "Traversal"
    subHeaderChildren: () => cy.contains('h4', '.children()'),
    subHeaderClosest: () => cy.contains('h4', '.closest()'),
    subHeaderEq: () => cy.contains('h4', '.eq()'),
    subHeaderFilter: () => cy.contains('h4', '.filter()'),
    subHeaderFind: () => cy.contains('h4', '.find()'),
    subHeaderFirst: () => cy.contains('h4', '.first()'),
    subHeaderLast: () => cy.contains('h4', '.last()'),
    subHeaderNext: () => cy.contains('h4', '.next()'),
    subHeaderNextAll: () => cy.contains('h4', '.nextAll()'),
    subHeaderNextUntil: () => cy.contains('h4', '.nextUntil()'),
    subHeaderNot: () => cy.contains('h4', '.not()'),
    subHeaderParent: () => cy.contains('h4', '.parent()'),
    subHeaderParents: () => cy.contains('h4', '.parents()'),
    subHeaderParentsUntil: () => cy.contains('h4', '.parentsUntil()'),
    subHeaderPrev: () => cy.contains('h4', '.prev()'),
    subHeaderPrevAll: () => cy.contains('h4', '.prevAll()'),
    subHeaderPrevUntil: () => cy.contains('h4', '.prevUntil()'),
    subHeaderSiblings: () => cy.contains('h4', '.siblings()'),

    // Example elements for each traversal command
    breadcrumb: () => cy.get('.traversal-breadcrumb'),
    breadcrumbActive: () => cy.get('.traversal-breadcrumb .active'),
    badge: () => cy.get('.traversal-badge'),
    listGroup: () => cy.get('.list-group'),
    listItems: () => cy.get('.traversal-list>li'),
    navItems: () => cy.get('.traversal-nav>li'),
    navActive: () => cy.get('.traversal-nav>li.active'),
    pagination: () => cy.get('.traversal-pagination'),
    paginationLinks: () => cy.get('.traversal-pagination li a'),
    tableCells: () => cy.get('.traversal-table td'),
    buttons: () => cy.get('.traversal-buttons .btn'),
    ul: () => cy.get('.traversal-ul'),
    ulApples: () => cy.get('.traversal-ul').contains('apples'),
    ulOranges: () => cy.get('.traversal-ul').contains('oranges'),
    ulBananas: () => cy.get('.traversal-ul').contains('bananas'),
    nextAll: () => cy.get('.traversal-next-all'),
    veggies: () => cy.get('#veggies'),
    nuts: () => cy.get('#nuts'),
    disabledButtons: () => cy.get('.traversal-disabled .btn'),
    mark: () => cy.get('.traversal-mark'),
    cite: () => cy.get('.traversal-cite'),
    clothesNav: () => cy.get('.clothes-nav'),
    birds: () => cy.get('.birds'),
    birdsActive: () => cy.get('.birds .active'),
    fruitsList: () => cy.get('.fruits-list'),
    fruitsThird: () => cy.get('.fruits-list .third'),
    foodsList: () => cy.get('.foods-list'),
    foodsNuts: () => cy.get('.foods-list #nuts'),
    pillsActive: () => cy.get('.traversal-pills .active'),

    // Additional links
    linkDocs: () => cy.contains('a', 'docs.cypress.io'),
    linkCypressIO: () => cy.contains('a', 'cypress.io'),
    linkGitHub: () => cy.contains('a', 'GitHub'),
    linkUtilities: () => cy.contains('a', 'Utilities'),
    linkCypressAPI: () => cy.contains('a', 'Cypress API'),
  }

  // Public getters
  get Header() { return this.#elements.header() }
  get SubHeaderChildren() { return this.#elements.subHeaderChildren() }
  get SubHeaderClosest() { return this.#elements.subHeaderClosest() }
  get SubHeaderEq() { return this.#elements.subHeaderEq() }
  get SubHeaderFilter() { return this.#elements.subHeaderFilter() }
  get SubHeaderFind() { return this.#elements.subHeaderFind() }
  get SubHeaderFirst() { return this.#elements.subHeaderFirst() }
  get SubHeaderLast() { return this.#elements.subHeaderLast() }
  get SubHeaderNext() { return this.#elements.subHeaderNext() }
  get SubHeaderNextAll() { return this.#elements.subHeaderNextAll() }
  get SubHeaderNextUntil() { return this.#elements.subHeaderNextUntil() }
  get SubHeaderNot() { return this.#elements.subHeaderNot() }
  get SubHeaderParent() { return this.#elements.subHeaderParent() }
  get SubHeaderParents() { return this.#elements.subHeaderParents() }
  get SubHeaderParentsUntil() { return this.#elements.subHeaderParentsUntil() }
  get SubHeaderPrev() { return this.#elements.subHeaderPrev() }
  get SubHeaderPrevAll() { return this.#elements.subHeaderPrevAll() }
  get SubHeaderPrevUntil() { return this.#elements.subHeaderPrevUntil() }
  get SubHeaderSiblings() { return this.#elements.subHeaderSiblings() }
  get Breadcrumb() { return this.#elements.breadcrumb() }
  get BreadcrumbActive() { return this.#elements.breadcrumbActive() }
  get Badge() { return this.#elements.badge() }
  get ListGroup() { return this.#elements.listGroup() }
  get ListItems() { return this.#elements.listItems() }
  get NavItems() { return this.#elements.navItems() }
  get NavActive() { return this.#elements.navActive() }
  get Pagination() { return this.#elements.pagination() }
  get PaginationLinks() { return this.#elements.paginationLinks() }
  get TableCells() { return this.#elements.tableCells() }
  get Buttons() { return this.#elements.buttons() }
  get Ul() { return this.#elements.ul() }
  get UlApples() { return this.#elements.ulApples() }
  get UlOranges() { return this.#elements.ulOranges() }
  get UlBananas() { return this.#elements.ulBananas() }
  get NextAll() { return this.#elements.nextAll() }
  get Veggies() { return this.#elements.veggies() }
  get Nuts() { return this.#elements.nuts() }
  get DisabledButtons() { return this.#elements.disabledButtons() }
  get Mark() { return this.#elements.mark() }
  get Cite() { return this.#elements.cite() }
  get ClothesNav() { return this.#elements.clothesNav() }
  get Birds() { return this.#elements.birds() }
  get BirdsActive() { return this.#elements.birdsActive() }
  get FruitsList() { return this.#elements.fruitsList() }
  get FruitsThird() { return this.#elements.fruitsThird() }
  get FoodsList() { return this.#elements.foodsList() }
  get FoodsNuts() { return this.#elements.foodsNuts() }
  get PillsActive() { return this.#elements.pillsActive() }
  get LinkDocs() { return this.#elements.linkDocs() }
  get LinkCypressIO() { return this.#elements.linkCypressIO() }
  get LinkGitHub() { return this.#elements.linkGitHub() }
  get LinkUtilities() { return this.#elements.linkUtilities() }
  get LinkCypressAPI() { return this.#elements.linkCypressAPI() }

  // Interaction methods
  clickBreadcrumbActive() { return this.#elements.breadcrumbActive().click() }
  clickBadge() { return this.#elements.badge().click() }
  clickListGroup() { return this.#elements.listGroup().click() }
  clickNavActive() { return this.#elements.navActive().click() }
  clickPaginationLink(index: number) { return this.#elements.paginationLinks().eq(index).click() }
  clickTableCell(index: number) { return this.#elements.tableCells().eq(index).click() }
  clickButton(index: number) { return this.#elements.buttons().eq(index).click() }
  clickUlApples() { return this.#elements.ulApples().click() }
  clickUlOranges() { return this.#elements.ulOranges().click() }
  clickUlBananas() { return this.#elements.ulBananas().click() }
  clickDisabledButton(index: number) { return this.#elements.disabledButtons().eq(index).click() }
  clickMark() { return this.#elements.mark().click() }
  clickCite() { return this.#elements.cite().click() }
  clickBirdsActive() { return this.#elements.birdsActive().click() }
  clickFruitsThird() { return this.#elements.fruitsThird().click() }
  clickFoodsNuts() { return this.#elements.foodsNuts().click() }
  clickPillsActive() { return this.#elements.pillsActive().click() }
  clickLinkDocs() { return this.#elements.linkDocs().click() }
  clickLinkCypressIO() { return this.#elements.linkCypressIO().click() }
  clickLinkGitHub() { return this.#elements.linkGitHub().click() }
  clickLinkUtilities() { return this.#elements.linkUtilities().click() }
  clickLinkCypressAPI() { return this.#elements.linkCypressAPI().click() }

  // Example workflow
  selectBreadcrumbData() {
    this.clickBreadcrumbActive()
    return this
  }
}