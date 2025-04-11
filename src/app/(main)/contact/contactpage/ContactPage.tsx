'use client'
import Image from 'next/image'
import { ContactMail, PermPhoneMsg } from '@mui/icons-material'
import { useContext, useEffect } from 'react'
import { DataContext } from '@/components/provider/provider'
import { themeWrapper } from '@/components/method/utilsStyle'
import './contact.css'

type contactCardArrType = {
    id: number
    title: string
    description: string
    icon: JSX.Element
}

const ContactPage = () => {
    const themeContext = useContext(DataContext)

    useEffect(() => {
        if (!themeContext) return
        themeWrapper(themeContext, '.contact-card-con')
    })

    const contactCardArr: contactCardArrType[] = [
        {
            id: 1,
            title: 'Email: lysochetra95@gmail.com',
            description:
                'You can sent me an email to let me know what you think. Just to let you know that I check email a few times a day.',
            icon: <ContactMail className="contact-card-icon" />,
        },
        {
            id: 2,
            title: 'Phone Number: +855 93 602 025',
            description:
                'If you want to connect to my other Messenger app, use my phone number since it all connected to my WhatsApp, Telegram.',
            icon: <PermPhoneMsg className="contact-card-icon" />,
        },
    ]

    const contactQuickAccessArr = [
        {
            id: 1,
            imgUrl: '/contact/linkedin.png',
            ref: 'https://www.linkedin.com/in/ly-sochetra-449249341/',
        },
        {
            id: 2,
            imgUrl: '/contact/telegram.png',
            ref: 'https://t.me/Potato470',
        },
        {
            id: 3,
            imgUrl: '/contact/whatsapp.png',
            ref: 'https://wa.me/85593602025',
        },
    ]

    return (
        <main className="contact-main-con">
            <ul className="contact-sub-con">
                <li className="contact-title">Let's Work Together</li>
                <ul className="contact-content-section">
                    {/* Card section */}
                    {contactCardArr.map((element) => {
                        return (
                            <ul key={element.id} className="contact-card-con">
                                <li className="contact-card-icon-con">
                                    {element.icon}
                                </li>
                                <li className="contact-card-description-con">
                                    <p className="contact-card-title">
                                        {element.title}
                                    </p>
                                    <p className="contact-card-description">
                                        {element.description}
                                    </p>
                                </li>
                            </ul>
                        )
                    })}
                </ul>
            </ul>
            <ul className="contact-quickaccess-main-con">
                {contactQuickAccessArr.map((element) => {
                    return (
                        <li
                            key={element.id}
                            className="contact-quickaccess-child-con"
                        >
                            <Image
                                role="button"
                                onClick={() =>
                                    (window.location.href = element.ref)
                                }
                                width={50}
                                height={50}
                                src={element.imgUrl}
                                alt="contact-logo-img"
                                className="contact-quickaccess-img"
                            />
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default ContactPage
