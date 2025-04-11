'use client'
import dynamic from 'next/dynamic'

const Signuppage = dynamic(
    () => import('@/app/auth/signup/signupPage/SignupPage'),
    {
        ssr: false,
    }
)

export default Signuppage
