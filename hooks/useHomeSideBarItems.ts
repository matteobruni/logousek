import { useRouter } from 'next/router'

import { useTranslateFunctions } from './useTranslateFunctions';

export const useHomeSideBarItems = () => {
    const { tHome } = useTranslateFunctions()
    const router = useRouter()
    const redirect = (url: string) => {
        router.push(url)
    }

    const applicationNavItems = [
        { name: 'introduction', icon: 'cake', title: 'Visual' },
        { name: 'gameInfo', icon: 'call', title: 'Sluch' },
        {
            name: 'activityList',
            icon: 'camera_alt',
            title: 'Serialita'
        },
        {
            name: 'aboutAs',
            icon: 'card_giftcard',
            title: 'Login'
        },
        { name: 'introduction', icon: 'cake', title: 'Visual' },
        { name: 'gameInfo', icon: 'call', title: 'Sluch' },
        {
            name: 'activityList',
            icon: 'camera_alt',
            title: 'Serialita'
        },
        {
            name: 'aboutAs',
            icon: 'card_giftcard',
            title: 'Login'
        }
    ]

    const sideBarPageNavItems = [
        {
            name: 'introduction',
            icon: 'cake',
            title: tHome("introSection.header"),
            onClick: () => redirect('#introduction')
        },
        {
            name: 'gameInfo',
            icon: 'call',
            title: tHome("gameInfoSection.header"),
            onClick: () => redirect('#gameInfo')
        },
        {
            name: 'activityList',
            icon: 'camera_alt',
            title: tHome("activityListSection.header"),
            onClick: () => redirect('#activityList')
        },
        {
            name: 'aboutAs',
            icon: 'card_giftcard',
            title: tHome("aboutAsSection.header"),
            onClick: () => redirect('#aboutAs')
        }
    ]

    return { applicationNavItems, sideBarPageNavItems }
};