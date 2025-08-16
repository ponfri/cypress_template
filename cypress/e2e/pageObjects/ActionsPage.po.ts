import { BasePage } from './BasePage';

export class ActionsPage extends BasePage {
  // Private elements
  #elements = {
    header: () => cy.get('h1'), // "Actions"
    subHeaderType: () => cy.contains('h4', '.type()'),
    subHeaderFocus: () => cy.contains('h4', '.focus()'),
    subHeaderBlur: () => cy.contains('h4', '.blur()'),
    subHeaderClear: () => cy.contains('h4', '.clear()'),
    subHeaderSubmit: () => cy.contains('h4', '.submit()'),
    subHeaderClick: () => cy.contains('h4', '.click()'),
    subHeaderDblclick: () => cy.contains('h4', '.dblclick()'),
    subHeaderRightclick: () => cy.contains('h4', '.rightclick()'),
    subHeaderCheck: () => cy.contains('h4', '.check()'),
    subHeaderUncheck: () => cy.contains('h4', '.uncheck()'),
    subHeaderSelect: () => cy.contains('h4', '.select()'),
    subHeaderScrollIntoView: () => cy.contains('h4', '.scrollIntoView()'),
    subHeaderScrollTo: () => cy.contains('h4', 'cy.scrollTo()'),
    subHeaderTrigger: () => cy.contains('h4', '.trigger()'),

    // Type
    actionEmail: () => cy.get('.action-email'),
    actionDisabled: () => cy.get('.action-disabled'),

    // Focus
    actionFocus: () => cy.get('.action-focus'),

    // Blur
    actionBlur: () => cy.get('.action-blur'),

    // Clear
    actionClear: () => cy.get('.action-clear'),

    // Submit
    actionForm: () => cy.get('.action-form'),
    actionFormText: () => cy.get('.action-form [type="text"]'),

    // Click
    actionBtn: () => cy.get('.action-btn'),
    actionCanvas: () => cy.get('#action-canvas'),
    actionLabels: () => cy.get('.action-labels>.label'),
    actionOpacityBtn: () => cy.get('.action-opacity>.btn'),

    // Dblclick
    actionDiv: () => cy.get('.action-div'),
    actionInputHidden: () => cy.get('.action-input-hidden'),

    // Rightclick
    rightclickActionDiv: () => cy.get('.rightclick-action-div'),
    rightclickActionInputHidden: () => cy.get('.rightclick-action-input-hidden'),

    // Check/Uncheck
    actionCheckboxes: () => cy.get('.action-checkboxes [type="checkbox"]'),
    actionRadios: () => cy.get('.action-radios [type="radio"]'),
    actionMultipleCheckboxes: () => cy.get('.action-multiple-checkboxes [type="checkbox"]'),
    actionCheck: () => cy.get('.action-check [type="checkbox"]'),

    // Select
    actionSelect: () => cy.get('.action-select'),
    actionSelectMultiple: () => cy.get('.action-select-multiple'),

    // ScrollIntoView
    scrollHorizontalBtn: () => cy.get('#scroll-horizontal button'),
    scrollVerticalBtn: () => cy.get('#scroll-vertical button'),
    scrollBothBtn: () => cy.get('#scroll-both button'),

    // ScrollTo
    scrollableHorizontal: () => cy.get('#scrollable-horizontal'),
    scrollableVertical: () => cy.get('#scrollable-vertical'),
    scrollableBoth: () => cy.get('#scrollable-both'),

    // Trigger
    triggerInputRange: () => cy.get('.trigger-input-range'),
    triggerInputRangeLabel: () => cy.get('.trigger-input-range').siblings('p'),

