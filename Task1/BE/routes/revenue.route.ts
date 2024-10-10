// src/routes/fileRoutes.ts
import express from "express";
import { uploadFile, fetchData } from "../controller/revenue.controller";
import { upload } from "../service/file.services";

const router = express.Router();

router.post("/upload", upload.any(), uploadFile);
router.get("/data", fetchData);

export default router;
