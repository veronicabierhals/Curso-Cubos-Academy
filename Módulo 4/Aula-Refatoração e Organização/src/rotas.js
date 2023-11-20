const express = require('express');
const rotas = express()

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bancoDeDados = require('./conexao');
const filtroLogin = require('./intermediarios/filtroLogin');

rotas.post('/usuarios', async (req, res) => {
  const {
      nome,
      email,
      senha,
      telefone
  } = req.body;

  if (!nome) {
      return res
          .status(404)
          .json("O campo nome é obrigatório");
  }

  if (!email) {
      return res
          .status(404)
          .json("O campo email é obrigatório");
  }

  if (!senha) {
      return res
          .status(404)
          .json("O campo senha é obrigatório");
  }

  if (!telefone) {
      return res.status(404)
          .json("O campo telefone é obrigatório");
  }

  try {
      const quantidadeUsuarios = await bancoDeDados('usuarios')
          .where({ email }).first();

      if (quantidadeUsuarios) {
          return res.status(400).json("O email já existe");
      }

      const senhaCriptografada = await bcrypt.hash(senha, 10);

      const usuario = await bancoDeDados('usuarios')
          .insert({
              nome,
              email,
              senha: senhaCriptografada,
              telefone
          }).returning('*');

      if (!usuario) {
          return res
              .status(400).json("O usuário não foi cadastrado.");
      }

      return res.status(200).json(usuario[0]);
  } catch (error) {
      return res.status(400).json(error.message);
  }
});

rotas.post('/login', async (req, res) => {
  const {
      email,
      senha
  } = req.body;

  if (!email || !senha) {
      return res.status(404).json('É obrigatório email e senha');
  }

  try {
      const usuario = await bancoDeDados('usuarios').where({ email }).first();

      if (!usuario) {
          return res.status(404).json('O usuario não foi encontrado');
      }

      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

      if (!senhaCorreta) {
          return res.status(400).json("Email e senha não confere");
      }

      const token = jwt.sign({ id: usuario.id }, hash, { expiresIn: '8h' });

      const { senha: _, ...dadosUsuario } = usuario;

      return res.status(200).json({
          usuario: dadosUsuario,
          token
      });
  } catch (error) {
      return res.status(400).json(error.message);
  }
});

rotas.use(filtroLogin);

rotas.get('/perfil', async (req, res) => {
  return res
      .status(200)
      .json(req.usuario);
});

rotas.put('/perfil', async (req, res) => {
  let {
      nome,
      email,
      senha,
      telefone
  } = req.body;
  const { id } = req.usuario;

  if (!nome && !email && !senha && !telefone) {
      return res.status(404)
          .json('É obrigatório informar ao menos um campo para atualização');
  }

  try {
      const usuarioExiste = await bancoDeDados('usuarios').where({ id }).first();

      if (!usuarioExiste) {
          return res.status(404).json('Usuario não encontrado');
      }

      if (senha) {
          senha = await bcrypt.hash(senha, 10);
      }

      if (email !== req.usuario.email) {
          const emailUsuarioExiste = await bancoDeDados('usuarios')
              .where({ email })
              .first();

          if (emailUsuarioExiste) {
              res
                  .status(404).json('O Email já existe.');
              return;
          }
      }

      const usuarioAtualizado = await bancoDeDados('usuarios')
          .where({ id })
          .update({
              nome,
              email,
              senha,
              telefone
          });

      if (!usuarioAtualizado) {
          return res.status(400).json("O usuario não foi atualizado");
      }

      res
          .status(200)
          .json('Usuario foi atualizado com sucesso.');
      return;
  } catch (error) {
      return res.status(400).json(error.message);
  }
});

module.exports = rotas
