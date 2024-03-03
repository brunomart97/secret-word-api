import { Request, Response } from 'express'
import { languageList } from '../../constant'
import { checkKey } from '../../helpers/checkKey'
import type { GetLevelKeyBody } from '../../typings/Level'

export const getLevelKey = async (req: Request, res: Response) => {
  try {
    const { language, levelId, userResponse }: GetLevelKeyBody = req.body

    // mandatory data validations
    if (!language) {
      return res.status(400).json({ error: 'language is required' })
    }

    if (!levelId) {
      return res.status(400).json({ error: 'levelId is required' })
    }

    if (!userResponse) {
      return res.status(400).json({ error: 'userResponse is required' })
    }

    // checking if the parameters are valid
    if (!languageList.includes(language)) {
      return res.status(404).json({
        error: 'language not found',
        languageList
      })
    }

    if (typeof levelId !== 'string') {
      return res.status(400).json({
        error: 'type of levelId is string'
      })
    }

    if (typeof userResponse !== 'string') {
      return res.status(400).json({
        error: 'type of userResponse is string'
      })
    }

    // checking and returning response
    const verifiedKey = checkKey(language, levelId, userResponse)

    if (!verifiedKey) {
      return res.status(404).json({
        error: 'level not found'
      })
    }

    return res.status(200).json(verifiedKey)
  } catch (error) {
    return res.status(500).json({
      error: 'error when trying to search for a levelKey'
    })
  }
}
