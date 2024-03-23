import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("session.db")

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS sessions (localID TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)",
                [],
                () => resolve(),
                (_, error) => {
                    reject(error);
                }
            )
        })
    })
    return promise
}