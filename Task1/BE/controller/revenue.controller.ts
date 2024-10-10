// src/controllers/fileController.ts
import { Request, Response } from "express";
import { handleFileUpload, getData, upload } from "../service/file.services";

export const uploadFile = async (req: Request, res: Response) => {
  try {
    const jsonData = await handleFileUpload(req);
    res.json({ message: "File uploaded successfully!", data: jsonData });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const fetchData = async (req: Request, res: Response) => {
  const { startTime, endTime, page = 1, limit = 10 } = req.query;

  try {
    const result = await getData(
      startTime as string,
      endTime as string,
      Number(page),
      Number(limit)
    );
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ message: "Error reading JSON file", error });
  }
};
