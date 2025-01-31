'use client'
import { EduSkill } from '@/app/(main)/edu/data'
import { useRef } from 'react'
import './eduCard.css'

type eduCardType = {
    eduData: EduSkill
}

const EduCard = ({ eduData }: eduCardType) => {
    const eduCardRef = useRef<HTMLLIElement>(null)

    const handleOpenDD = () => {
        eduCardRef.current?.classList.toggle('edu-open-description')
    }

    return (
        <li className="edu-card-main-con" ref={eduCardRef}>
            <ul className="edu-card-logo-showcase-section">
                <li className="edu-card-img-section">
                    <img
                        className="edu-card-img"
                        src={eduData.imgUrl}
                        alt="Logo"
                        style={{ width: '100%', height: '100%' }}
                    />
                </li>
                <li className="edu-card-logo-showcase-divider"></li>
                <p className="edu-card-title">{eduData.title}</p>
                <button
                    className="white-btn-standard-extrasmall btn-type-one"
                    onClick={handleOpenDD}
                >
                    Learn more
                </button>
            </ul>
            <div className="edu-card-divider"></div>
            <div className="edu-card-description-section">
                <p className="edu-card-description-text">
                    {eduData.description}
                </p>
                <p style={{ margin: '0px', fontSize: '11px' }}>
                    Experience:{' '}
                    <span style={{ fontWeight: 'bold' }}>
                        {eduData.experience}
                    </span>
                </p>
                <p
                    style={{
                        margin: '0px',
                        fontSize: '11px',
                        fontWeight: 'bold',
                    }}
                >
                    {eduData.experienceType}
                </p>
            </div>
        </li>
    )
}

export default EduCard
