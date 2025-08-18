import { BasePage } from './BasePage.po';

/**
 * Page Object for the Network Requests page in Cypress Kitchen Sink
 * Covers all workflows for cy.request(), cy.intercept(), network buttons, comment divs, code blocks, and external links
 */
export default class NetworkRequestsPage extends BasePage {
	getNetworkRequestsSection() {
		return cy.get(this.#elements.networkRequestsSection);
	}
	getCyRequestHeader() {
		return cy.get(this.#elements.cyRequestHeader);
	}
	getCyRequestCode() {
		return cy.get(this.#elements.cyRequestCode).eq(0);
	}
	getCyInterceptHeader() {
		return cy.get(this.#elements.cyInterceptHeader);
	}
	// Private selectors for all relevant elements
	#elements = {
		networkRequestsSection: '#network-requests',
		cyRequestHeader: "h4#request:has(a[href='https://on.cypress.io/request'])",
		cyRequestCode: "pre code.javascript.hljs",
		cyInterceptHeader: "h4#http:has(a[href='https://on.cypress.io/intercept'])",
		cyInterceptCode: "pre code.javascript.hljs",
		networkBtn: '.network-btn',
		networkComment: '.network-comment',
		networkPostBtn: '.network-post',
		networkPostComment: '.network-post-comment',
		networkPutBtn: '.network-put',
		networkPutComment: '.network-put-comment',
		moreInfoLinks: [
			"a[href='https://on.cypress.io/api']"
		]
	};

	// Getters for elements
	// ...existing code...
	getCyInterceptCode() {
		return cy.get(this.#elements.cyInterceptCode).eq(1);
	}
	getNetworkBtn() {
		return cy.get(this.#elements.networkBtn);
	}
	getNetworkComment() {
		return cy.get(this.#elements.networkComment);
	}
	getNetworkPostBtn() {
		return cy.get(this.#elements.networkPostBtn);
	}
	getNetworkPostComment() {
		return cy.get(this.#elements.networkPostComment);
	}
	getNetworkPutBtn() {
		return cy.get(this.#elements.networkPutBtn);
	}
	getNetworkPutComment() {
		return cy.get(this.#elements.networkPutComment);
	}
	getMoreInfoLinks() {
		return this.#elements.moreInfoLinks.map(sel => cy.get(sel));
	}

	// Workflow methods
	// ...existing code...

	assertNetworkRequestsSectionVisible() {
		this.getNetworkRequestsSection().should('be.visible');
	}
	assertCyRequestHeaderVisible() {
		this.getCyRequestHeader().should('be.visible');
	}
	assertCyRequestCodeVisible() {
		this.getCyRequestCode().should('be.visible');
	}
	assertCyInterceptHeaderVisible() {
		this.getCyInterceptHeader().should('be.visible');
	}
	assertCyInterceptCodeVisible() {
		this.getCyInterceptCode().should('be.visible');
	}

	clickNetworkBtn() {
		this.getNetworkBtn().should('be.visible').click();
	}
	assertNetworkCommentVisible() {
		this.getNetworkComment().should('be.visible');
	}
	clickNetworkPostBtn() {
		this.getNetworkPostBtn().should('be.visible').click();
	}
	assertNetworkPostCommentVisible() {
		this.getNetworkPostComment().should('be.visible');
	}
	clickNetworkPutBtn() {
		this.getNetworkPutBtn().should('be.visible').click();
	}
	assertNetworkPutCommentVisible(message: string) {
		this.getNetworkPutComment().should('contain', message);
	}

	clickMoreInfoLinks() {
		this.getMoreInfoLinks().forEach(link => link.should('be.visible').click({ multiple: true }));
	}

	// Full workflow for all network requests examples
	runAllNetworkRequestsWorkflows() {
	// ...existing code...
		this.assertNetworkRequestsSectionVisible();
		this.assertCyRequestHeaderVisible();
		this.assertCyRequestCodeVisible();
		cy.request('https://jsonplaceholder.cypress.io/comments')
			.should((response) => {
				expect(response.status).to.eq(200);
				expect(response.body).to.have.length(500);
				expect(response).to.have.property('headers');
				expect(response).to.have.property('duration');
			});
		cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
			.its('body.0')
			.then((user) => {
				expect(user).property('id').to.be.a('number');
				cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
					userId: user.id,
					title: 'Cypress Test Runner',
					body: 'Fast, easy and reliable testing for anything that runs in a browser.',
				});
			})
			.then((response) => {
				expect(response).property('status').to.equal(201);
				expect(response).property('body').to.contain({ title: 'Cypress Test Runner' });
				expect(response.body).property('id').to.be.a('number').and.to.be.gt(100);
				expect(response.body).property('userId').to.be.a('number');
			});
		cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
			.its('body.0')
			.as('user')
			.then(function () {
				cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
					userId: this.user.id,
					title: 'Cypress Test Runner',
					body: 'Fast, easy and reliable testing for anything that runs in a browser.',
				})
				.its('body').as('post');
			})
			.then(function () {
				expect(this.post, 'post has the right user id').property('userId').to.equal(this.user.id);
			});
		this.assertCyInterceptHeaderVisible();
		this.assertCyInterceptCodeVisible();
		let message = 'whoa, this comment does not exist';
		cy.intercept('GET', '**/comments/*').as('getComment');
		this.clickNetworkBtn();
		cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304]);
		this.assertNetworkCommentVisible();
		cy.intercept('POST', '**/comments').as('postComment');
		this.clickNetworkPostBtn();
		cy.wait('@postComment').should(({ request, response }) => {
			expect(request.body).to.include('email');
			expect(request.headers).to.have.property('content-type');
			expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()');
		});
		this.assertNetworkPostCommentVisible();
		cy.intercept({ method: 'PUT', url: '**/comments/*' }, {
			statusCode: 404,
			body: { error: message },
			headers: { 'access-control-allow-origin': '*' },
			delayMs: 500,
		}).as('putComment');
		this.clickNetworkPutBtn();
		cy.wait('@putComment');
		this.assertNetworkPutCommentVisible(message);
		this.clickMoreInfoLinks();
	}
}
