import express from "express";
import {createTable} from "./database.js"
import databaseRoute from "./routes/databaseRoute.js"
import cors from "cors";
const door = 8080;

const app = express();
app.use(express.json());
app.use(cors())

app.use("/tasks", databaseRoute)

createTable();

app.listen(door, ()=>{
    console.log(`Servidor conectado na porta ${door}`)
})