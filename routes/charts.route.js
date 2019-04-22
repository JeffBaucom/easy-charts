import express from "express";
import chartController from "../controllers/charts.controller"
const router = express.Router()

router.get('/allcharts', (req, res) => {
    chartController.getAll(req, res);
});

router.post('/addchart', (req, res) => {
    chartController.addChart(req, res);
});

router.delete('/deletechart', (req, res) => {
    chartController.deleteChart(req, res);
});

export default router;