const { db } = require('../models/Create');
const CreateH = require('../models/Create')
const errorHeandler = require('../untils/errorHeandler')

module.exports.getAll = async (req, res) => {
    try {
        const { page = 1, count = 10 } = req.query;    
        const heroes = await CreateH.find()
             .limit(count * 1)
             .skip((page - 1) * count);
        const tC = await CreateH.count();
        res.status(200).json({ heroes, total: tC  } )
        console.log(heroes);
    } catch (e) {
        errorHeandler(res, e)
    }
    
}
module.exports.create = async (req, res) => {
    try {
        const hero = await new CreateH({
            name: req.body.name,
            realName: req.body.realName,
            originDescription: req.body.originDescription,
            superPowers: req.body.superPowers,
            catchPhrase: req.body.catchPhrase,
            image: req.file.path
        }).save()
        res.status(201).json(hero)
    } catch (e) {
        errorHeandler(res, e)
    }
}
module.exports.update = async (req, res) => {
    try {
        const create = await CreateH.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(create)
    } catch (e) {
        errorHeandler(res, e)
    }
}
module.exports.remove = async (req, res) => {
    try {
        await CreateH.remove({ _id: req.params.id })
        res.status(200).json({
            message: 'Герой был удалён.'
        })
    } catch (e) {
        errorHeandler(res, e)
    }
}