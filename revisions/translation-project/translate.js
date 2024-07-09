
import fs from 'fs/promises'

const userLang = process.argv[2]

try {
  await fs.access(`./lang/${userLang}.js`)
  const translation = await import(`./lang/${userLang}.js`)
  console.log(translation.HELLO)
} catch (error) {
  console.log(`${userLang} not supported`)
}