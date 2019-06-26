import express from "express";
import userController from "../controllers/users.controller"
const router = express.Router()

router.post('/register', (req, res) => {
  userController.register(req, res);
});

router.delete('/deletechart', (req, res) => {
    chartController.deleteChart(req, res);
});

export default router;