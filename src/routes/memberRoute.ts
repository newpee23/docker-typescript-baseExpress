import express from "express";
import { createMember, deleteMemberById, getMemberAll, getMemberById, updateMemberById } from "../controllers/memberController";

const router = express.Router(); //ใช้สร้างเส้นทาง
// http://localhost:4000/api/member
router.get("/member", getMemberAll);
// http://localhost:4000/api/member/:memberId
router.get("/member/:memberId", getMemberById);
// http://localhost:4000/api/member
router.post("/member", createMember);
// http://localhost:4000/api/member/:id
router.delete("/member/:id", deleteMemberById);
// http://localhost:4000/api/member/:id
router.put("/member/:id", updateMemberById);

export = router;