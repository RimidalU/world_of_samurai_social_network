export const getDateNowInString = () => {
  const timeElapsed = Date.now()
  return new Date(timeElapsed).toDateString()
}
