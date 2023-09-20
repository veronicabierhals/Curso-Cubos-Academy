const bancoDeDados = {
  identificadorInstrutor: 3,
  identificadorAula: 2,
  instrutores: [
    { id: 1, nome: "Guido", email: "guido@email.com", status: true },
    { id: 2, nome: "Dani", email: "dani@email.com", status: true },
  ],
  aulas: [
    {
      id: 1,
      instrutor_id: 1,
      titulo: "Primeiro Servidor",
      descricao: "Construindo o primeiro servidor",
    },
  ],
};

module.exports = bancoDeDados;
