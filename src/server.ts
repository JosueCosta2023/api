import express from "express";
import cors from "cors";
import { routes } from "./routes";
import { errorHandling } from "./middlewares/error-handling";

const PORT = 3333;
const app = express();

// Middleware CORS
app.use(
  cors({
    origin: ["http://192.168.2.111:8081"], // Substitua com as origens permitidas
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(routes);

app.use(errorHandling);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
