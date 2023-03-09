# Desafio Técnico - Backend

O propósito desse desafio é a criação de uma API que fará a persistência de dados de um quadro de kanban. Esse quadro possui listas, que contém cards.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de validação e testes.

### 📋 Pré-requisitos

É necessário o Node.js instalado na máquina. A versão mínina requerida é a v16.0.0
Para verificar se você já possui utilize o comando abaixo:

```
node -v
v18.14.0
```

Para instalar, caso não o possua instalado, faça o download no site oficial do Node [clicando aqui](https://nodejs.org/en/download/):

### 🔧 Instalação

Com o node instalado em sua máquina, é hora de instalar as dependências do projeto.
Execute o seguinte comando no terminal:

```bash
npm install
npm run dev

# ou, se você utiliza Yarn:

yarn dev

```
### 🔧 Variáveis de ambiente

Para rodar a aplicação é necessário a definição das seguintes variáveis de ambiente:

**`.env`**

```bash

SALT_KEY=<SECRET_KEY_FOR_JWT>
DEFAULT_LOGIN=<DEFAULT_USERNAME>
DEFAULT_PASSWORD=<DEFAULT_PASSWORD>

```

Abra http://localhost:5000 no seu browser para ver o resultado.

## 🚀 Rodando o Frontend

Um frontend de exemplo foi disponibilizado na pasta app.

Para rodá-lo, faça:

```console
> cd app
> yarn
> yarn start
```

## 📦 Docker compose

Para rodar as aplicações via Docker, execute o seguinte comando:

```bash

docker-compose up -d

```

## 📌 Observações & Pendências
- Refatorar para uso do InversifyJS como container de inversão de controle/injeção de dependência;
- Implementação do Jest para testes unitários;
- Diversas outras refatorações...