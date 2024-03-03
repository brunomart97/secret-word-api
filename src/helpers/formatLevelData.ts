import type { Language, Level } from '../typings/SecretWord'

export const formatLevelData = (level: Level, language: Language) => {
  return {
    id: level.id,
    levelData: level.levelData[language]
  }
}
