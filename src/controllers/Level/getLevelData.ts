import { languageList } from '../../constant'
import { selectLevel } from '../../helpers/selectLevel'
import { formatLevelData } from '../../helpers/formatLevelData'
import type { Request, Response } from 'express'
import type { GetLevelDataBody } from '../../typings/Level'

export const getLevelData = async (req: Request, res: Response) => {
  try {
    const { language, levelNumber }: GetLevelDataBody = req.body

    // mandatory data validations
    if (!language) {
      return res.status(400).json({ error: 'language is required' })
    }

    if (!levelNumber) {
      return res.status(400).json({ error: 'levelNumber is required' })
    }

    // checking if the parameters are valid
    if (!languageList.includes(language)) {
      return res.status(404).json({
        error: 'language not found',
        languageList
      })
    }

    if (typeof levelNumber !== 'number') {
      return res.status(400).json({
        error: 'type of levelNumber is number'
      })
    }

    // selecting and returning level
    const selectedLevel = selectLevel(levelNumber)
    const formatedLevel = formatLevelData(selectedLevel, language)

    return res.status(200).json(formatedLevel)
  } catch (error) {
    return res.status(500).json({
      error: 'error when trying to search for a levelData'
    })
  }
}
