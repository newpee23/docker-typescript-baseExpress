import express from "express";
import { getMemberTestApi } from "../controllers/testController";

const router = express.Router(); //ใช้สร้างเส้นทาง
// http://localhost:4000/api/member
router.get("/test", getMemberTestApi);

export = router;