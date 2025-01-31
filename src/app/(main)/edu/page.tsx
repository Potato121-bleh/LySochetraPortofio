'use client'
import {
    Box,
    Button,
    Divider,
    List,
    ListItem,
    ListItemButton,
    Typography,
} from '@mui/material'
import { backendSkillEdu, frontendSkillEdu } from './data'
import EduCard from '@/components/card/eduCard'
import { useContext, useEffect } from 'react'
import './edu.css'
import { DataContext } from '@/components/provider/provider'
import {
    handleThemeAdapter,
    handleThememode,
    themeWrapper,
} from '@/components/method/utilsStyle'
import { darkmodeTheme } from '@/components/style/theme/data'

// let userDataTem: fetchedInfo = {
//     userid: 0,
//     username: '',
//     usernickname: '',
//     settingid: 0,
//     darkmode: 0,
//     sound: 0,
//     colorpalettes: 0,
//     font: 0,
//     language: 0,
// }

const Edu = () => {
    const themeContext = useContext(DataContext)

    //edu-card-main-con -> card class

    useEffect(() => {
        if (!themeContext) {
            return
        }
        themeWrapper(themeContext, '.edu-card-main-con')

        // if (themeContext.darkmode) {
        //     handleThememode(darkmodeTheme, '.edu-card-main-con')
        // } else if (themeContext.colorpalettes) {
        //     handleThemeAdapter(
        //         themeContext.colorpalettes,
        //         'componentTheme',
        //         '.edu-card-main-con'
        //     )
        // }
        //handleThememode(themeContext, "edu-card-main-con")
    })

    return (
        <main>
            <ul className="edu-content-main-con">
                <li className="edu-content-sub-con">
                    {/* Frontend Skills Section Header */}
                    <div className="edu-content-section-header">
                        <p className="edu-content-section-title">
                            Frontend Skills
                        </p>
                    </div>
                    {/* Frontend Skills Cards */}
                    <ul className="edu-content-skill-section">
                        {frontendSkillEdu.map((element) => {
                            return (
                                <EduCard key={element.id} eduData={element} />
                            )
                        })}
                    </ul>

                    {/* Backend Skills Section Header */}
                    <ul className="edu-content-section-header">
                        <li className="edu-content-section-title">
                            Backend Skills
                        </li>
                    </ul>
                    {/* Backend Skills Cards */}
                    <ul className="edu-content-skill-section">
                        {backendSkillEdu.map((element) => {
                            return (
                                <EduCard key={element.id} eduData={element} />
                            )
                        })}
                    </ul>
                </li>
            </ul>
        </main>
    )
}

export default Edu
