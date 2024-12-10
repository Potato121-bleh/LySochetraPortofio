'use client'

import './setting.css'
import { temporarySwitchData } from '@/app/data/temporary'

function Setting() {
    const handleClickSwitch = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        let child = e.currentTarget.querySelector('.setting-test-switch-ball')
        switch (e.currentTarget.id) {
            case 'darkmode-switch-id':
                e.currentTarget.classList.toggle('move-turn-on-switch')
                child?.classList.toggle('move-turn-on-switch-ball')
                temporarySwitchData[0] =
                    temporarySwitchData[0] == false ? true : false
                console.log(temporarySwitchData)

                break
            case 'soundeffect-switch-id':
                e.currentTarget.classList.toggle('move-turn-on-switch')
                child?.classList.toggle('move-turn-on-switch-ball')
                temporarySwitchData[1] =
                    temporarySwitchData[1] == false ? true : false
                console.log(temporarySwitchData)
                break
            default:
                console.log(temporarySwitchData)
                break
        }
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
                    <button className="setting-fixed-purple-btn-standard">
                        Show Options
                    </button>
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
                    <button className="setting-fixed-purple-btn-standard">
                        Show Options
                    </button>
                </div>
                <div className="setting-content-inputbox-con">
                    <label>Language</label>
                    <button className="setting-fixed-purple-btn-standard">
                        Show Options
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
