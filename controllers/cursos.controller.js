const listaDeCursos = require("../models/cursos.json");
const fs = require("fs");

const CursoController = {
  cadastrarCurso(req, res) {
    const { titulo, descricao, professor } = req.body;

    if (!titulo || !descricao || !professor) {
      return res
        .status(400)
        .json({ error: "Você precisa passar os atributos corretamente" });
    }

    listaDeCursos.push({
      titulo,
      descricao,
      professor,
    });

    fs.writeFileSync("./models/cursos.json", JSON.stringify(listaDeCursos)); //o fs já busca a partir da raiz
  },
};

module.exports = CursoController;


