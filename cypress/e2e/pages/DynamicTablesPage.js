class DynamicTablesPage {
  // Locators
 getMainHeading() {
  return cy.get('.is-size-3')
 }

 getTableHeadings() {
  return cy.get('.DynamicTables_tableHeaders__k53h5').children()
 }

 getTableRows() {
  return cy.get('tbody').children()
 }

 getButton(button) {
  switch (button) {
    case "ADD PRODUCT":
      return cy.get('#add_product_btn')
    case "X":
      return cy.get('.delete')
    case "SUBMIT":
      return cy.get('#submit')
    default:
      throw new Error(`Invalid Button!`)
  }
}

 getTotalAmount() {
  return cy.get('#total_amount')
 }

 getModal() {
  return cy.get('.modal-card')
 }

 getModalHeading() {
  return cy.get('#modal_title')
 }

 getLabel(label) {
  switch (label) {
    case "Please select the quantity":
      return cy.get('[for="product_quantity"]')
    case "Please enter the name of the product":
      return cy.get('[for="product_name"]')
    case "Please enter the price of the product":
      return cy.get('[for="product_price"]')
    default:
      throw new Error(`Invalid Label!`)
  }
 }

 getInputBox(box) {
  switch (box) {
    case "Quantity":
      return cy.get('#quantity')
    case "Product":
      return cy.get('#product')
    case "Price":
      return cy.get('#price')
    default:
      throw new Error(`Invalid Input Box!`)
  }
 }

 getLastRow() {
    return cy.get('tbody').children().last()
 }
 // Methods

}

export default DynamicTablesPage;