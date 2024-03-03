import { generateRandomNumber } from '../utils/generateRandomNumber'
import type { LevelNumber } from '../typings/SecretWord'
import type { LevelDictionary } from '../typings/Level'

import { level1 } from '../data/levels/level1'

export const selectLevel = (levelNumber: LevelNumber) => {
  const levelDictionary: LevelDictionary = {
    1: level1
  }

  const selectedLevel = levelDictionary[levelNumber]

  const randomNumber = generateRandomNumber(1, selectedLevel.length)
  const randomLevel = selectedLevel[randomNumber - 1]

  return randomLevel
}
