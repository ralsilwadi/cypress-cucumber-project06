import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DynamicTablesPage from "../pages/DynamicTablesPage";

const dynamicTablesPage = new DynamicTablesPage()


Given(/^the user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
});

Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
  dynamicTablesPage.getMainHeading().should('have.text', heading)
});

Then(/^the user should see the table with the headers below$/, (dataTable) => {
  const arr = dataTable.rawTable.flat()

  dynamicTablesPage.getTableHeadings().each(($el, index) => {
    cy.wrap($el).should('have.text', arr[index])
  })
  
});

Then(/^the user should see the table with the rows below$/, (dataTable) => {
  const arr = dataTable.rawTable
  
	dynamicTablesPage.getTableRows().each(($el, outerIndex) => {
    cy.wrap($el).children().each(($cell, innerIndex) => {
      cy.wrap($cell).should('have.text', arr[outerIndex][innerIndex])
    })
  })
});

Then(/^the user should see the "([^"]*)" button is enabled$/, (button) => {
  dynamicTablesPage.getButton(button).should('be.visible').and('be.enabled')
});

Then(/^the user should see the "([^"]*)" text displayed$/, (value) => {
  dynamicTablesPage.getTotalAmount().should('have.text', value)
});

Then(/^the user should see the "([^"]*)" modal with its heading$/, (heading) => {
  dynamicTablesPage.getModalHeading().should('be.visible').and('have.text', heading)
});

When(/^the user clicks on the "([^"]*)" button$/, (button) => {
  dynamicTablesPage.getButton(button).click()
});

Then(/^the user should see the "([^"]*)" label$/, (label) => {
  dynamicTablesPage.getLabel(label).should('have.text', label)
});

Then(/^the user should see the "([^"]*)" input box is enabled$/, (box) => {
  dynamicTablesPage.getInputBox(box).should('be.enabled')
});

Then(/^the user should not see the "([^"]*)" modal$/, (heading) => {
  dynamicTablesPage.getModal().should('not.exist')
});

Then(/^the user enters the "([^"]*)" as "([^"]*)"$/, (box, input) => {
  dynamicTablesPage.getInputBox(box).type(input)
});

Then(/^the user should see the table with the new row below$/, (dataTable) => {
  const arr = dataTable.rawTable.flat()

  dynamicTablesPage.getLastRow().children().each(($cell, index) => {
    cy.wrap($cell).should('have.text', arr[index])
  })
});


