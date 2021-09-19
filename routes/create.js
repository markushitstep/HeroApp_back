const express = require('express')
const upload = require('../middleware/upload')
const controller = require('../controllers/create')
const router = express.Router()

router.get('', controller.getAll)
router.post('/create', upload.single('image'), controller.create)
router.patch('/:id', upload.single('image'), controller.update)
router.delete('/:id', controller.remove)


module.exports = router