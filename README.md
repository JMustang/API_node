# API_node

<center>
<img src="/node.png" alt="node" width="200"/>
</center>

## Criando API REST com TypeScript + NodejS, + SQLite CRUD Completo.

### Comandos

1. yarn init -y => iniciado o package.json usando o yarn
2. yarn add typescript ts-node ts-node-dev @types/node => adicionando o typescript e suas tipagens
3. yarn add express @types/express => adicionando o express e suas tipagens
4. yarn add sqlite3 @types/sqlite3 => adicionando o sqlite3 e suas tipagens
5. yarn add dotenv @types/dotenv => adicionando o dotenv e suas tipagens
6. yarn add body-parser @types/body-parser => adicionando o body-parser

### express

```js
const express require ('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Holla')
    app.listen(PORT, () =>{
        console.log(`Servidor rodando na porta http://localhost:${PORT}`)
    })
})
```
