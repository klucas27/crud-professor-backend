import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import professorRoutes from "./routes/professorRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api/professores", professorRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
