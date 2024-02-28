import { Request, Response } from "express"; // Import types for Request and Response

export const getMemberAll = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("sss")
        res.json({
            status: "success!!!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

export const getMemberTest = async (req: Request, res: Response): Promise<void> => {
    try {
        res.json({
            status: "test!!!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}