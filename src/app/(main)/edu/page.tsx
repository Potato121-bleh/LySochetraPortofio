'use client'
import dynamic from 'next/dynamic'

const Edupage = dynamic(() => import('@/app/(main)/edu/edupage/Edupage'), {
    ssr: false,
})

export default Edupage
