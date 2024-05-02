import { Router } from "express";
import { login, register } from "../api/auth/register.js";
const router = Router()

router.post('/auth/register', register)

router.post('/auth/login', login)

export default router