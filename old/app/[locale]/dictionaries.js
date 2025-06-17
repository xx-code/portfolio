
const dictionaries = {
    en: () => import('../locales/en/translation.json').then((module) => module.default),
    fr: () => import('../locales/fr/translation.json').then((module) => module.default)
}

export const getDictionary = async (locale) => dictionaries[locale]()
