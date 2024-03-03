import { levelDictionary } from './levelDictionary'
import { generateRandomNumber } from '../utils/generateRandomNumber'
import type { LevelNumber } from '../typings/SecretWord'

export const selectLevel = (levelNumber: LevelNumber) => {
  const selectedLevel = levelDictionary[levelNumber]
  const randomNumber = generateRandomNumber(1, selectedLevel.length)
  const randomLevel = selectedLevel[randomNumber - 1]

  return randomLevel
}
