// Importar bibliotecas necessárias
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Configurar conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuário',
  password: 'senha',
  database: 'nome_do_banco_de_dados'
});

// Criar aplicativo Express
const app = express();

// Configurar middleware para analisar os dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para a tela inicial
app.get('/', (req, res) => {
  res.send('<h1>Tela Inicial</h1><button onclick="window.location.href=\'/adicionar-dados\'">Adicionar Dados</button>');
});

// Rota para o formulário de adicionar dados
app.get('/adicionar-dados', (req, res) => {
  res.send(`
    <h1>Adicionar Dados</h1>
    <form action="/salvar-dados" method="POST">
      <label for="usuario">Usuário:</label>
      <input type="text" name="usuario" required><br><br>
      <label for="gaylord">Gaylord:</label>
      <input type="text" name="gaylord" required><br><br>
      <label for="pedido">Pedido:</label>
      <input type="text" name="pedido" required><br><br>
      <label for="produto">Produto:</label>
      <input type="text" name="produto" required><br><br>
      <label for="destino">Destino:</label>
      <input type="text" name="destino" required><br><br>
      <button type="submit">Salvar</button>
    </form>
  `);
});

// Rota para salvar os dados no banco de dados
app.post('/salvar-dados', (req, res) => {
  const { usuario, gaylord, pedido, produto, destino } = req.body;

  const query = 'INSERT INTO tabela_dados (usuario, gaylord, pedido, produto, destino) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [usuario, gaylord, pedido, produto, destino], (error, results) => {
    if (error) throw error;
    res.send('<h1>Dados salvos com sucesso!</h1>');
  });
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log('Aplicativo iniciado na porta 3000');
});
