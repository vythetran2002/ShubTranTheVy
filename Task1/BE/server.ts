import express from "express";
import fileRoutes from "./routes/revenue.route";
const cors = require("cors");
const PORT = 2000;

const app = express();
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000", // task1 domain
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use("/api", fileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
