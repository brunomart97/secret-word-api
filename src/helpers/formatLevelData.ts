import jwt from 'jsonwebtoken'
import { encryptKey } from '../utils/encryptKey'
import type { Language, Level } from '../typings/Zignix'

export const formatLevelData = (level: Level, language: Language) => {
  return {
    id: level.id,
    keyMold: encryptKey(level.levelData[language].key),
    clues: level.levelData[language].clues.map((clue) => {
      return jwt.sign(
        {
          clue
        },
        'zignix'
      )
    })
  }
}
