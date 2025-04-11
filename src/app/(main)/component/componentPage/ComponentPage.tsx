'use client'
import { DataContext } from '@/components/provider/provider'
import './componentPage.css'
import { useEffect, useContext } from 'react'
import { themeWrapper } from '@/components/method/utilsStyle'
import CategoryCard, {
    handleNavigateSection,
} from '@/components/card/componentPage/visualCategory/VisualCard'

import { ArrowBackIos } from '@mui/icons-material'
import { VisualEleCard } from '@/components/card/componentPage/visualElement/VisualEleCard'
import { categoryCardArr, componentGalleryArr, visualCardArrType } from './data'

const ComponentPage = () => {
    const themeContext = useContext(DataContext)

    const toggleNoDataFound = (componentData: visualCardArrType[]) => {
        let toggleMainCon = document.getElementById('com-gallery-main-con-id')
        if (componentData.length === 0) {
            return (
                <li className="toggle-nofound-message">
                    <h1 className="nocomponent-data-found-message">
                        No component are available right now, Please come back
                        again later
                    </h1>
                </li>
            )
        } else {
            return componentData.map((element) => {
                return <VisualEleCard key={element.id} data={element} />
            })
        }
    }

    useEffect(() => {
        if (!themeContext) return
        themeWrapper(
            themeContext,
            '.com-child-content-sub-main, .com-gallery-element-con'
        )
    })

    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <ul
                style={{
                    padding: '0px',
                }}
                className="com-gallery-section-group"
                id="com-gallery-section-con-id-0"
            >
                <li className="com-control-bar-main-con">
                    <div className="com-control-bar-title">
                        <p>Category</p>
                    </div>
                </li>
                <ul className="com-content-main-con">
                    {categoryCardArr.map((element) => {
                        return <CategoryCard key={element.id} data={element} />
                    })}
                </ul>
            </ul>

            {/* Gallery */}

            {componentGalleryArr.map((galleryElement) => {
                let containerId =
                    'com-gallery-section-con-id-' + galleryElement.id
                return (
                    <ul
                        id={containerId}
                        key={galleryElement.id}
                        className="com-gallery-section-group"
                        style={{
                            padding: '0px',
                            width: '90%',
                            display: 'none',
                        }}
                    >
                        <li className="com-control-bar-main-con">
                            <div className="com-control-bar-backward-con">
                                <ArrowBackIos
                                    role="button"
                                    onClick={() => handleNavigateSection(0)}
                                    className="com-control-bar-backward"
                                />
                            </div>
                            <div className="com-control-bar-title">
                                <p>{galleryElement.title}</p>
                            </div>
                        </li>

                        <ul
                            className="com-gallery-main-con"
                            id="com-gallery-main-con-id"
                        >
                            {toggleNoDataFound(galleryElement.list)}
                        </ul>
                    </ul>
                )
            })}
        </main>
    )
}

export default ComponentPage
