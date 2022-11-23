export const urlFormatIsValid = (url: string): boolean => {
  if (!url) return false
  return !!url.match(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/)
}
