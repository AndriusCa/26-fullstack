import express from "express";
const router = express.Router();
import { api } from "./api/api.js";

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  return res.send('SERVER: home page');
});

app.use('/api', api);

app.get('*', (req, res) => {
  return res.send('SERVER: 404 page');
});

app.use((req, res, next) => {
  return res.status(404).send("Sorry can't find that!")
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something broke!")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});