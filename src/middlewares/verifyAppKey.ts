import type { Request, Response, NextFunction } from 'express'

export const verifyAppKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization']
  const envAppKeyList = process.env.APP_KEY_LIST

  if (!envAppKeyList) {
    return res.status(401).json({
      message: 'no appKey was registered in the system'
    })
  }

  if (!authHeader) {
    return res.status(401).json({
      message: 'authorization token missing in header'
    })
  }

  const appKeyList: string[] = JSON.parse(envAppKeyList)
  const [scheme, apiKey] = authHeader.split(' ')

  if (scheme !== 'Bearer' || !apiKey) {
    return res.status(401).json({ error: 'invalid token format' })
  }

  const isAuthenticated = !!appKeyList.find((item) => item === apiKey)

  if (!isAuthenticated) {
    return res.status(401).json({
      message: 'access denied'
    })
  }

  next()
}
