import { Router } from "express";
const router = Router()

router.post('/auth/register', (req, res) => {
  res.json({ message: 'register route' })
})

router.post('/auth/login', (req, res) => {
  res.json({ message: 'login route' })
})

export default router