    // Additional links
    linkDocs: () => cy.contains('a', 'docs.cypress.io'),
    linkCypressIO: () => cy.contains('a', 'cypress.io'),
    linkGitHub: () => cy.contains('a', 'GitHub'),
    linkUtilities: () => cy.contains('a', 'Utilities'),
    linkCypressAPI: () => cy.contains('a', 'Cypress API'),
  }

  // Public getters
  get Header() { return this.#elements.header() }
  get SubHeaderType() { return this.#elements.subHeaderType() }
  get SubHeaderFocus() { return this.#elements.subHeaderFocus() }
  get SubHeaderBlur() { return this.#elements.subHeaderBlur() }
  get SubHeaderClear() { return this.#elements.subHeaderClear() }
  get SubHeaderSubmit() { return this.#elements.subHeaderSubmit() }
  get SubHeaderClick() { return this.#elements.subHeaderClick() }
  get SubHeaderDblclick() { return this.#elements.subHeaderDblclick() }
  get SubHeaderRightclick() { return this.#elements.subHeaderRightclick() }
  get SubHeaderCheck() { return this.#elements.subHeaderCheck() }
  get SubHeaderUncheck() { return this.#elements.subHeaderUncheck() }
  get SubHeaderSelect() { return this.#elements.subHeaderSelect() }
  get SubHeaderScrollIntoView() { return this.#elements.subHeaderScrollIntoView() }
  get SubHeaderScrollTo() { return this.#elements.subHeaderScrollTo() }
  get SubHeaderTrigger() { return this.#elements.subHeaderTrigger() }
  get ActionEmail() { return this.#elements.actionEmail() }
  get ActionDisabled() { return this.#elements.actionDisabled() }
  get ActionFocus() { return this.#elements.actionFocus() }
  get ActionBlur() { return this.#elements.actionBlur() }
  get ActionClear() { return this.#elements.actionClear() }
  get ActionForm() { return this.#elements.actionForm() }
  get ActionFormText() { return this.#elements.actionFormText() }
  get ActionBtn() { return this.#elements.actionBtn() }
  get ActionCanvas() { return this.#elements.actionCanvas() }
  get ActionLabels() { return this.#elements.actionLabels() }
  get ActionOpacityBtn() { return this.#elements.actionOpacityBtn() }
  get ActionDiv() { return this.#elements.actionDiv() }
  get ActionInputHidden() { return this.#elements.actionInputHidden() }
  get RightclickActionDiv() { return this.#elements.rightclickActionDiv() }
  get RightclickActionInputHidden() { return this.#elements.rightclickActionInputHidden() }
  get ActionCheckboxes() { return this.#elements.actionCheckboxes() }
  get ActionRadios() { return this.#elements.actionRadios() }
  get ActionMultipleCheckboxes() { return this.#elements.actionMultipleCheckboxes() }
  get ActionCheck() { return this.#elements.actionCheck() }
  get ActionSelect() { return this.#elements.actionSelect() }
  get ActionSelectMultiple() { return this.#elements.actionSelectMultiple() }
  get ScrollHorizontalBtn() { return this.#elements.scrollHorizontalBtn() }
  get ScrollVerticalBtn() { return this.#elements.scrollVerticalBtn() }
  get ScrollBothBtn() { return this.#elements.scrollBothBtn() }
  get ScrollableHorizontal() { return this.#elements.scrollableHorizontal() }
  get ScrollableVertical() { return this.#elements.scrollableVertical() }
  get ScrollableBoth() { return this.#elements.scrollableBoth() }
  get TriggerInputRange() { return this.#elements.triggerInputRange() }
  get TriggerInputRangeLabel() { return this.#elements.triggerInputRangeLabel() }
  get LinkDocs() { return this.#elements.linkDocs() }
  get LinkCypressIO() { return this.#elements.linkCypressIO() }
  get LinkGitHub() { return this.#elements.linkGitHub() }
  get LinkUtilities() { return this.#elements.linkUtilities() }
  get LinkCypressAPI() { return this.#elements.linkCypressAPI() }

  // Interaction methods
  typeActionEmail(email: string) { return this.#elements.actionEmail().type(email) }
  typeActionDisabled(text: string) { return this.#elements.actionDisabled().type(text, { force: true }) }
  focusActionFocus() { return this.#elements.actionFocus().focus() }
  blurActionBlur() { return this.#elements.actionBlur().blur() }
  clearActionClear() { return this.#elements.actionClear().clear() }
  submitActionForm() { return this.#elements.actionForm().submit() }
  clickActionBtn() { return this.#elements.actionBtn().click() }
  clickActionCanvas(position?: 'topLeft' | 'top' | 'topRight' | 'left' | 'center' | 'right' | 'bottomLeft' | 'bottom' | 'bottomRight' | [number, number]) {
  if (typeof position === 'string') {
    return this.#elements.actionCanvas().click(position as any);
  } else if (Array.isArray(position)) {
    return this.#elements.actionCanvas().click(position[0], position[1]);
  }
  return this.#elements.actionCanvas().click();
}
  clickActionLabels() { return this.#elements.actionLabels().click({ multiple: true }) }
  clickActionOpacityBtn() { return this.#elements.actionOpacityBtn().click({ force: true }) }
  dblclickActionDiv() { return this.#elements.actionDiv().dblclick() }
  rightclickActionDiv() { return this.#elements.rightclickActionDiv().rightclick() }
  checkActionCheckboxes() { return this.#elements.actionCheckboxes().not('[disabled]').check() }
  checkActionRadios() { return this.#elements.actionRadios().not('[disabled]').check() }
  checkActionMultipleCheckboxes(values: string[]) { return this.#elements.actionMultipleCheckboxes().check(values) }
  uncheckActionCheck(values?: string[]) {
    if (values) {
      return this.#elements.actionCheck().uncheck(values)
    }
    return this.#elements.actionCheck().not('[disabled]').uncheck()
  }
  selectActionSelect(value: string) { return this.#elements.actionSelect().select(value) }
  selectActionSelectMultiple(values: string[]) { return this.#elements.actionSelectMultiple().select(values) }
  scrollIntoViewHorizontalBtn() { return this.#elements.scrollHorizontalBtn().scrollIntoView() }
  scrollIntoViewVerticalBtn() { return this.#elements.scrollVerticalBtn().scrollIntoView() }
  scrollIntoViewBothBtn() { return this.#elements.scrollBothBtn().scrollIntoView() }
  scrollToHorizontal(position: string | [number, number]) {
    if (typeof position === 'string') {
      return this.#elements.scrollableHorizontal().scrollTo(position)
    } else if (Array.isArray(position)) {
      return this.#elements.scrollableHorizontal().scrollTo(position[0], position[1])
    }
  }
  scrollToVertical(position: string | [number, number]) {
    if (typeof position === 'string') {
      return this.#elements.scrollableVertical().scrollTo(position)
    } else if (Array.isArray(position)) {
      return this.#elements.scrollableVertical().scrollTo(position[0], position[1])
    }
  }
  scrollToBoth(position: string | [number, number]) {
    if (typeof position === 'string') {
      return this.#elements.scrollableBoth().scrollTo(position)
    } else if (Array.isArray(position)) {
      return this.#elements.scrollableBoth().scrollTo(position[0], position[1])
    }
  }
  triggerInputRange(value: number) {
    this.#elements.triggerInputRange().invoke('val', value)
    this.#elements.triggerInputRange().trigger('change')
  }
  clickLinkDocs() { return this.#elements.linkDocs().click() }
  clickLinkCypressIO() { return this.#elements.linkCypressIO().click() }
  clickLinkGitHub() { return this.#elements.linkGitHub().click() }
  clickLinkUtilities() { return this.#elements.linkUtilities().click() }
  clickLinkCypressAPI() { return this.#elements.linkCypressAPI().click() }
}