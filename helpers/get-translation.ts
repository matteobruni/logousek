import getT from 'next-translate/getT'

export const getTranslation = async (): string => {
    const translate = async () => {
        return await getT("home", 'gameInfoSection.header')
    }
    return translate()
}