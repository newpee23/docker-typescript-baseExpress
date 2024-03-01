import { Request, Response } from "express";

export const getMemberTestApi = async (req: Request, res: Response): Promise<void> => {
    try {
        res.json({
            status: "testApi!!!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}