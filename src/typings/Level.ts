import type { Language, LevelNumber, Level } from './SecretWord'

export interface GetLevelDataBody {
  language: Language
  level: LevelNumber
}

export type LevelDictionary = {
  [key in LevelNumber]: Level[]
}
