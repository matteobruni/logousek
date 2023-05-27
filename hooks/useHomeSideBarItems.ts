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
            name: 'news',
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
            name: 'news',
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
            title: tHome("Intro.header"),
            onClick: () => redirect('#introduction')
        },
        {
            name: 'gameInfo',
            icon: 'call',
            title: tHome("GameInfo.header"),
            onClick: () => redirect('#gameInfo')
        },
        {
            name: 'activityList',
            icon: 'camera_alt',
            title: tHome("ActivityList.header"),
            onClick: () => redirect('#activityList')
        },
        {
            name: 'aboutAs',
            icon: 'card_giftcard',
            title: tHome("AboutAs.header"),
            onClick: () => redirect('#aboutAs')
        }
    ]

    return { applicationNavItems, sideBarPageNavItems }
};