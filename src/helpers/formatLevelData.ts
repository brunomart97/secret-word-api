import { encryptKey } from '../utils/encryptKey'
import type { Language, Level } from '../typings/Zignix'

export const formatLevelData = (level: Level, language: Language) => {
  return {
    id: level.id,
    encryptedKey: encryptKey(level.levelData[language].key),
    clues: level.levelData[language].clues
  }
}
