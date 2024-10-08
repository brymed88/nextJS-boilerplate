import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

/*
 * Generates page Meta data with site name included and translated values
 * See /features/i18n/messages/(locale)/meta/index.json for translations
 */

export const generateMeta = async (
     page: string
): Promise<Metadata | undefined> => {
     const t = await getTranslations(`meta.${page}`)

     if (!t) return

     return {
          title: `${process.env.NEXT_PUBLIC_SITE_NAME} - ${t('title')}`,
          description: `${process.env.NEXT_PUBLIC_SITE_NAME} - ${t('description')}`,
          keywords: t('keywords'),
          //NOTE: Additional fields available
          //see documentation : https://nextjs.org/docs/app/api-reference/functions/generate-metadata
     }
}
