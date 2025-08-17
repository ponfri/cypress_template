import { BasePage } from './BasePage.po';

export class LandingPage extends BasePage {
  
  public visit(url?: string) {
    super.visit(url);
  }
  // Private elements
  #elements = {
    header: () => cy.get('h1'),
    subHeader: () => cy.get('h2'),
    linkDocs: () => cy.contains('a', 'docs.cypress.io'),
    linkCypressIO: () => cy.contains('a', 'cypress.io'),
    linkGitHub: () => cy.contains('a', 'GitHub'),
    linkUtilities: () => cy.contains('a', 'Utilities'),
    linkCypressAPI: () => cy.contains('a', 'Cypress API'),

    // Commands section and sub-links
    linkQuerying: () => cy.contains('a', 'Querying'),
    linkGet: () => cy.contains('a', 'get'),
    linkContains: () => cy.contains('a', 'contains'),
    linkWithin: () => cy.contains('a', 'within'),
    linkRoot: () => cy.contains('a', 'root'),

    linkTraversal: () => cy.contains('a', 'Traversal'),
    linkChildren: () => cy.contains('a', 'children'),
    linkClosest: () => cy.contains('a', 'closest'),
    linkEq: () => cy.contains('a', 'eq'),
    linkFilter: () => cy.contains('a', 'filter'),
    linkFind: () => cy.contains('a', 'find'),
    linkFirst: () => cy.contains('a', 'first'),
    linkLast: () => cy.contains('a', 'last'),
    linkNext: () => cy.contains('a', 'next'),
    linkNextAll: () => cy.contains('a', 'nextAll'),
    linkNextUntil: () => cy.contains('a', 'nextUntil'),
    linkNot: () => cy.contains('a', 'not'),
    linkParent: () => cy.contains('a', 'parent'),
    linkParents: () => cy.contains('a', 'parents'),
    linkParentsUntil: () => cy.contains('a', 'parentsUntil'),
    linkPrev: () => cy.contains('a', 'prev'),
    linkPrevAll: () => cy.contains('a', 'prevAll'),
    linkPrevUntil: () => cy.contains('a', 'prevUntil'),
    linkSiblings: () => cy.contains('a', 'siblings'),

    linkActions: () => cy.contains('a', 'Actions'),
    linkType: () => cy.contains('a', 'type'),
    linkFocus: () => cy.contains('a', 'focus'),
    linkBlur: () => cy.contains('a', 'blur'),
    linkClear: () => cy.contains('a', 'clear'),
    linkSubmit: () => cy.contains('a', 'submit'),
    linkClick: () => cy.contains('a', 'click'),
    linkDblclick: () => cy.contains('a', 'dblclick'),
    linkRightclick: () => cy.contains('a', 'rightclick'),
    linkCheck: () => cy.contains('a', 'check'),
    linkUncheck: () => cy.contains('a', 'uncheck'),
    linkSelect: () => cy.contains('a', 'select'),
    linkScrollIntoView: () => cy.contains('a', 'scrollIntoView'),
    linkScrollTo: () => cy.contains('a', 'scrollTo'),
    linkTrigger: () => cy.contains('a', 'trigger'),

    linkWindow: () => cy.contains('a', 'Window'),
    linkWindowCommand: () => cy.contains('a', 'window'),
    linkDocument: () => cy.contains('a', 'document'),
    linkTitle: () => cy.contains('a', 'title'),

    linkViewport: () => cy.contains('a', 'Viewport'),
    linkViewportCommand: () => cy.contains('a', 'viewport'),

    linkLocation: () => cy.contains('a', 'Location'),
    linkHash: () => cy.contains('a', 'hash'),
    linkLocationCommand: () => cy.contains('a', 'location'),
    linkUrl: () => cy.contains('a', 'url'),

    linkNavigation: () => cy.contains('a', 'Navigation'),
    linkGo: () => cy.contains('a', 'go'),
    linkReload: () => cy.contains('a', 'reload'),
    linkVisit: () => cy.contains('a', 'visit'),

    linkAssertions: () => cy.contains('a', 'Assertions'),
    linkShould: () => cy.contains('a', 'should'),
    linkAnd: () => cy.contains('a', 'and'),
    linkExpect: () => cy.contains('a', 'expect'),
    linkAssert: () => cy.contains('a', 'assert'),

