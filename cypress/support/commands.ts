/// <reference types="cypress" />

/*
 * This command was created to compare the salary differences against expected f
 * To get rid of character such as nbsp and trim if need
 */
Cypress.Commands.add('compareText', (element, expectedValue): any => element
  .invoke('text')
  .invoke('replace', /\u00a0/g, ' ')
  .invoke('replace', '*', '')
  .invoke('trim')
  .should('eq', expectedValue));

Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe) =>
  new Cypress.Promise(resolve => $iframe.on('load', () => resolve($iframe.contents().find('body')))))
