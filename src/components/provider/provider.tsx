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
import {
    handleBodyThemeProvider,
    handleThemeAdapter,
} from '../method/utilsStyle'
import { colorPaletteList, darkmodeTheme } from '../style/theme/data'
import Loading from '@/app/loading'

let userDataPrepTem: fetchedInfo = {
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

let userDataTem: fetchedInfo = {
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

export const DataContext = createContext(userDataTem)

export default function Provider({ children }: { children: React.ReactNode }) {
    let [userdata, setUserdata] = useState<fetchedInfo>(userDataPrepTem)
    const queryClient = new QueryClient()
    let searchParams = useSearchParams()
    let usernameUrlParam = searchParams.get('username') ?? ''

    const queryUserData = useQuery(
        {
            queryKey: ['username', usernameUrlParam],
            queryFn: verifyToken,
            retry: 1,
        },
        queryClient
    )

    const querySettingMutation = useMutation(
        {
            mutationFn: getSetting,
            onSuccess: (data) => {
                if (data) {
                    userDataTem.darkmode = data.darkmode
                    userDataTem.sound = data.sound
                    userDataTem.colorpalettes = data.colorpalettes
                    userDataTem.font = data.font
                    userDataTem.language = data.language
                    console.log('before set useState: ' + userDataTem)
                    setUserdata(userDataTem)

                    if (userDataTem.darkmode) {
                        console.log('it should triggered darkmode')
                        handleBodyThemeProvider(darkmodeTheme)
                    } else if (userDataTem.colorpalettes != 0) {
                        handleThemeAdapter(
                            userDataTem.colorpalettes,
                            'bodyTheme'
                        )
                    }
                }
                console.log(data?.language)
            },
            onMutate: () => {
                return <Loading />
            },
            onError: (err) => {
                alert('Warning: ' + err)
            },
        },
        queryClient
    )

    useEffect(() => {
        if (queryUserData.isSuccess) {
            userDataTem.userid = queryUserData.data.userId
            userDataTem.username = queryUserData.data.userName
            userDataTem.usernickname = queryUserData.data.nickname
            userDataTem.settingid = queryUserData.data.settingId
            querySettingMutation.mutateAsync(
                Number(queryUserData.data.settingId)
            )
        }
    }, [queryUserData.isSuccess])

    if (queryUserData.isLoading) {
        return <Loading />
    }

    return (
        <DataContext.Provider value={userdata}>
            <HeaderPage />
            {children}
        </DataContext.Provider>
    )
}
