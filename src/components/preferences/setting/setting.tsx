'use client'

import {
    fetchedInfo,
    getApiFromEnv,
    handleSwitchClassList,
} from '@/components/method/utils'
import './setting.css'
import { QueryClient, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'

//we can do callback to the page.tsx component after each click on here

let temporarySwitchData = [false, false]

let userDataTems: fetchedInfo = {
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

type userDataSettingType = {
    userDataTem: fetchedInfo
}

function Setting({ userDataTem }: userDataSettingType) {
    const queryClient = new QueryClient()

    useEffect(() => {
        console.log('setting useEffect rendered')
        let darkmodeElement = document.getElementById('darkmode-switch-id')
        let soundElement = document.getElementById('soundeffect-switch-id')
        let soundChildElement = soundElement?.querySelector(
            '.setting-test-switch-ball'
        )
        let darkmodeChildElement = darkmodeElement?.querySelector(
            '.setting-test-switch-ball'
        )
        let selectColorElement = document.getElementById(
            'color-palettes-select-id'
        ) as HTMLSelectElement
        if (
            darkmodeElement &&
            soundElement &&
            soundChildElement &&
            darkmodeChildElement &&
            selectColorElement
        ) {
            //update sound switch
            handleSwitchClassList({
                userDataElementTem: userDataTem.sound,
                parentElement: soundElement,
                childElement: soundChildElement,
            })
            //update darkmode switch
            handleSwitchClassList({
                userDataElementTem: userDataTem.darkmode,
                parentElement: darkmodeElement,
                childElement: darkmodeChildElement,
            })
            //update select
            selectColorElement.options[userDataTem.colorpalettes].selected =
                true

            console.log(userDataTem)
        }
    })

    const handleClickSwitch = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        let child = e.currentTarget.querySelector('.setting-test-switch-ball')
        switch (e.currentTarget.id) {
            case 'darkmode-switch-id':
                e.currentTarget.classList.toggle('move-turn-on-switch')
                child?.classList.toggle('move-turn-on-switch-ball')
                userDataTem['darkmode'] = userDataTem['darkmode'] == 0 ? 1 : 0
                break
            case 'soundeffect-switch-id':
                e.currentTarget.classList.toggle('move-turn-on-switch')
                child?.classList.toggle('move-turn-on-switch-ball')
                userDataTem['sound'] = userDataTem['sound'] == 0 ? 1 : 0
                break
            default:
                console.log(userDataTem)
                break
        }
    }

    const updateMutation = useMutation(
        {
            mutationFn: async () => {
                const basedApiUrl = getApiFromEnv()
                try {
                    const reqCSRFtoken = await axios.get(
                        basedApiUrl + 'retrieve-CSRFkey',
                        {
                            withCredentials: true,
                        }
                    )

                    if (!reqCSRFtoken.data) {
                        throw new Error('failed to retrieve CSRF Token')
                    }

                    const resp = await axios.post(
                        basedApiUrl + 'setting/update',
                        userDataTem,
                        {
                            headers: { 'X-CSRF-Token': reqCSRFtoken.data },
                            withCredentials: true,
                        }
                    )
                    return resp.data
                } catch (error) {
                    alert(error)
                }
            },
            onSuccess: (data) => {
                alert(data)
                window.location.reload()
            },
        },
        queryClient
    )

    const handleSubmit = async () => {
        updateMutation.mutateAsync()
    }

    return (
        <ul className="setting-content-one-main-con">
            <li className="setting-content-one-element-form">
                <h2 className="setting-content-element-title">Appearance</h2>
                <div className="setting-content-inputbox-con setting-first-option">
                    <label>Darkmode</label>
                    <div
                        role="button"
                        onClick={(e) => handleClickSwitch(e)}
                        id="darkmode-switch-id"
                        className="setting-test-switch"
                    >
                        <div className="setting-test-switch-ball"></div>
                    </div>
                </div>
                <div className="setting-content-inputbox-con">
                    <label>Color Palettes</label>
                    <select
                        id="color-palettes-select-id"
                        className="setting-select"
                        onChange={(e) => {
                            userDataTem.colorpalettes = e.target.selectedIndex
                        }}
                    >
                        <option>None</option>
                        <option>Green</option>
                    </select>
                </div>

                <h2 className="setting-content-element-title">Audio</h2>
                <div className="setting-content-inputbox-con setting-first-option">
                    <label>Sound Effect</label>
                    <div
                        role="button"
                        onClick={(e) => handleClickSwitch(e)}
                        id="soundeffect-switch-id"
                        className="setting-test-switch"
                    >
                        <div className="setting-test-switch-ball"></div>
                    </div>
                </div>

                <h2 className="setting-content-element-title">Text</h2>
                <div className="setting-content-inputbox-con setting-first-option">
                    <label>Font</label>
                    <select className="setting-select">
                        <option>Default</option>
                    </select>
                    {/*
                    <button className="setting-fixed-purple-btn-standard">
                        Show Options
                    </button> */}
                </div>
                <div className="setting-content-inputbox-con">
                    <label>Language</label>
                    <select className="setting-select">
                        <option>English</option>
                    </select>
                </div>
                <div className="setting-submit-con">
                    <button
                        className="yellow-btn-standard-extrasmall btn-type-one"
                        onClick={handleSubmit}
                    >
                        Save Changes
                    </button>
                </div>
            </li>
        </ul>
    )
}

export default Setting

/*
return (
        <ul className="setting-content-one-main-con">
            <ul className="setting-content-one-element-con">
                <li className="setting-content-one-element-form"></li>
            </ul>
        </ul>
    )
*/
