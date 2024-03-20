import { levelDictionary } from './levelDictionary'
import type { Language, Level } from '../typings/Zignix'

export const checkKey = (
  language: Language,
  levelId: Level['id'],
  userResponse: string
) => {
  const selectedLevelsByNumber = levelDictionary[Number(levelId.split('.')[0])]
  const userLevel = selectedLevelsByNumber.find((level) => level.id === levelId)

  if (!userLevel) {
    return
  }

  const userLevelKey = userLevel.levelData[language].key
  const keyWasDiscovered =
    userLevelKey
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase() ===
    userResponse
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()

  return {
    keyWasDiscovered,
    key: keyWasDiscovered ? userLevelKey : 'unacceptable'
  }
}
