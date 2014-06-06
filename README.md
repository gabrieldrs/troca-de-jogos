# Troca de jogos (FSI)

Todas as alterações serão publicadas aqui

## Como usar sabagaça

Baixa e instala essas 3 coisas:

  * [Node.js](http://nodejs.org)
  * [Grunt](http://gruntjs.com/):
   Abre o cmd e digita `npm install -g grunt-cli`
  * [Bower](http://bower.io): 
   Abre o cmd e digita `[sudo] npm install -g bower`

## Baixar as últimas atualizações

```bash
git clone git@github.com:gabrieldrs/troca-de-jogos.git
npm install && bower install
```

Enquanto trabalha no projeto rode:

`grunt`

E ele irá compilar os scss!

## Directory Structure

  * `scss/_settings.scss`: Configurações do foundation
  * `scss/app.scss`: Configurações dos módulos do foundation
  * `scss/custom.scss`: Configurações particulares
