'use client'
import '@/app/(main)/home/homepage/home.css'

// import WebCarouselElement from '@/components/card/webCarousel/carouselElement'
import Image from 'next/image'
import { carouselData } from '@/app/data/componentData'
import { MouseEvent, useContext, useEffect, useRef, useState } from 'react'
// import Setting from '@/components/preferences/setting/setting'
import { fetchedInfo, temporaryUserData } from '@/components/method/utils'

import { DataContext } from '@/components/provider/provider'
import { themeWrapper } from '@/components/method/utilsStyle'
import '@/app/(main)/home/responsive/homeResp.css'
import dynamic from 'next/dynamic'

const WebCarouselElement = dynamic(
    () => import('@/components/card/webCarousel/CarouselElement'),
    {
        ssr: false,
    }
)

const Setting = dynamic(
    () => import('@/components/preferences/setting/Setting'),
    {
        ssr: false,
    }
)

function Homepage() {
    console.log('children RENDERED')
    let [carouselSwitchText, setCarouselSwitchText] = useState<string>(
        'Boring UI? Click here:'
    )
    let [carouselSwitchBtnText, setCarouselSwitchBtnText] =
        useState<string>('Try me')
    let [userNickname, setUserNickname] = useState<string>('Guest')
    let [contextUserData, setContextUserData] =
        useState<fetchedInfo>(temporaryUserData)
    let contextConsumer = useContext(DataContext)
    console.log(contextConsumer)

    useEffect(() => {
        console.log(contextConsumer.usernickname)
        let loadingUI = document.getElementById('loading-main-con-id')
        if (loadingUI) {
            // loadingUI.style.display = 'none'
        }
        if (contextConsumer.usernickname) {
            setUserNickname(contextConsumer.usernickname)
            setContextUserData(contextConsumer)
            console.log(contextConsumer)

            themeWrapper(
                contextConsumer,
                '.webinfo-card-element-con, .setting-content-one-element-form'
            )
        }
    })

    const handleSwitchCarouselContent = () => {
        let carouselContentOne = document.getElementById(
            'carousel-content-one-id'
        )
        let carouselContentTwo = document.getElementById(
            'carousel-content-two-id'
        )
        if (carouselContentOne?.classList.contains('temporary-remove')) {
            carouselContentTwo?.classList.add('temporary-remove')
            carouselContentOne.classList.remove('temporary-remove')
            setCarouselSwitchText('Please go back, lmao:')
            setCarouselSwitchBtnText('Go Back')
        } else if (carouselContentTwo?.classList.contains('temporary-remove')) {
            carouselContentOne?.classList.add('temporary-remove')
            carouselContentTwo.classList.remove('temporary-remove')
            setCarouselSwitchText('Boring UI? Click here:')
            setCarouselSwitchBtnText('Try me')
        }
    }

    return (
        <main className="main-con">
            <section className="section-top-home-con">
                <ul className="top-home-con">
                    <ul className="top-home-left-text-con">
                        <h5>Hi {userNickname}, my name is Sochetra</h5>
                        <h1>Let's advance the world through technology.</h1>
                        <h5>
                            I am a Junior Full Stack Developer with foundational
                            experience, currently pursuing my second year of
                            studies at ACLEDA University of Business.
                        </h5>
                        <ul className="top-home-left-btn-con">
                            <li>
                                <button className="yellow-btn-standard btn-type-one">
                                    Explore
                                </button>
                            </li>
                            <li>
                                <button className="white-btn-standard btn-type-two">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </ul>
                    <li className="right-img-con">
                        <div className="right-img-frame">
                            <Image
                                className="right-img"
                                width={200}
                                height={200}
                                priority={true}
                                src="/profile/pfnobg.png"
                                alt="Profile image"
                            />
                        </div>
                    </li>
                </ul>
            </section>

            <section className="webinfo-carousel-con">
                <h1 className="webinfo-carousel-header">Beyond Portfolio</h1>

                {/* Content one */}
                <div
                    className="webinfo-carousel-content-one temporary-remove"
                    id="carousel-content-one-id"
                >
                    <WebCarouselElement />
                    <div className="webinfo-carousel-road"></div>
                </div>

                {/* Content two */}
                <div
                    className="webinfo-card-content-two"
                    id="carousel-content-two-id"
                >
                    <ul className="webinfo-card-main-con">
                        {carouselData.map((element) => {
                            return (
                                <ul
                                    key={element.id}
                                    className="webinfo-card-element-con"
                                >
                                    <li className="webinfo-card-intro-con">
                                        {element.icon}
                                        <h1>{element.title}</h1>
                                    </li>
                                    <li className="webinfo-card-description">
                                        <p>{element.description}</p>
                                        <div className="webinfo-card-btn-con">
                                            <button
                                                className="white-btn-standard-small btn-type-one "
                                                onClick={() => {
                                                    window.location.href =
                                                        element.pathUrl
                                                    let loadingUI =
                                                        document.getElementById(
                                                            'loading-main-con-id'
                                                        )
                                                }}
                                            >
                                                Discover
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            )
                        })}
                    </ul>
                </div>

                <ul className="webinfo-carousel-btn-con">
                    <li className="webinfo-carousel-btn-title">
                        {carouselSwitchText}
                    </li>
                    <li>
                        <button
                            // style={{ fontSize: '10px' }}
                            onClick={handleSwitchCarouselContent}
                            className="white-btn-standard-small btn-type-two "
                        >
                            {carouselSwitchBtnText}
                        </button>
                    </li>
                </ul>
            </section>

            <section className="setting-main-con">
                <h1 className="setting-title">Settings</h1>
                <div className="setting-content-one">
                    <Setting userDataTem={contextUserData} />
                </div>
            </section>
        </main>
    )
}

export default Homepage
