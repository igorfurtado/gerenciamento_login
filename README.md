
# Gerenciamento de login

API REST capaz de gerenciar o login de um usuário, desenvolvida durante o curso do ProgramadorBR. Nesta API, é possível a criação de um novo usuário por meio do método POST e de schemas no Mongoose; além disso, é possível a validação do login tomando-se como referência os dados json existentes no MongoDB.

Para maximização da segurança, as senhas são criptografadas por meio do método hash, utilizando-se da biblioteca bcrypt.

Para garantir a validação dos dados informados pelo usuário, a biblioteca @hapi/joi foi utilizada. Por meio desta, garante-se que os critérios requeridos para criação dos parâmetros "senha", "email" e "password" sejam obedecidos.

A validação de login a cada nova requisição do usuário para o back-end é feita por meio de token, gerado a partir da biblioteca jsonwebtoken. Cada token, único, referencia o usuário sem a necessidade de ficar mandando requisições com seus dados. O token é composto por uma string e um segredo (informado pelo usuário como segurança).

Na API REST, não existe a camada de view. Para utilizar esta API junto de um front-end, requisições fetch podem ser utilizadas pelo javascript.

Variáveis de ambiente também foram utilizadas neste projeto por meio da biblioteca dotenv.

Diante dessas features, se faz necessária a instalação das seguintes dependências:

```bash
  npm install express mongoose jsonwebtoken dotenv bcryptjs @hapi/joi
```

## Tech Stack

**Client:** Insomnia, JS, MongoDB Compass;

**Server:** Express, Mongoose.

