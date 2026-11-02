# Framework AuthLess: Segurança versus Usabilidade

Repositório oficial do protótipo desenvolvido para o artigo acadêmico **"Segurança versus Usabilidade: Proposta e Avaliação de um Framework de Autenticação Multifator (MFA) Focado no Comportamento do Usuário"**.

Este projeto implementa uma prova de conceito (PoC) de um fluxo de autenticação contextual e usável, utilizando **Vue.js**, **FastAPI (Python)** e testes End-to-End com **Cypress**.

---

## 📌 Sobre o Projeto e as Tarefas

O framework foi desenhado para mitigar a fadiga de segurança e desencorajar práticas compensatórias (como anotar senhas em post-its). O sistema avalia o risco do acesso em tempo real e adapta a interface. O protótipo demonstra três cenários principais (Tarefas de Validação):

*   **Tarefa 1 (Acesso Cotidiano - Baixa Fricção):** Ocorre quando o usuário acessa de uma rede corporativa conhecida (IP Seguro). O sistema exige apenas a credencial rápida (PIN), dispensando o MFA para não interromper a produtividade diária.
*   **Tarefa 2 (Mudança de Contexto - Gatilho MFA):** Quando o usuário tenta acessar de uma rede desconhecida (IP Externo), o motor de risco aciona o gatilho condicional e exige o Fator Secundário (MFA).
*   **Tarefa 3 (Recuperação Delegada - Self-Service):** Simula a perda do dispositivo do MFA. Em vez de abrir um chamado demorado no suporte de TI (HelpDesk), o usuário aciona um fluxo de liberação delegada enviado diretamente ao gestor imediato.

---

## 🛠️ Tecnologias Utilizadas

*   **Frontend:** HTML5, Vue.js 3 (via CDN)
*   **Backend:** Python 3, FastAPI, Uvicorn
*   **Testes Automatizados (E2E):** Cypress

---

## 🚀 Como Rodar o Projeto Localmente

Certifique-se de ter o **Python 3** e o **Node.js** instalados na sua máquina.
Clone este repositório:
```bash
git clone [https://github.com/ihncft/framework-authless.git](https://github.com/ihncft/framework-authless.git)
cd framework-authless

Abra um terminal e configure o ambiente virtual para rodar a API:
Bash

# Cria e ativa o ambiente virtual
python3 -m venv venv
source venv/bin/activate  # No Windows use: venv\Scripts\activate

# Instala as dependências do backend
pip install fastapi uvicorn pydantic

# Inicia o servidor do backend na porta 8000
uvicorn api:app --reload


Abra uma segunda aba no terminal (não feche a do backend) e inicie um servidor HTTP local para hospedar a interface:
Bash

# Inicia o servidor na porta 5500
python3 -m http.server 5500

Acesse http://localhost:5500 no seu navegador para utilizar o sistema manualmente.

Para provar a estabilidade do fluxo, utilizamos testes E2E. Abra uma terceira aba no terminal:
Bash

# Instala o Cypress (caso seja a primeira vez na máquina)
npm install

# Abre a interface de testes do Cypress
npx cypress open

Na janela do Cypress, selecione E2E Testing, escolha seu navegador e clique no arquivo authless.cy.js. Os testes executarão as 3 tarefas automaticamente.
