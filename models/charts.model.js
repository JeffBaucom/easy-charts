import mongoose from 'mongoose';

const ChartSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true, index: true}
}, {collection : 'Chart'});

let ChartsModel = mongoose.model('Chart', ChartSchema);

ChartsModel.getAll = () => {
    return ChartsModel.find({});
}

ChartsModel.addChart = (chartToAdd) => {
    return chartToAdd.save();
}

ChartsModel.removeChart = (chartName) => {
    return ChartsModel.remove({name: chartName});
}

export default ChartsModel;