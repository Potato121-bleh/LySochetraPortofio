'use client'
import { QueryClient, useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query"
import axios from "axios"
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation"
import { Dispatch, SetStateAction } from "react"

export type fetchedInfo = {
    userid: number
    username: string
    usernickname: string
    settingid: number
    darkmode: number
    sound: number
    colorpalettes: number
    font: number
    language: number
}

export type userInfo = {
    userId: number,
    userName: string,
    nickname: string,
    password: string,
    settingId: number
}

export type userSetting = {
    settingid: number,
    darkmode: number,
    sound: number,
    colorpalettes: number,
    font: number,
    language: number
}

export type MutationAndSetTempDataType = {
    queryUserData: UseQueryResult<userInfo, Error>, 
    querySettingMutation:UseMutationResult<userSetting | undefined, Error, number, unknown>, 
    setUserNickname: Dispatch<SetStateAction<string>>
}

type handleSwitchClassListType = {
    userDataElementTem: number
    parentElement: HTMLElement
    childElement: Element
}

export const handleSwitchClassList = ({
    userDataElementTem,
    parentElement,
    childElement,
}: handleSwitchClassListType) => {
    if (userDataElementTem == 0) {
        parentElement.classList.remove('move-turn-on-switch')
        childElement.classList.remove('move-turn-on-switch-ball')
    } else {
        parentElement.classList.add('move-turn-on-switch')
        childElement.classList.add('move-turn-on-switch-ball')
    }
}

export const handleSwitchSelect = () => {
    
}


export async function getCSRFKey(baseEndpoint: string):Promise<string> {
    let fetchCSRFKeyResp = await axios.get(baseEndpoint + "retrieve-CSRFkey",
        { withCredentials: true }
    )
    if (fetchCSRFKeyResp.status != 200) {
        throw Error("failed to retrieve CSRF key token")
    }
    return fetchCSRFKeyResp.data
}

export function getApiFromEnv() {
    require('dotenv').config()
    const basedApiUrl = process.env.NEXT_PUBLIC_API_URL
    if (!basedApiUrl) {
        throw Error('failed to retrieve api url from env')
    }
    return basedApiUrl
}

let renderTracker = 0

export let temporaryUserData: fetchedInfo = {
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

export const verifyToken = async (): Promise<userInfo> => {
    //require('dotenv').config()
    const basedApiUrl = getApiFromEnv();
    let fetchUserResp
    try {
        if (!basedApiUrl) {
            throw Error('failed to retrieve api url from env')
        }

        let fetchCSRFKeyResp = await axios.get(
            basedApiUrl + 'retrieve-CSRFkey',
            { withCredentials: true }
        )
        if (fetchCSRFKeyResp.status != 200) {
            throw Error('failed to retrieve CSRF key token')
        }
        
        const getCSRFkey = fetchCSRFKeyResp.data

        fetchUserResp = await axios.get(basedApiUrl + 'user/verify', {
            withCredentials: true,
            headers: { 'X-CSRF-Token': getCSRFkey },
        })
        if (fetchUserResp.status != 200 && !fetchUserResp.data.settingId) {
            throw new Error('failed to validate the user')
        }
        /*
        fetchSettingResp = await axios.post(basedApiUrl + "/setting/getbyid", {
            settingId: fetchUserResp.data.settingId
        })
            */
    } catch (error) {
        throw new Error('failed to fetch the data')
    }
    return fetchUserResp.data
}

export const getSetting = async (settingIds: number): Promise<userSetting | undefined> => {
    const basedApiUrl = getApiFromEnv()
    let fetchSettingResp
    try {
        let fetchCSRFKeyResp = await axios.get(
            basedApiUrl + 'retrieve-CSRFkey',
            { withCredentials: true }
        )
        if (fetchCSRFKeyResp.status != 200) {
            throw Error('failed to retrieve CSRF key token')
        }
        if (!fetchCSRFKeyResp) {
            return undefined
        }

        fetchSettingResp = await axios.post(basedApiUrl + "setting/getbyid", {
            settingId: settingIds
        }, {
            withCredentials: true,
            headers: { 'X-CSRF-Token': fetchCSRFKeyResp.data },
        })
    } catch (error) {
        alert("failed to load your setting")
        throw new Error("failed to load your setting");
    }
    return fetchSettingResp.data
}

export function handleQueryUser(usernameUrlParam: string, queryClients: QueryClient): UseQueryResult<userInfo, Error> {
    const queryUserData = useQuery(
        {
            queryKey: ['username', usernameUrlParam],
            queryFn: verifyToken,
        },
        queryClients
    )
    return queryUserData
}

export function handleSettingMutation(temporaryArr: fetchedInfo, queryClient: QueryClient) {
    return useMutation(
        {
            mutationFn: getSetting,
            onSuccess: (data) => {
                if (data) {
                    temporaryArr.darkmode = data.darkmode
                    temporaryArr.sound = data.sound
                    temporaryArr.colorpalettes = data.colorpalettes
                    temporaryArr.font = data.font
                    temporaryArr.language = data.language
                }
            },
            onError: (err) => {
                alert('Warning: ' + err)
            },
        },
        queryClient
    )
}

export function handleMutationAndSetTempData({queryUserData, querySettingMutation, setUserNickname}: MutationAndSetTempDataType) {
    if (queryUserData.data?.userId) {
        querySettingMutation.mutate(Number(queryUserData.data.settingId))
        setUserNickname(queryUserData.data.nickname)
        temporaryUserData.userid = queryUserData.data.userId
        temporaryUserData.username = queryUserData.data.userName
        temporaryUserData.usernickname = queryUserData.data.nickname
        temporaryUserData.settingid = queryUserData.data.settingId
    } else {
        setUserNickname('Guest')
    }
}


