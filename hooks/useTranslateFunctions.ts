import useTranslation from 'next-translate/useTranslation'


export const useTranslateFunctions = () => {
    const { t: tHome } = useTranslation('home')
    const { t: tCommon } = useTranslation('common')
    const { t: tNotFound } = useTranslation('notFound')
    return { tHome, tCommon, tNotFound }
};