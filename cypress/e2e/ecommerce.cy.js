require('cypress-xpath');
describe('Ecommerce', () => {
  beforeEach(() => {
    // Code to run before each test (e.g., visit the shein app)
    cy.visit('https://us.shein.com/');
    cy.wait(22000);
    cy.get('.c-coupon-box > .iconfont').then(($couponBox) => {
      if ($couponBox.length > 0) {
          // The first alert box is present
          // Perform actions or assertions specific to this alert box
          cy.get('.c-coupon-box').should('be.visible');
          cy.get('.c-coupon-box > .iconfont').click();
      } else {
          // The first alert box is not present, check for the second one
          cy.get('.dialog-top__close-btn').then(($closeBtn) => {
              if ($closeBtn.length > 0) {
                  // The second alert box is present
                  // Perform actions or assertions specific to this alert box
                  cy.get('.dialog-top__close-btn').should('exist');
                  cy.get('.dialog-top__close-btn').click();
              } else {
                  // Neither alert box is present or the structure has changed
                  cy.log('No alert box found.');
              }
          });
      }
  });
  
  });
  //add product test case
  it('Add product', () => {
    cy.get('.div-input').type("iphone 11 case");
    cy.get('.search-btn > .suiiconfont-critical').click();
    cy.xpath('//*[@id="product-list-v2"]/div/div[2]/div[2]/section/div[1]/section[1]/div[2]/div[3]/button').click();
    cy.get('.j-product-intro__size-radio-spopover_87_index18 > .product-intro__size-radio > .product-intro__size-radio-inner').click();
    cy.get('.quantity-box > input').type("5");
    cy.get('.goods-btn__add > span').click();

  })

});