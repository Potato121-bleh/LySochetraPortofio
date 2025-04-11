'use client'
import { backendSkillEdu, frontendSkillEdu } from './data'
import EduCard from '@/components/card/EduCard'
import { useContext, useEffect } from 'react'
import './edu.css'
import { DataContext } from '@/components/provider/provider'
import { themeWrapper } from '@/components/method/utilsStyle'

const Edu = () => {
    const themeContext = useContext(DataContext)

    //edu-card-main-con -> card class

    useEffect(() => {
        if (!themeContext) {
            return
        }
        themeWrapper(themeContext, '.edu-card-main-con')
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
