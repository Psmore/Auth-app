// Copyright (C) 2024 Psmore
import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { updateUser, deleteUser, test} from '../controllers/user.controller.js';

const router = express.Router();

router.get("/", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);


export default router;
