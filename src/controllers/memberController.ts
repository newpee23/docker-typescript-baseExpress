import { Request, Response } from "express";
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

export const createMember = async (req: Request, res: Response): Promise<void> => {
    const conn = getDbConnection();
    try {
        const { name, subname } = req.body;
        if (!name || !subname) {
            res.status(400).json({ message: 'Name and subname are required' });
            return;
        }
        
        const selectQuery = 'SELECT * FROM member WHERE name = ? AND subname = ?';
        const [count] = await conn.query(selectQuery, [name, subname]);

        if (Array.isArray(count) && count.length > 0) {
            if (count.length > 0) {
                res.status(400).json({ message: 'Name and subname combination already exists' });
                return;
            }
        }

        const insertQuery = 'INSERT INTO member (name, subname) VALUES (?, ?)';
        await conn.query(insertQuery, [name, subname]);
        
        res.status(201).json({ message: 'Member created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    } finally {
        conn.end();
    }
}

export const deleteMemberById = async (req: Request, res: Response): Promise<void> => {
    const conn = getDbConnection();
    try {
        const memberId = req.params.id; // สมมติว่า ID ถูกส่งมาผ่าน URL parameter
        if (!memberId) {
            res.status(400).json({ message: 'ID is required' });
            return;
        }

        const deleteQuery = 'DELETE FROM member WHERE id = ?';
        const [result] = await conn.query(deleteQuery, [memberId]);

        if ('affectedRows' in result && result.affectedRows > 0) {
            res.status(200).json({ message: 'Member deleted successfully' });
            return;
        } 

        res.status(404).json({ message: 'Member not found' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    } finally {
        conn.end();
    }
}

export const updateMemberById = async (req: Request, res: Response): Promise<void> => {
    const conn = getDbConnection();
    try {
        const memberId = req.params.id; // สมมติว่า ID ถูกส่งมาผ่าน URL parameter
        if (!memberId) {
            res.status(400).json({ message: 'ID is required' });
            return;
        }

        const { name, subname } = req.body;
        if (!name || !subname) {
            res.status(400).json({ message: 'Name and subname are required' });
            return;
        }

        const updateQuery = 'UPDATE member SET name = ?, subname = ? WHERE id = ?';
        const [result] = await conn.query(updateQuery, [name, subname, memberId]);

        if ('affectedRows' in result && result.affectedRows > 0) {
            res.status(200).json({ message: 'Member updated successfully' });
        } else {
            res.status(404).json({ message: 'Member not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    } finally {
        conn.end();
    }
}

