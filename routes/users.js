// server/src/routes/user.js

import { PrismaClient } from "@prisma/client";
import express from "express";
import { protect } from "../middleware/authorization";

const prisma = new PrismaClient();

function getUserRoutes() {
  const router = express.Router();

  router.get("/liked-videos", protect, getLikedVideos);
    
  return router;
}