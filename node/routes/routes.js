import express from 'express'
import { getAllComisaria, getComisaria, createComi, updateComi, delateComi } from '../controllers/ComiController.js'
import { update } from 'lodash'
const router = express.Router()

router.get('/', getAllComisaria)
router.get('/:id', getComisaria)
router.post('/', createComi)
router.put('/:id', updateComi)
router.delete('/:id', delateComi)

export default router