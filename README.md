
# Gerenciamento de login

API REST capaz de gerenciar o login de um usuário, desenvolvida durante o curso do ProgramadorBR. Nesta API, é possível a criação de um novo usuário por meio de método POST e de schemas com Mongoose, além da validação do login com base nos objetos json existentes no Mongo db.

Para maximização da segurança, as senhas são criptografadas por meio de método do tipo hash, utilizando-se da biblioteca bcrypt.

Para garantir a validação dos dados informados pelo usuário, a biblioteca @hapi/joi foi utilizada. Por meio desta, garante-se que os critérios requeridos para criação dos parâmetros "senha", "email" e "password" sejam obedecidos.

A validação de login a cada nova requisição do usuário para o back-end é feita por meio de token , gerado a partir da biblioteca jsonwebtoken. Cada token único referencia o usuário sem necessidade de ficar mandando requisições com seus dados. O token é composto por uma string única e um segredo (informado pelo usuário como segurança).

Na API REST, não existe a camada de view. Para utilizar esta API junto de um front-end, requisições fetch podem ser utilizadas pelo javascript.

Variáveis de ambiente também foram utilizadas neste projeto por meio da biblioteca dotenv.

Diante dessas features, se faz necessária a instalação das seguintes dependências:

```bash
  npm install express mongoose jsonwebtoken dotenv bcryptjs @hapi/joi
```




## Tech Stack

**Client:** Insomnia, JS, MongoDB Compass;

**Server:** Express, Mongoose.

