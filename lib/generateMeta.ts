import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

/*
 * Generates page Meta data with site name included and translated values
 * See /messages/(locale)/meta/index.json for translations
 */

export const generateMeta = async (page: string): Promise<Metadata | undefined> => {
    const t = await getTranslations(`meta.${page}`)

    if (!t) return

    return {
        title: `${process.env.SITE_NAME} - ${t('title')}`,
        description: `${process.env.SITE_NAME} - ${t('description')}`,
        keywords: t('keywords'),
    }
}
