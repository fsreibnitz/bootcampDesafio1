/// <reference types="cypress" />
let Chance = require("chance");
let chance = new Chance()
context('Cadastro', () => {
	let email = chance.email()
	//console.log(email)
	it('Acessar formulário para cadastro de usuário', () => {
	
		// cy.request(Cypress.config().baseUrl)
		cy.visit(Cypress.config().baseUrl)
		cy.get('a[href*=my-account]').contains('Sign in').click()
		cy.get('input[id*=email_create').type(email)
		cy.get('button[id*=SubmitCreate]').click()
	})

	it('Cadastrar usuário', () => {
		cy.get('input[id*=id_gender1]').click()
		cy.get('input[id*=customer_firstname]').type(chance.first({gender: 'male'}))
		cy.get('input[id*=customer_lastname]').type(chance.last())
		// cy.get('input[id*=email]').focus().contains(email)
		cy.get('input[id*=passwd]').type(chance.word({length:6}))
		cy.get('select[id*=days]').select(chance.integer({min:1, max:28}).toString())
		cy.get('select[id*=months]').select(chance.month())
		cy.get('select[id*=years]').select(chance.birthday().getFullYear().toString())
		cy.get('input[id*=company]').type(chance.company())
		cy.get('input[id*=address1]').type(chance.address())
		cy.get('input[id*=address2]').type(chance.address())
		cy.get('input[id*=city]').type(chance.city())
		cy.get('select[id*=id_state]').select('Florida')
		cy.get('input[id=postcode]').type(chance.zip())
		cy.get('textarea[id*=other]').type(chance.sentence({words: 30}))
		cy.get('input[id=phone]').type(chance.phone())
		cy.get('input[id=phone_mobile]').type(chance.phone())
		cy.get('button[id=submitAccount]').click()
		// http://automationpractice.com/index.php?controller=my-account

	})

	it('Verificar se foi cadastrado com sucesso e está logado', () => {
		cy.url().should('eq','http://automationpractice.com/index.php?controller=my-account')
	})

})