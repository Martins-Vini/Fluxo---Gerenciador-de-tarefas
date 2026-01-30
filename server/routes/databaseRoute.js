import express from "express";
import { connectionWithDataBank } from "../database.js";

const router = express.Router();

router.get('/teste', (req,res)=>{
    res.send(`Conexão de rota correta`)
})

router.get('/', async (req , res) =>{
    const db = await connectionWithDataBank();
    const tasks = await db.all("SELECT * FROM tasks");
    const formattedTask = tasks.map(t => ({...t, isCompleted: !!t.isCompleted}))
    res.json(formattedTask)
})

router.post('/', async (req, res)=>{
    const { id, title, description, isCompleted } = req.body;
    const db = await connectionWithDataBank();
    await db.run(
        "INSERT INTO tasks (id, title, description, isCompleted) VALUES (?, ?, ?, ?)",
        [id, title, description, isCompleted ? 1 : 0]
    );
    res.status(201).send("Salvo com sucesso");
})

export default router;