'use client'

import dynamic from 'next/dynamic'

const ComponentPage = dynamic(
    () => import('@/app/(main)/component/componentPage/ComponentPage'),
    {
        ssr: false,
    }
)

export default ComponentPage
