import type { Language, Level } from '../typings/SecretWord'

export const formatLevelData = (level: Level, language: Language) => {
  return {
    id: level.id,
    clues: level.levelData[language].clues
  }
}