    linkMisc: () => cy.contains('a', 'Misc'),
    linkExec: () => cy.contains('a', 'exec'),
    linkFocused: () => cy.contains('a', 'focused'),
    linkScreenshot: () => cy.contains('a', 'screenshot'),
    linkWrap: () => cy.contains('a', 'wrap'),

    linkConnectors: () => cy.contains('a', 'Connectors'),
    linkEach: () => cy.contains('a', 'each'),
    linkIts: () => cy.contains('a', 'its'),
    linkInvoke: () => cy.contains('a', 'invoke'),
    linkSpread: () => cy.contains('a', 'spread'),
    linkThen: () => cy.contains('a', 'then'),

    linkAliasing: () => cy.contains('a', 'Aliasing'),
    linkAs: () => cy.contains('a', 'as'),

    linkWaiting: () => cy.contains('a', 'Waiting'),
    linkWait: () => cy.contains('a', 'wait'),

    linkNetworkRequests: () => cy.contains('a', 'Network Requests'),
    linkServer: () => cy.contains('a', 'server'),
    linkRequest: () => cy.contains('a', 'request'),
    linkRoute: () => cy.contains('a', 'route'),

    linkFiles: () => cy.contains('a', 'Files'),
    linkFixtures: () => cy.contains('a', 'fixtures'),
    linkReadFile: () => cy.contains('a', 'readFile'),
    linkWriteFile: () => cy.contains('a', 'writeFile'),

    linkStorage: () => cy.contains('a', 'Storage'),
    linkClearLocalStorage: () => cy.contains('a', 'clearLocalStorage'),
    linkGetAllLocalStorage: () => cy.contains('a', 'getAllLocalStorage'),
    linkClearAllLocalStorage: () => cy.contains('a', 'clearAllLocalStorage'),
    linkGetAllSessionStorage: () => cy.contains('a', 'getAllSessionStorage'),
    linkClearAllSessionStorage: () => cy.contains('a', 'clearAllSessionStorage'),

    linkCookies: () => cy.contains('a', 'Cookies'),
    linkClearCookies: () => cy.contains('a', 'clearCookies'),

    linkSpiesStubsClocks: () => cy.contains('a', 'Spies, Stubs & Clocks'),
    linkSpy: () => cy.contains('a', 'spy'),
    linkStub: () => cy.contains('a', 'stub'),
    linkClock: () => cy.contains('a', 'clock'),
    linkTick: () => cy.contains('a', 'tick'),

    // Utilities section
    linkUnderscore: () => cy.contains('a', '_'),
    linkDollar: () => cy.contains('a', '$'),
    linkBlob: () => cy.contains('a', 'Blob'),
    linkMinimatch: () => cy.contains('a', 'minimatch'),
    linkPromise: () => cy.contains('a', 'Promise'),

