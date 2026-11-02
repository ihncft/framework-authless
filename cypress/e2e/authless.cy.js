describe('Testes E2E - Framework AuthLess', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500') // Porta onde você servir o HTML
  })

  it('Tarefa 1: Acesso Baixa Fricção (IP Seguro)', () => {
    cy.get('select').select('192.168.1.100')
    cy.get('input[type="password"]').type('1234')
    cy.contains('button', 'Acessar').click()
    cy.contains('Acesso Liberado!').should('be.visible')
  })

  it('Tarefa 2: Gatilho Condicional de MFA (IP Externo)', () => {
    cy.get('select').select('203.0.113.5')
    cy.get('input[type="password"]').type('1234')
    cy.contains('button', 'Acessar').click()
    
    // Verifica se a interface adaptou e pediu o MFA
    cy.contains('Mudança de rede detectada').should('be.visible')
    cy.get('input[placeholder="000000"]').type('000000')
    cy.contains('button', 'Validar').click()
    cy.contains('Acesso Liberado!').should('be.visible')
  })

  it('Tarefa 3: Recuperação Delegada (Self-Service)', () => {
    cy.contains('button', 'Perdi meu MFA').click()
    cy.contains('Solicitação enviada ao gestor').should('be.visible')
  })
})