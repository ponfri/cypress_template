import { TraversalPage } from '../../pageObjects/TraversalPage.po';

describe('TraversalPage Page Object', () => {
  let page: TraversalPage;
  beforeEach(() => {
    page = new TraversalPage('/traversal');
  });

  it('should get breadcrumb', () => {
    page.breadcrumb.should('exist');
  });
  it('should get breadcrumbActive', () => {
    page.breadcrumbActive.should('exist');
  });
  it('should get badge', () => {
    page.badge.should('exist');
  });
  it('should get listGroup', () => {
    page.listGroup.should('exist');
  });
  it('should get listGroupItem', () => {
    page.listGroupItem.should('exist');
  });
  it('should get traversalList', () => {
    page.traversalList.should('exist');
  });
  it('should get traversalNav', () => {
    page.traversalNav.should('exist');
  });
  it('should get traversalNavActive', () => {
    page.traversalNavActive.should('exist');
  });
  it('should get traversalPagination', () => {
    page.traversalPagination.should('exist');
  });
  it('should get traversalPaginationLi', () => {
    page.traversalPaginationLi.should('exist');
  });
  it('should get traversalPaginationA', () => {
    page.traversalPaginationA.should('exist');
  });
  it('should get traversalTable', () => {
    page.traversalTable.should('exist');
  });
  it('should get traversalTableTd', () => {
    page.traversalTableTd.should('exist');
  });
  it('should get traversalButtons', () => {
    page.traversalButtons.should('exist');
  });
  it('should get traversalButtonsLink', () => {
    page.traversalButtonsLink.should('exist');
  });
  it('should get traversalButtonsButton', () => {
    page.traversalButtonsButton.should('exist');
  });
  it('should get traversalButtonsInput', () => {
    page.traversalButtonsInput.should('exist');
  });
  it('should get traversalButtonsSubmit', () => {
    page.traversalButtonsSubmit.should('exist');
  });
  it('should get traversalUl', () => {
    page.traversalUl.should('exist');
  });
  it('should get traversalUlLi', () => {
    page.traversalUlLi.should('exist');
  });
  it('should get traversalNextAll', () => {
    page.traversalNextAll.should('exist');
  });
  it('should get traversalNextAllLi', () => {
    page.traversalNextAllLi.should('exist');
  });
  it('should get healthyFoods', () => {
    page.healthyFoods.should('exist');
  });
  it('should get healthyFoodsLi', () => {
    page.healthyFoodsLi.should('exist');
  });
  it('should get foodsList', () => {
    page.foodsList.should('exist');
  });
  it('should get foodsListLi', () => {
    page.foodsListLi.should('exist');
  });
  it('should get fruitsHeader', () => {
    page.fruitsHeader.should('exist');
  });
  it('should get veggiesHeader', () => {
    page.veggiesHeader.should('exist');
  });
  it('should get nutsHeader', () => {
    page.nutsHeader.should('exist');
  });
  it('should get traversalDisabled', () => {
    page.traversalDisabled.should('exist');
  });
  it('should get traversalDisabledBtn', () => {
    page.traversalDisabledBtn.should('exist');
  });
  it('should get traversalDisabledBtnEnabled', () => {
    page.traversalDisabledBtnEnabled.should('exist');
  });
  it('should get traversalMark', () => {
    page.traversalMark.should('exist');
  });
  it('should get traversalCite', () => {
    page.traversalCite.should('exist');
  });
  it('should get clothesNav', () => {
    page.clothesNav.should('exist');
  });
  it('should get clothesNavActive', () => {
    page.clothesNavActive.should('exist');
  });
  it('should get birdsList', () => {
    page.birdsList.should('exist');
  });
  it('should get birdsListItem', () => {
    page.birdsListItem.should('exist');
  });
  it('should get birdsListItemActive', () => {
    page.birdsListItemActive.should('exist');
  });
  it('should get fruitsList', () => {
    page.fruitsList.should('exist');
  });
  it('should get fruitsListThird', () => {
    page.fruitsListThird.should('exist');
  });
  it('should get traversalPills', () => {
    page.traversalPills.should('exist');
  });
  it('should get traversalPillsActive', () => {
    page.traversalPillsActive.should('exist');
  });
  it('should get traversalPillsLi', () => {
    page.traversalPillsLi.should('exist');
  });

  it('should click breadcrumb', () => {
    page.clickBreadcrumb();
  });
  it('should click badge', () => {
    page.clickBadge();
  });
  it('should click listGroupItem', () => {
    page.clickListGroupItem();
  });
  it('should click traversalNavActive', () => {
    page.clickTraversalNavActive();
  });
  it('should click traversalPaginationA', () => {
    page.clickTraversalPaginationA();
  });
  it('should click traversalButtonsLink', () => {
    page.clickTraversalButtonsLink();
  });
  it('should click traversalButtonsButton', () => {
    page.clickTraversalButtonsButton();
  });
  it('should click traversalButtonsInput', () => {
    page.clickTraversalButtonsInput();
  });
  it('should click traversalButtonsSubmit', () => {
    page.clickTraversalButtonsSubmit();
  });
  it('should click all traversal buttons', () => {
    page.clickAllTraversalButtons();
  });

  it('should verify active states', () => {
    page.verifyActiveStates();
  });
});