    // Cypress API section
    linkCommandsAPI: () => cy.contains('a', 'Commands'),
    linkCookiesAPI: () => cy.contains('a', 'Cookies'),
    linkServerAPI: () => cy.contains('a', 'Server'),
    linkArchAPI: () => cy.contains('a', 'arch'),
    linkConfigAPI: () => cy.contains('a', 'config'),
    linkDomAPI: () => cy.contains('a', 'dom'),
    linkEnvAPI: () => cy.contains('a', 'env'),
    linkLogAPI: () => cy.contains('a', 'log'),
    linkPlatformAPI: () => cy.contains('a', 'platform'),
    linkVersionAPI: () => cy.contains('a', 'version'),
  }

  // Public getters and interaction methods for all elements
  get Header() { return this.#elements.header() }
  get SubHeader() { return this.#elements.subHeader() }
  get MainSection() { return cy.get('main, .main-section, [data-cy="main-section"]') }
  get LinkDocs() { return this.#elements.linkDocs() }
  get LinkCypressIO() { return this.#elements.linkCypressIO() }
  get LinkGitHub() { return this.#elements.linkGitHub() }
  get LinkUtilities() { return this.#elements.linkUtilities() }
  get LinkCypressAPI() { return this.#elements.linkCypressAPI() }
  get LinkQuerying() { return this.#elements.linkQuerying() }
  get LinkGet() { return this.#elements.linkGet() }
  get LinkContains() { return this.#elements.linkContains() }
  get LinkWithin() { return this.#elements.linkWithin() }
  get LinkRoot() { return this.#elements.linkRoot() }
  get LinkTraversal() { return this.#elements.linkTraversal() }
  get LinkChildren() { return this.#elements.linkChildren() }
  get LinkClosest() { return this.#elements.linkClosest() }
  get LinkEq() { return this.#elements.linkEq() }
  get LinkFilter() { return this.#elements.linkFilter() }
  get LinkFind() { return this.#elements.linkFind() }
  get LinkFirst() { return this.#elements.linkFirst() }
  get LinkLast() { return this.#elements.linkLast() }
  get LinkNext() { return this.#elements.linkNext() }
  get LinkNextAll() { return this.#elements.linkNextAll() }
  get LinkNextUntil() { return this.#elements.linkNextUntil() }
  get LinkNot() { return this.#elements.linkNot() }
  get LinkParent() { return this.#elements.linkParent() }
  get LinkParents() { return this.#elements.linkParents() }
  get LinkParentsUntil() { return this.#elements.linkParentsUntil() }
  get LinkPrev() { return this.#elements.linkPrev() }
  get LinkPrevAll() { return this.#elements.linkPrevAll() }
  get LinkPrevUntil() { return this.#elements.linkPrevUntil() }
  get LinkSiblings() { return this.#elements.linkSiblings() }
  get LinkActions() { return this.#elements.linkActions() }
  get LinkType() { return this.#elements.linkType() }
  get LinkFocus() { return this.#elements.linkFocus() }
  get LinkBlur() { return this.#elements.linkBlur() }
  get LinkClear() { return this.#elements.linkClear() }
  get LinkSubmit() { return this.#elements.linkSubmit() }
  get LinkClick() { return this.#elements.linkClick() }
  get LinkDblclick() { return this.#elements.linkDblclick() }
  get LinkRightclick() { return this.#elements.linkRightclick() }
  get LinkCheck() { return this.#elements.linkCheck() }
  get LinkUncheck() { return this.#elements.linkUncheck() }
  get LinkSelect() { return this.#elements.linkSelect() }
  get LinkScrollIntoView() { return this.#elements.linkScrollIntoView() }
  get LinkScrollTo() { return this.#elements.linkScrollTo() }
  get LinkTrigger() { return this.#elements.linkTrigger() }
  get LinkWindow() { return this.#elements.linkWindow() }
  get LinkWindowCommand() { return this.#elements.linkWindowCommand() }
  get LinkDocument() { return this.#elements.linkDocument() }
  get LinkTitle() { return this.#elements.linkTitle() }
  get LinkViewport() { return this.#elements.linkViewport() }
  get LinkViewportCommand() { return this.#elements.linkViewportCommand() }
  get LinkLocation() { return this.#elements.linkLocation() }
  get LinkHash() { return this.#elements.linkHash() }
  get LinkLocationCommand() { return this.#elements.linkLocationCommand() }
  get LinkUrl() { return this.#elements.linkUrl() }
  get LinkNavigation() { return this.#elements.linkNavigation() }
  get LinkGo() { return this.#elements.linkGo() }
  get LinkReload() { return this.#elements.linkReload() }
  get LinkVisit() { return this.#elements.linkVisit() }
  get LinkAssertions() { return this.#elements.linkAssertions() }
  get LinkShould() { return this.#elements.linkShould() }
  get LinkAnd() { return this.#elements.linkAnd() }
  get LinkExpect() { return this.#elements.linkExpect() }
  get LinkAssert() { return this.#elements.linkAssert() }
  get LinkMisc() { return this.#elements.linkMisc() }
  get LinkExec() { return this.#elements.linkExec() }
  get LinkFocused() { return this.#elements.linkFocused() }
  get LinkScreenshot() { return this.#elements.linkScreenshot() }
  get LinkWrap() { return this.#elements.linkWrap() }
  get LinkConnectors() { return this.#elements.linkConnectors() }
  get LinkEach() { return this.#elements.linkEach() }
  get LinkIts() { return this.#elements.linkIts() }
  get LinkInvoke() { return this.#elements.linkInvoke() }
  get LinkSpread() { return this.#elements.linkSpread() }
  get LinkThen() { return this.#elements.linkThen() }
  get LinkAliasing() { return this.#elements.linkAliasing() }
  get LinkAs() { return this.#elements.linkAs() }
  get LinkWaiting() { return this.#elements.linkWaiting() }
  get LinkWait() { return this.#elements.linkWait() }
  get LinkNetworkRequests() { return this.#elements.linkNetworkRequests() }
  get LinkServer() { return this.#elements.linkServer() }
  get LinkRequest() { return this.#elements.linkRequest() }
  get LinkRoute() { return this.#elements.linkRoute() }
  get LinkFiles() { return this.#elements.linkFiles() }
  get LinkFixtures() { return this.#elements.linkFixtures() }
  get LinkReadFile() { return this.#elements.linkReadFile() }
  get LinkWriteFile() { return this.#elements.linkWriteFile() }
  get LinkStorage() { return this.#elements.linkStorage() }
  get LinkClearLocalStorage() { return this.#elements.linkClearLocalStorage() }
  get LinkGetAllLocalStorage() { return this.#elements.linkGetAllLocalStorage() }
  get LinkClearAllLocalStorage() { return this.#elements.linkClearAllLocalStorage() }
  get LinkGetAllSessionStorage() { return this.#elements.linkGetAllSessionStorage() }
  get LinkClearAllSessionStorage() { return this.#elements.linkClearAllSessionStorage() }
  get LinkCookies() { return this.#elements.linkCookies() }
  get LinkClearCookies() { return this.#elements.linkClearCookies() }
  get LinkSpiesStubsClocks() { return this.#elements.linkSpiesStubsClocks() }
  get LinkSpy() { return this.#elements.linkSpy() }
  get LinkStub() { return this.#elements.linkStub() }
  get LinkClock() { return this.#elements.linkClock() }
  get LinkTick() { return this.#elements.linkTick() }
  get LinkUnderscore() { return this.#elements.linkUnderscore() }
  get LinkDollar() { return this.#elements.linkDollar() }
  get LinkBlob() { return this.#elements.linkBlob() }
  get LinkMinimatch() { return this.#elements.linkMinimatch() }
  get LinkPromise() { return this.#elements.linkPromise() }
  get LinkCommandsAPI() { return this.#elements.linkCommandsAPI() }
  get LinkCookiesAPI() { return this.#elements.linkCookiesAPI() }
  get LinkServerAPI() { return this.#elements.linkServerAPI() }
  get LinkArchAPI() { return this.#elements.linkArchAPI() }
  get LinkConfigAPI() { return this.#elements.linkConfigAPI() }
  get LinkDomAPI() { return this.#elements.linkDomAPI() }
  get LinkEnvAPI() { return this.#elements.linkEnvAPI() }
  get LinkLogAPI() { return this.#elements.linkLogAPI() }
  get LinkPlatformAPI() { return this.#elements.linkPlatformAPI() }
  get LinkVersionAPI() { return this.#elements.linkVersionAPI() }

  // Interaction methods for all elements
  clickHeader() { return this.#elements.header().click() }
  clickSubHeader() { return this.#elements.subHeader().first().click() }
  clickMainSection() { return this.MainSection.click() }
  clickLinkDocs() { return this.#elements.linkDocs().click() }
  clickLinkCypressIO() { return this.#elements.linkCypressIO().click() }
  clickLinkGitHub() { return this.#elements.linkGitHub().click() }
  clickLinkUtilities() { return this.#elements.linkUtilities().click() }
  clickLinkCypressAPI() { return this.#elements.linkCypressAPI().click() }
  clickLinkQuerying() { return this.#elements.linkQuerying().click({force: true}) }
  clickLinkGet() { return this.#elements.linkGet().click() }
  clickLinkContains() { return this.#elements.linkContains().click() }
  clickLinkWithin() { return this.#elements.linkWithin().click() }
  clickLinkRoot() { return this.#elements.linkRoot().click() }
  clickLinkTraversal() { return this.#elements.linkTraversal().click({force: true}) }
  clickLinkChildren() { return this.#elements.linkChildren().click() }
  clickLinkClosest() { return this.#elements.linkClosest().click() }
  clickLinkEq() { return this.#elements.linkEq().click({force: true}) }
  clickLinkFilter() { return this.#elements.linkFilter().click() }
  clickLinkFind() { return this.#elements.linkFind().click() }
  clickLinkFirst() { return this.#elements.linkFirst().click() }
  clickLinkLast() { return this.#elements.linkLast().click() }
  clickLinkNext() { return this.#elements.linkNext().click() }
  clickLinkNextAll() { return this.#elements.linkNextAll().click() }
  clickLinkNextUntil() { return this.#elements.linkNextUntil().click() }
  clickLinkNot() { return this.#elements.linkNot().click() }
  clickLinkParent() { return this.#elements.linkParent().click() }
  clickLinkParents() { return this.#elements.linkParents().click() }
  clickLinkParentsUntil() { return this.#elements.linkParentsUntil().click() }
  clickLinkPrev() { return this.#elements.linkPrev().click() }
  clickLinkPrevAll() { return this.#elements.linkPrevAll().click() }
  clickLinkPrevUntil() { return this.#elements.linkPrevUntil().click() }
  clickLinkSiblings() { return this.#elements.linkSiblings().click() }
  clickLinkActions() { return this.#elements.linkActions().click({force: true}) }
  clickLinkType() { return this.#elements.linkType().click() }
  clickLinkFocus() { return this.#elements.linkFocus().click() }
  clickLinkBlur() { return this.#elements.linkBlur().click() }
  clickLinkClear() { return this.#elements.linkClear().click() }
  clickLinkSubmit() { return this.#elements.linkSubmit().click() }
  clickLinkClick() { return this.#elements.linkClick().click() }
  clickLinkDblclick() { return this.#elements.linkDblclick().click() }
  clickLinkRightclick() { return this.#elements.linkRightclick().click() }
  clickLinkCheck() { return this.#elements.linkCheck().click() }
  clickLinkUncheck() { return this.#elements.linkUncheck().click() }
  clickLinkSelect() { return this.#elements.linkSelect().click() }
  clickLinkScrollIntoView() { return this.#elements.linkScrollIntoView().click() }
  clickLinkScrollTo() { return this.#elements.linkScrollTo().click() }
  clickLinkTrigger() { return this.#elements.linkTrigger().click() }
  clickLinkWindow() { return this.#elements.linkWindow().click({force: true}) }
  clickLinkWindowCommand() { return this.#elements.linkWindowCommand().click() }
  clickLinkDocument() { return this.#elements.linkDocument().click() }
  clickLinkTitle() { return this.#elements.linkTitle().click() }
  clickLinkViewport() { return this.#elements.linkViewport().click({force: true}) }
  clickLinkViewportCommand() { return this.#elements.linkViewportCommand().click() }
  clickLinkLocation() { return this.#elements.linkLocation().click({force: true}) }
  clickLinkHash() { return this.#elements.linkHash().click() }
  clickLinkLocationCommand() { return this.#elements.linkLocationCommand().click() }
  clickLinkUrl() { return this.#elements.linkUrl().click() }
  clickLinkNavigation() { return this.#elements.linkNavigation().click({force: true}) }
  clickLinkGo() { return this.#elements.linkGo().click() }
  clickLinkReload() { return this.#elements.linkReload().click() }
  clickLinkVisit() { return this.#elements.linkVisit().click() }
  clickLinkAssertions() { return this.#elements.linkAssertions().click({force: true}) }
  clickLinkShould() { return this.#elements.linkShould().click() }
  clickLinkAnd() { return this.#elements.linkAnd().click() }
  clickLinkExpect() { return this.#elements.linkExpect().click() }
  clickLinkAssert() { return this.#elements.linkAssert().click() }
  clickLinkMisc() { return this.#elements.linkMisc().click({force: true}) }
  clickLinkExec() { return this.#elements.linkExec().click() }
  clickLinkFocused() { return this.#elements.linkFocused().click() }
  clickLinkScreenshot() { return this.#elements.linkScreenshot().click() }
  clickLinkWrap() { return this.#elements.linkWrap().click() }
  clickLinkConnectors() { return this.#elements.linkConnectors().click({force: true}) }
  clickLinkEach() { return this.#elements.linkEach().click() }
  clickLinkIts() { return this.#elements.linkIts().click() }
  clickLinkInvoke() { return this.#elements.linkInvoke().click() }
  clickLinkSpread() { return this.#elements.linkSpread().click() }
  clickLinkThen() { return this.#elements.linkThen().click() }
  clickLinkAliasing() { return this.#elements.linkAliasing().click({force: true}) }
  clickLinkAs() { return this.#elements.linkAs().click({force: true}) }
  clickLinkWaiting() { return this.#elements.linkWaiting().click({force: true}) }
  clickLinkWait() { return this.#elements.linkWait().click() }
  clickLinkNetworkRequests() { return this.#elements.linkNetworkRequests().click({force: true}) }
  clickLinkServer() { return this.#elements.linkServer().click() }
  clickLinkRequest() { return this.#elements.linkRequest().click() }
  clickLinkRoute() { return this.#elements.linkRoute().click() }
  clickLinkFiles() { return this.#elements.linkFiles().click({force: true}) }
  clickLinkFixtures() { return this.#elements.linkFixtures().click() }
  clickLinkReadFile() { return this.#elements.linkReadFile().click() }
  clickLinkWriteFile() { return this.#elements.linkWriteFile().click() }
  clickLinkStorage() { return this.#elements.linkStorage().click({force: true}) }
  clickLinkClearLocalStorage() { return this.#elements.linkClearLocalStorage().click() }
  clickLinkGetAllLocalStorage() { return this.#elements.linkGetAllLocalStorage().click() }
  clickLinkClearAllLocalStorage() { return this.#elements.linkClearAllLocalStorage().click() }
  clickLinkGetAllSessionStorage() { return this.#elements.linkGetAllSessionStorage().click() }
  clickLinkClearAllSessionStorage() { return this.#elements.linkClearAllSessionStorage().click() }
  clickLinkCookies() { return this.#elements.linkCookies().click({force: true}) }
  clickLinkClearCookies() { return this.#elements.linkClearCookies().click() }
  clickLinkSpiesStubsClocks() { return this.#elements.linkSpiesStubsClocks().click({force: true}) }
  clickLinkSpy() { return this.#elements.linkSpy().click() }
  clickLinkStub() { return this.#elements.linkStub().click() }
  clickLinkClock() { return this.#elements.linkClock().click() }
  clickLinkTick() { return this.#elements.linkTick().click() }
  clickLinkUnderscore() { return this.#elements.linkUnderscore().click() }
  clickLinkDollar() { return this.#elements.linkDollar().click() }
  clickLinkBlob() { return this.#elements.linkBlob().click() }
  clickLinkMinimatch() { return this.#elements.linkMinimatch().click() }
  clickLinkPromise() { return this.#elements.linkPromise().click() }
  clickLinkCommandsAPI() { return this.#elements.linkCommandsAPI().click() }
  clickLinkCookiesAPI() { return this.#elements.linkCookiesAPI().click({force: true}) }
  clickLinkServerAPI() { return this.#elements.linkServerAPI().click() }
  clickLinkArchAPI() { return this.#elements.linkArchAPI().click() }
  clickLinkConfigAPI() { return this.#elements.linkConfigAPI().click() }
  clickLinkDomAPI() { return this.#elements.linkDomAPI().click() }
  clickLinkEnvAPI() { return this.#elements.linkEnvAPI().click() }
  clickLinkLogAPI() { return this.#elements.linkLogAPI().click() }
  clickLinkPlatformAPI() { return this.#elements.linkPlatformAPI().click() }
  clickLinkVersionAPI() { return this.#elements.linkVersionAPI().click() }

  // Robust dropdown openers for parent menus
  openCommandsDropdown() {
    cy.contains('li.dropdown', 'Commands').trigger('mouseover');
  }
  openActionsDropdown() {
    cy.contains('li.dropdown', 'Actions').trigger('mouseover');
  }
  openWindowDropdown() {
    cy.contains('li.dropdown', 'Window').trigger('mouseover');
  }
  openAssertionsDropdown() {
    cy.contains('li.dropdown', 'Assertions').trigger('mouseover');
  }
  openMiscDropdown() {
    cy.contains('li.dropdown', 'Misc').trigger('mouseover');
  }
  openConnectorsDropdown() {
    cy.contains('li.dropdown', 'Connectors').trigger('mouseover');
  }
  openAliasingDropdown() {
    cy.contains('li.dropdown', 'Aliasing').trigger('mouseover');
  }
  openWaitingDropdown() {
    cy.contains('li.dropdown', 'Waiting').trigger('mouseover');
  }
  openNetworkRequestsDropdown() {
    cy.contains('li.dropdown', 'Network Requests').trigger('mouseover');
  }
  openFilesDropdown() {
    cy.contains('li.dropdown', 'Files').trigger('mouseover');
  }
  openStorageDropdown() {
    cy.contains('li.dropdown', 'Storage').trigger('mouseover');
  }
  openCookiesDropdown() {
    cy.contains('li.dropdown', 'Cookies').trigger('mouseover');
  }
  openSpiesStubsClocksDropdown() {
    cy.contains('li.dropdown', 'Spies, Stubs & Clocks').trigger('mouseover');
  }
  openUtilitiesDropdown() {
  cy.contains('li.dropdown', /Utilities/i).trigger('mouseover');
  }
  openCypressAPIDropdown() {
  cy.contains('li.dropdown', /Cypress API/i).trigger('mouseover');
  }
}