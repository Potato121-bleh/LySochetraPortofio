'use client'
import { categoryCardArrType } from '@/app/(main)/component/data'
import './visualCard.css'

type categoryDataType = {
    data: categoryCardArrType
}

export const handleNavigateSection = (targetId: number) => {
    let idBuilder = 'com-gallery-section-con-id-' + targetId
    let targetEle = document.getElementById(idBuilder)
    let categoryGroup = document.querySelectorAll('.com-gallery-section-group')
    if (targetEle && categoryGroup) {
        categoryGroup.forEach((element) => {
            ;(element as HTMLElement).style.display = 'none'
        })
        targetEle.style.display = 'block'
    }
}

const CategoryCard = ({ data }: categoryDataType) => {
    return (
        <li className="com-child-content-con">
            <ul className="com-child-content-sub-main">
                <li className="com-child-media-con">
                    <video
                        className="com-child-video"
                        loop
                        autoPlay
                        muted
                        width={100}
                        height={100}
                    >
                        <source src={data.imgUrl} type="video/mp4" />
                    </video>
                </li>
                <ul className="com-child-description-con">
                    <li className="com-child-description">
                        <p
                            style={{
                                margin: '0px',
                                textAlign: 'center',
                            }}
                        >
                            Looking for{' '}
                            <span style={{ fontWeight: 'bold' }}>
                                {data.subDescription}
                            </span>
                            {''}
                            {data.description}
                        </p>
                    </li>
                    <li className="com-child-description-btn-con">
                        <button
                            className="white-btn-standard-extrasmall btn-type-one"
                            onClick={() => handleNavigateSection(data.id)}
                        >
                            Explore
                        </button>
                    </li>
                </ul>
            </ul>
        </li>
    )
}

export default CategoryCard
