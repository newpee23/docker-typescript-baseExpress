import express from "express";
import { getMemberAll } from "../controllers/memberController";

const router = express.Router(); //ใช้สร้างเส้นทาง
// http://localhost:4000/api/member
router.get("/member", getMemberAll);

export = router;