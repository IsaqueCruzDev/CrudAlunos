const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '6163',
  database: 'alunosdatabase'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

// Obter todos os alunos
app.get('/alunos', (req, res) => {
  connection.query('SELECT * FROM alunos', (error, results) => {
    if (error) {
      console.error('Erro ao obter os alunos:', error);
      res.status(500).json({ error: 'Erro ao obter os alunos' });
      return;
    }
    res.json(results);
  });
});

// Excluir um aluno pelo ID
app.delete('/alunos/:id', (req, res) => {
  const alunoId = req.params.id;

  connection.query('DELETE FROM alunos WHERE id = ?', [alunoId], (error, result) => {
    if (error) {
      console.error('Erro ao excluir o aluno:', error);
      res.status(500).json({ error: 'Erro ao excluir o aluno' });
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Aluno não encontrado' });
      return;
    }

    res.sendStatus(204);
  });
});

// Inserir um novo aluno
app.post('/alunos', (req, res) => {
  const { nome, email } = req.body;

  connection.query('INSERT INTO alunos (nome, email) VALUES (?, ?)', [nome, email], (error, result) => {
    if (error) {
      console.error('Erro ao inserir o aluno:', error);
      res.status(500).json({ error: 'Erro ao inserir o aluno' });
      return;
    }

    res.status(201).json({ message: 'Aluno inserido com sucesso' });
  });
});

// Obter um aluno pelo ID
app.get('/alunos/:id', (req, res) => {
  const alunoId = req.params.id;

  connection.query('SELECT * FROM alunos WHERE id = ?', [alunoId], (error, results) => {
    if (error) {
      console.error('Erro ao obter o aluno:', error);
      res.status(500).json({ error: 'Erro ao obter o aluno' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'Aluno não encontrado' });
      return;
    }

    res.json(results[0]);
  });
});
