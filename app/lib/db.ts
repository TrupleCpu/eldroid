import Database from "better-sqlite3";
import path from 'path'

const dbPath = path.resolve(process.cwd(), "db/database.sqlite");
const db = new Database(dbPath);

export function runQuery<T>(query: string, params: any[] = []): T[] {
    const stmt = db.prepare(query);

    if(query.trim().toUpperCase().startsWith("SELECT")){
        return stmt.all(...params) as T[];
    } else {
        const info = stmt.run(...params);
        return [info as unknown as T];
    }
}

export default db;