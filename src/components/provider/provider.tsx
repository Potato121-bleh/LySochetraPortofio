'use client'

import { createContext, useEffect, useState } from 'react'
import HeaderPage from '../navigation/header/header'
import {
    fetchedInfo,
    getSetting,
    handleMutationAndSetTempData,
    handleQueryUser,
    handleSettingMutation,
    verifyToken,
} from '../method/utils'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

let temporaryUserDataTest: fetchedInfo = {
    userid: 0,
    username: '',
    usernickname: '',
    settingid: 0,
    darkmode: 0,
    sound: 0,
    colorpalettes: 0,
    font: 0,
    language: 0,
}

let temporaryUserData: fetchedInfo = {
    userid: 0,
    username: '',
    usernickname: '',
    settingid: 0,
    darkmode: 0,
    sound: 0,
    colorpalettes: 0,
    font: 0,
    language: 0,
}

export const DataContext = createContext(temporaryUserData)

export default function Provider({ children }: { children: React.ReactNode }) {
    let [userdata, setUserdata] = useState<fetchedInfo>(temporaryUserDataTest)
    const queryClient = new QueryClient()
    let searchParams = useSearchParams()
    let usernameUrlParam = searchParams.get('username') ?? ''

    const queryUserData = useQuery(
        {
            queryKey: ['username', usernameUrlParam],
            queryFn: verifyToken,
        },
        queryClient
    )

    const querySettingMutation = useMutation(
        {
            mutationFn: getSetting,
            onSuccess: (data) => {
                if (data) {
                    temporaryUserData.darkmode = data.darkmode
                    temporaryUserData.sound = data.sound
                    temporaryUserData.colorpalettes = data.colorpalettes
                    temporaryUserData.font = data.font
                    temporaryUserData.language = data.language
                }
                console.log(data?.language)
            },

            onError: (err) => {
                alert('Warning: ' + err)
            },
        },
        queryClient
    )

    useEffect(() => {
        if (queryUserData.isSuccess) {
            querySettingMutation.mutateAsync(
                Number(queryUserData.data.settingId)
            )
            temporaryUserData.userid = queryUserData.data.userId
            temporaryUserData.username = queryUserData.data.userName
            temporaryUserData.usernickname = queryUserData.data.nickname
            temporaryUserData.settingid = queryUserData.data.settingId
            setUserdata(temporaryUserData)
        }
    }, [queryUserData.isSuccess])

    return (
        <DataContext.Provider value={userdata}>
            <HeaderPage />
            {children}
        </DataContext.Provider>
    )
}
