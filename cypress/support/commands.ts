/// <reference types="cypress" />
import faker from 'faker';
import GetnadaPage from './page_objects/GetnadaPage';

Cypress.Commands.add('compareText', (element, expectedValue): any =>
  element
    .invoke('text')
    .invoke('replace', /\u00a0/g, ' ')
    .invoke('replace', '*', '')
    .invoke('trim')
    .should('eq', expectedValue),
);

Cypress.Commands.add(
  'iframe', // @ts-ignore
  { prevSubject: 'element' },
  ($iframe) => new Cypress.Promise((resolve) => $iframe.on('load', () => resolve($iframe.contents().find('body')))),
);
Cypress.Commands.add('typeRandom', { prevSubject: 'element' }, (element, text, type): any => {
  const random = '_RANDOM_';
  if (text.indexOf(random) > -1) {
    switch (type) {
      case 'number':
        text = text.replace(random, faker.random.number(length).toString());
        break;
      case 'words':
        text = text.replace(random, faker.random.words(length));
        break;
      case 'email':
        text = text.replace(random, faker.internet.email().toLowerCase());
        break;
      default:
        text = text.replace(random, faker.random.word());
        break;
    }
  }
  cy.wrap(element).clear().type(text);
});
