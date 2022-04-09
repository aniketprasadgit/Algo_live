const Strategy = require('../models/strategies');
const ObjectId = require('mongoose').Types.ObjectId;
const Account = require('../models/accounts');
const utils = require('../utils')
exports.getAllStrategies = async(req, res) => {
   try {
       let user = req.params.id
       let strategies = await Strategy.find({ user: user });
       res.json(
           strategies
         );

   } catch (error) {
       res.json({
           message: error.message
       })
   }
}

exports.createStrategy = async (req, res) => {
    try {
        let account = await Account.find({ user: req.body.user })
        let stratgy = new Strategy({
            name: req.body.name,
            instrument1: req.body.instrument1,
            instrument2: req.body.instrument2,
            timeFrame: req.body.timeFrame,
            direction: req.body.direction,
            entryTime: req.body.entryTime,
            exitTime: req.body.exitTime,
            stopLoss: req.body.stopLoss,
            target: req.body.target,
            orderType: req.body.orderType,
            quantity: req.body.quantity,
            stopLossunit: req.body.stopLossunit,
            targetunit: req.body.targetunit,
            indicator1: req.body.indicator1,
            period1: req.body.period1,
            multiplier1: req.body.multiplier1,         
            active: req.body.active,
            indicator2: req.body.indicator2,
            period2: req.body.period2,
            condition: req.body.condition,
            multiplier2: req.body.multiplier2,
            candleParam1: req.body.candleParam1,
            candleParam2: req.body.candleParam2,
            user: ObjectId(req.body.user),
            account: ObjectId(account[0]._id)
        });
        
        let savedStrategy = await stratgy.save();
        res.json({
            message: "Strategy created successfully!",
            stratgy: savedStrategy
        });
    } catch (error) {
        res.json({
            message: "Error while creating strategy!",
            error: error
        });
    }
        
}

exports.updateStrategy = async (req, res) => {
    try {
        const id = req.params.id;
        let updatedStrategy = await Strategy.findByIdAndUpdate(id, req.body, { new: true });
        res.json({
            message: "Strategy updated successfully!",
            stratgy: updatedStrategy
        });
    } catch (error) {
        res.json({
            message: "Error while updating strategy!",
            error: error
        });
    }
}

exports.getAllStrategiesForExecution = async (req, res) => {
    try {
       
        let strategies = await Strategy.find().populate('user').populate('account');
      
        res.json(
           strategies
        );
    } catch (error) {
        res.json({
            message: "Error while fetching strategies!",
            error: error
        });
    }
}


exports.toggleStrategy = async (req, res) => {
    try {
        const id = req.params.id;
        let strategy = await Strategy.findById(id);
        strategy.active = !strategy.active;
        let updatedStrategy = await strategy.save();
        res.json({
            message: "Strategy updated successfully!",
            stratgy: updatedStrategy
        });
    } catch (error) {
        res.json({
            message: "Error while updating strategy!",
            error: error
        });
    }
}

exports.deleteStrategy = async (req, res) => {
    try {
        const id = req.params.id;
        let deletedStrategy = await Strategy.findByIdAndDelete(id);
        res.json({
            message: "Strategy deleted successfully!",
            stratgy: deletedStrategy
        });
    } catch (error) {
        res.json({
            message: "Error while deleting strategy!",
            error: error
        });
    }
}

exports.getAllInstruments = async (req, res) => {
    try {
        let instruments = await utils.getAllInstruments();
        console.log(instruments)
        res.json(
            instruments
        );
    } catch (error) {
        res.json({
            message: "Error while fetching instruments!",
            error: error
        });
    }
}