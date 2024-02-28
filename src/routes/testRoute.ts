import express from "express";
import { getMemberTest } from "../controllers/memberController";

const router = express.Router(); //ใช้สร้างเส้นทาง
// http://localhost:4000/api/member
router.get("/test", getMemberTest);

export = router;