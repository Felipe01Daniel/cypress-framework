class LoginForm {
  elements = {
    usernameInput: () => cy.get('#username'),
    passwordInput: () => cy.get('#password'),
    submitBtn: () => cy.get('#submit'),
    loginFeedbackSucess: () => cy.get('.post-title')
  }

  typeUsername(text) {
    if(!text) return;
    this.elements.usernameInput().type(text)
  }

  typePassword(text) {
    if(!text) return;
    this.elements.passwordInput().type(text)
  }

  clicksubmit() {
    this.elements.submitBtn().click()
  }
}
const loginForm = new LoginForm()

describe('Login de usuario', () => {
  describe('Login com sucesso', () => {
    const input = {
      username: 'student',
      password: 'Password123'
    }

    it('Given que o usuário acessa a página de login', () => {
      cy.visit('/')
    })

    it('When ele preenche o campo "${input.username}"', () => {
      loginForm.typeUsername(input.username)
    })

    it('And preenche o campo  "${input.password}"', () => {
      loginForm.typePassword(input.password)
    })

    it('And clica no botão submit', () => {
      loginForm.clicksubmit()
    })

    it('And deve ver a mensagem de boas-vindas "Logged In Successfully"', () => {
      loginForm.elements.loginFeedbackSucess().should('have.text', 'Logged In Successfully')
    })

  })
})