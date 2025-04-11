'use client'
import dynamic from 'next/dynamic'
// import Homepage from './homepage/homepage'

const Homepage = dynamic(() => import('@/app/(main)/home/homepage/homepage'), {
    ssr: false,
})

export default Homepage
