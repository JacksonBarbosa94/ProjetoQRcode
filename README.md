# Projeto QRCode e Gerador de Senhas 🚀

CLI em Node.js para utilidades de e-commerce, com duas funcionalidades principais:

- 📱 Geração de QR Code no terminal a partir de um link.
- 🔐 Geração de senha aleatória baseada em variáveis de ambiente.

## 🧰 Tecnologias

- Node.js (ES Modules)
- prompt
- chalk
- qrcode-terminal

## 🗂️ Estrutura do Projeto

```text
src/
	index.js                     # Entrada da aplicacao
	prompts/
		prompt-main.js             # Menu principal
		prompts-qrcode.js          # Perguntas para gerar QR Code
	services/
		qr-code/
			create.js                # Fluxo de criacao de QR Code
			handle.js                # Geracao do QR Code
		password/
			create.js                # Fluxo de criacao de senha
			handle.js                # Logica de geracao de senha
```

## ✅ Requisitos

- Node.js 18+
- npm

## ⚙️ Instalacao

1. Instale as dependencias:

```bash
npm install
```

2. Crie um arquivo .env na raiz do projeto.

Exemplo de .env:

```env
UPPERCASE_LETTERS=TRUE
LOWERCASE_LETTERS=TRUE
NUMBERS=TRUE
SPECIAL_CHARACTERS=FALSE
PASSWORD_LENGTH=12
```

## ▶️ Como Executar

Execute:

```bash
npm start
```

Ao iniciar, o menu principal sera exibido com as opcoes:

- 1 - QRCODE 📲
- 2 - PASSWORD 🔑

## 🔄 Fluxo de Uso

### 1. QRCODE 📲

- Informe o link que deseja converter.
- Escolha o tipo de QR Code no prompt.
- O QR Code sera exibido no terminal.

### 2. PASSWORD 🔑

- A senha e gerada com base no .env.
- O tamanho da senha vem de PASSWORD_LENGTH.
- Os grupos de caracteres aceitos sao controlados por:
	- UPPERCASE_LETTERS
	- LOWERCASE_LETTERS
	- NUMBERS
	- SPECIAL_CHARACTERS

Se nenhuma categoria estiver habilitada, o programa gera erro para evitar senha vazia.

## 📜 Script Disponivel

- npm start: inicia a CLI carregando variaveis do arquivo .env

## 📝 Observacoes

- As variaveis booleanas no .env devem estar como TRUE (maiusculo) para serem consideradas ativas.
- Este projeto foi pensado para uso em terminal (interface textual interativa).
..