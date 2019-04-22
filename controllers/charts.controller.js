import Chart from '../models/charts.model'
import logger from '../core/logger/app-logger'

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const charts = await Chart.getAll();
        logger.info('sending all charts...');
        res.send(charts);
    }
    catch(err) {
        logger.error('Error in getting charts- ' + err);
        res.send('Got error in getAll');
    }
}

controller.addChart = async (req, res) => {
    let chartToAdd = Chart({
        name: req.body.name
    });
    try {
        const savedChart = await Chart.addChart(chartToAdd);
        logger.info('Adding chart...');
        res.send('added: ' + savedChart);
    }
    catch(err) {
        logger.error('Error in getting charts- ' + err);
        res.send('Got error in getAll');
    }
}

controller.deleteChart = async (req, res) => {
    let chartName = req.body.name;
    try{
        const removedChart = await Chart.removeChart(chartName);
        logger.info('Deleted Chart- ' + removedChart);
        res.send('Chart successfully deleted');
    }
    catch(err) {
        logger.error('Failed to delete chart- ' + err);
        res.send('Delete failed..!');
    }
}

export default controller;