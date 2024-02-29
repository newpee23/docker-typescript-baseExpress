import { Request, Response } from "express"; // Import types for Request and Response
import { getDbConnection } from "../config/dbconnect";


export const getMemberAll = async (req: Request, res: Response): Promise<void> => {
    const conn = getDbConnection();
    try {
        const [rows] = await conn.query("SELECT * FROM member");
        res.json({
            result: rows,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    } finally {
        conn.end();
    }
}

export const getMemberById = async (req: Request, res: Response): Promise<void> => {
    const conn = getDbConnection();
    try {
        const memberId: string = req.params.memberId;
        const [rows] = await conn.query("SELECT * FROM member WHERE id = ?",[memberId]);
        res.json({
            result: rows,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    } finally {
        conn.end();
    }
}

export const getMemberTestApi = async (req: Request, res: Response): Promise<void> => {
    try {
        res.json({
            status: "test!!!sss",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}