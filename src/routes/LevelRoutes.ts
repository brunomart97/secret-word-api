import { Router } from 'express'
import { LevelController } from '../controllers/LevelController'

const router = Router()

router.post('/getLevelData', LevelController.getLevelData)

export default router
