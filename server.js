import express from "express";
import config from "./config";
import morgan from "morgan";
import cors from  "cors";
import apiRouter from "./routes";
const app = express();
app.use("/api", express.json());

app.get("/", (req, res) => {
  res.send("working");
});

app.use(cors());

app.use(morgan("dev"));

app.use(express.static("public"));
 

  app.use("/api", apiRouter);



app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});





app.listen(config.port || 5000, () => {
  console.log(`Server listening on port ${config.port}...`);
});
