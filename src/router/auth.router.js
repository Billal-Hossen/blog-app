import { Router } from "express";
import { register } from "../api/auth/register.js";
const router = Router()

router.post('/auth/register', register)

router.post('/auth/login', (req, res) => {
  res.json({ message: 'login route' })
})

export default router