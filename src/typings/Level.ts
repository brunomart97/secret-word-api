import type { Language, LevelNumber, Level } from './SecretWord'

export interface GetLevelDataBody {
  language: Language
  levelNumber: LevelNumber
}

export interface GetLevelKeyBody {
  language: Language
  levelId: Level['id']
  userResponse: string
}

export type LevelDictionary = {
  [key in LevelNumber]: Level[]
}
