import fs from 'fs'
import path from 'path'

const addNestedProperty = (obj: { [key: string]: any }, keys: string[]) => {
     let current = obj

     for (const key of keys) {
          if (!current[key]) {
               current[key] = {}
          }
          current = current[key]
     }

     return { obj, lastKey: current }
}

export const loadI18nTranslations = (
     dictionariesPath: string,
     locale: string
) => {
     const relativePath = dictionariesPath + locale
     const absolutePath = path.join(process.cwd(), relativePath)

     let translations = {}

     try {
          const files = fs.readdirSync(absolutePath, { recursive: true })
          files.forEach((file) => {
               if (typeof file === 'string' && file.endsWith('.json')) {
                    const fileParents = file
                         .split(path.sep)
                         .filter((parent) => parent !== 'index.json')
                    const filePath = path.join(absolutePath, file)
                    const fileTranslations = JSON.parse(
                         fs.readFileSync(filePath, 'utf-8')
                    )

                    // Object {}
                    translations = {
                         ...translations,
                    }

                    const { lastKey } = addNestedProperty(
                         translations,
                         fileParents
                    )

                    Object.assign(lastKey, fileTranslations)
               }
          })
     } catch (error) {
          console.error(
               'The following error occured in loader in next-intl-split.',
               error
          )
     }

     return translations
}
