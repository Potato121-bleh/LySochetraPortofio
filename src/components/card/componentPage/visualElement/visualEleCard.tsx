'use client'
import Image from 'next/image'
import './visualEleCard.css'
import { visualCardArrType } from '@/app/(main)/component/data'

type visualEleCardType = {
    data: visualCardArrType
}

export const VisualEleCard = ({ data }: visualEleCardType) => {
    return (
        <ul
            className="com-gallery-element-con"
            onClick={() => (window.location.href = data.pathUrl)}
        >
            <li className="com-gallery-element-img">
                <Image
                    width={100}
                    height={100}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    src={data.imgUrl}
                    alt="image-component-overview"
                />
            </li>
            <ul className="com-gallery-element-detail-con">
                <li className="com-gallery-element-title">
                    <p style={{ margin: '0px' }}>{data.title}</p>
                </li>
                <li className="com-gallery-element-category-name">
                    <p style={{ margin: '0px', fontWeight: 'bold' }}>
                        {data.categoryName}
                    </p>
                </li>
            </ul>
        </ul>
    )
}
