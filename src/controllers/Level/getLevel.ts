import { Request, Response } from 'express'
import type { GetLevelBody } from '../../typings/Level'

export const getLevel = async (req: Request, res: Response) => {
  try {
    const { level }: GetLevelBody = req.body

    // mandatory data validations
    if (!level) {
      return res.status(400).json({ error: 'level is required' })
    }

    // checking if the level is valid
    if (typeof level !== 'number') {
      return res.status(400).json({
        error: 'type of level is number'
      })
    }

    // selecting and returning level
  } catch (error) {
    return res.status(500).json({
      error: 'error when trying to search for a level'
    })
  }
}
