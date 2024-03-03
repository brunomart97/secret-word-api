export const generateRandomNumber = (
  startingNumber: number,
  finalNumber: number
) => {
  const randomDecimal = Math.random()
  return (
    startingNumber +
    Math.floor(randomDecimal * (finalNumber - startingNumber + 1))
  )
}
