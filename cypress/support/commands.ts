// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('callGrok', (prompt: string) => {
  const apiKey = Cypress.env('GROK_API_KEY');
  const fullPrompt = `Generate a Cypress test script in TypeScript to automate the following task on a test website: ${prompt}. Return only the raw Cypress commands, no explanations, no prose, just the code with proper syntax (e.g., cy.visit(), cy.get().type()). Use single quotes and semicolons.`;
  return cy.request({
    method: 'POST',
    url: 'https://api.x.ai/v1/chat/completions',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: {
      model: 'grok-2',
      messages: [
        { role: 'system', content: 'You are Grok, built by xAI. You are an expert in Cypress and TypeScript, tasked with generating test automation scripts.' },
        { role: 'user', content: fullPrompt },
      ],
    },
  }).then((response) => {
    const data = response.body as { choices: { message: { content: string } }[] };
    return data.choices[0].message.content.trim(); // Cleaned-up code string
  });
});