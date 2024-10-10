// src/services/fileService.ts
const multer = require("multer");
import xlsx from "xlsx";
import fs from "fs";
import path from "path";
import { RevenueDetail } from "../interface/Record.interface";
import { filterRecordByTimeDuration } from "../utils/filterRecordsByTime";
import { getTotalRevenue } from "../utils/getTotalRevenue";

const uploadDir = path.join(__dirname, "../uploads");
const jsonFilePath = path.join(uploadDir, "fileJSON.json");

// Thiết lập multer
const storage = multer.diskStorage({
  destination: (req: Request, file: any, cb: any) => {
    cb(null, uploadDir);
  },
  filename: (req: Request, file: any, cb: any) => {
    cb(null, "fileUpload.xlsx");
  },
});

const fileFilter = (req: Request, file: any, cb: any) => {
  const allowedTypes: string[] = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .xlsx format allowed!"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

export const handleFileUpload = async (req: any) => {
  if (!req.files || req.files.length === 0) {
    throw new Error("No files uploaded");
  }

  const firstFile = req.files[0];
  const files = fs.readdirSync(uploadDir);
  const sameFiles = files.filter((file) =>
    file.startsWith(firstFile.originalname)
  );

  let latestFile = firstFile.path;
  if (sameFiles.length > 1) {
    const latestFileName = sameFiles.reduce((latest, current) => {
      const latestPath = path.join(uploadDir, latest);
      const currentPath = path.join(uploadDir, current);
      return fs.statSync(latestPath).mtime > fs.statSync(currentPath).mtime
        ? latest
        : current;
    });
    latestFile = path.join(uploadDir, latestFileName);
  }

  const workbook = xlsx.readFile(latestFile);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const jsonData = xlsx.utils.sheet_to_json(worksheet);
  await fs.promises.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2));

  return jsonData;
};

export const getData = async (
  startTime: string,
  endTime: string,
  page: number,
  limit: number
) => {
  const data = await fs.promises.readFile(jsonFilePath, "utf8");
  let filteredData: RevenueDetail[] = JSON.parse(data);
  let finalData = filteredData.slice(5);

  if (startTime && endTime) {
    finalData = filterRecordByTimeDuration(finalData, startTime, endTime);
  }

  const total = finalData.length;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedData = finalData.slice(startIndex, endIndex);

  return {
    total: Math.ceil(total / limit),
    page: page,
    limit: limit,
    totalRevenue: getTotalRevenue(finalData),
    data: paginatedData,
  };
};

export { upload };
