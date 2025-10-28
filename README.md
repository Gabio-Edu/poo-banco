# POO Banco

Projeto com finalidades educacionais, usado na disciplina de Programação Orientada a Objetos (POO) do curso de Análise e Desenvolvimento de Sistemas (ADS) no IFPI.

O objetivo é praticar conceitos de POO (classes, encapsulamento, métodos e interação entre objetos) através de um exemplo simples de contas bancárias e operações básicas.

## Tecnologias
- Linguagem: TypeScript
- Bundler: Parcel
- Execução: Navegador (utilizando `prompt`/`alert` para interação)

## Pré-requisitos
- `Node.js` (recomendado 18+)
- `npm`

## Como executar
1. Instale as dependências:
   - `npm install`
2. Inicie o servidor de desenvolvimento:
   - `npm run start`
3. Acesse no navegador:
   - `http://localhost:1234` (porta padrão do Parcel)

## Estrutura do projeto
- `source/index.html`: ponto de entrada HTML
- `source/index.ts`: menu interativo com `prompt`/`alert`
- `source/conta.ts`: classe `Conta` (número, titular, saldo e operações)
- `source/banco.ts`: classe `Banco` (cadastro e busca de contas)
- `source/operacoes.ts`: funções para cadastrar conta, saque, depósito, transferência e verificação de saldo

## Observações
- Os dados ficam apenas em memória (não há backend ou persistência); ao recarregar a página, as contas são perdidas.
- A interação é feita via `prompt`/`alert`, adequada para fins didáticos e simplicidade.
- Para gerar build de produção, você pode usar diretamente o Parcel:
  - `npx parcel build source/index.html` (os arquivos gerados vão para `dist/`)
