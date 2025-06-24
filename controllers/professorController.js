import professores from "../models/database.js";

export const getProfessores = (req, res) => {
  res.json(professores);
};

export const createProfessor = (req, res) => {
  const novo = req.body;
  novo.id = Date.now();
  professores.push(novo);
  res.status(201).json(novo);
};

export const updateProfessor = (req, res) => {
  const id = Number(req.params.id);
  const index = professores.findIndex(p => p.id === id);
  if (index !== -1) {
    professores[index] = { ...professores[index], ...req.body };
    return res.json(professores[index]);
  }
  res.status(404).json({ message: "Professor não encontrado" });
};

export const deleteProfessor = (req, res) => {
  const id = Number(req.params.id);
  const index = professores.findIndex(p => p.id === id);
  if (index !== -1) {
    const removido = professores.splice(index, 1);
    return res.json(removido[0]);
  }
  res.status(404).json({ message: "Professor não encontrado" });
};
