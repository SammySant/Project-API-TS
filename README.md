1- npm init -y(cria o package json, cria arquivos de controle e dependências);
2- npm i express(instalando o express);
3- npm i -D nodemon(instala dependências para rodar o server);
4- npm i -D typescript @types/node @types/express ts-node-dev(tipagens);
5- npx tsc --init;
6- npm i sqlite3 typeorm(instala dependências de banco de dados e typeorm);
7- npm i bcrypt
8- npm i -D @types/bcrypt

Habilitar essas opções no tsconfig.json para usar as tipagens do TS
"experimentalDecorators": true,
    "emitDecoratorMetadata": true,

Usar prisma é melhor para construção de banco de dados em typescript

Começar pelo Model > Controller > 