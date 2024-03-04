import { Router } from 'express'
import { LevelController } from '../controllers/LevelController'
import { verifyAppKey } from '../middlewares/verifyAppKey'

const router = Router()

router.post('/getLevelData', verifyAppKey, LevelController.getLevelData)
router.post('/getLevelKey', verifyAppKey, LevelController.getLevelKey)

export default router
