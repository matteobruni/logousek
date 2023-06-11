import { callApi } from './calls'

export const activityGetScore = (
    selectUser?: string,
    from?: string,
    to?: string,
    activityTypes?: string[]
) => {
    return callApi(
        'activity/list-score',
        {
            userId: selectUser,
            from,
            to,
            activityTypes,
        },
        'POST'
    )
}

export const userList = (
    limit: number,
    cursor: number,
    searchUserString?: string,
) => {
    return callApi(
        'user/list',
        {
            params: {
                searchUserString: searchUserString,
                limit,
                cursor,
            }
        },
        'GET'
    )
}

export const userDelete = (
    selectedUser: string,
) => {
    return callApi(
        'user/delete',
        { userId: selectedUser },
        'POST'
    )
}
