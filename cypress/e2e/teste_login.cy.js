describe('Teste de Login', () => {
    it('Deve fazer login com erro', () => {
      cy.visit('/');
      cy.get('#username').type('usuario_teste');
      cy.get('#password').type('senha123');
      cy.get('#submit').click();
      cy.get('#error').should('have.text', 'Your username is invalid!');
    });
  });