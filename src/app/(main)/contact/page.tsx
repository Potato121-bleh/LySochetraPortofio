'use client'

import dynamic from 'next/dynamic'

const ContactPage = dynamic(
    () => import('@/app/(main)/contact/contactpage/ContactPage'),
    {
        ssr: false,
    }
)

export default ContactPage
