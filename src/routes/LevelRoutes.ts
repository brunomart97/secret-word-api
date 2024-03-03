import { Router } from 'express'
import { LevelController } from '../controllers/LevelController'

const router = Router()

router.post('/getLevelData', LevelController.getLevelData)
router.post('/getLevelKey', LevelController.getLevelKey)

export default router
