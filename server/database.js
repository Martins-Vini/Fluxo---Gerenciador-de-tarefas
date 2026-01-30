import sqlite3 from "sqlite3";
import {open} from "sqlite";

export async function connectionWithDataBank(){
    return open(
        {
            filename: "./data.db",
            driver: sqlite3.Database
        }
    )


}

export async function createTable(){
    const initDb = await connectionWithDataBank();
    await initDb.exec(`
        CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY_KEY, title TEXT NOT NULL, description TEXT, isCompleted INTEGER)
    `)

}