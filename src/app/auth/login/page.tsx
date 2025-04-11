'use client'
import dynamic from 'next/dynamic'
// import Homepage from './homepage/homepage'

const Loginpage = dynamic(
    () => import('@/app/auth/login/loginPage/Loginpage'),
    {
        ssr: false,
    }
)

export default Loginpage
