import { Request, Response } from 'express'
import { languageList } from '../../constant'
import { selectLevel } from '../../helpers/selectLevel'
import { formatLevelData } from '../../helpers/formatLevelData'
import type { GetLevelDataBody } from '../../typings/Level'

export const getLevelData = async (req: Request, res: Response) => {
  try {
    const { language, level }: GetLevelDataBody = req.body

    // mandatory data validations
    if (!language) {
      return res.status(400).json({ error: 'language is required' })
    }

    if (!level) {
      return res.status(400).json({ error: 'level is required' })
    }

    // checking if the parameters are valid
    if (!languageList.includes(language)) {
      return res.status(404).json({
        error: 'language not found',
        languageList
      })
    }

    if (typeof level !== 'number') {
      return res.status(400).json({
        error: 'type of level is number'
      })
    }

    // selecting and returning level
    const selectedLevel = selectLevel(level)
    const formatedLevel = formatLevelData(selectedLevel, language)

    return res.status(200).json(formatedLevel)
  } catch (error) {
    return res.status(500).json({
      error: 'error when trying to search for a levelData'
    })
  }
}
