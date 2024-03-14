export type Language = 'pt' | 'en' | 'es'

export type LevelNumber = number

export type Level = {
  id: string
  levelData: LevelData
}

export type LevelData = {
  [language in Language]: {
    key: string
    clues: string[]
  }
}
