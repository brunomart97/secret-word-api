import type { Language, LevelNumber, Level } from './Zignix'

export type GetLevelDataBody = {
  language: Language
  levelNumber: LevelNumber
}

export type GetLevelKeyBody = {
  language: Language
  levelId: Level['id']
  userResponse: string
}

export type LevelDictionary = {
  [key in LevelNumber]: Level[]
}
