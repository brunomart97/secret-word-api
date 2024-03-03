import { Router } from 'express'
import { LevelController } from '../controllers/LevelController'

const router = Router()

router.post('/getLevel', LevelController.getLevel)

export default router
