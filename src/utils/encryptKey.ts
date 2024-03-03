export const encryptKey = (key: string) =>
  key.replace(/[^ ]/g, '1').replace(/ /g, '0')
