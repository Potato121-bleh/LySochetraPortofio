'use client'
import './home.css'
import WebCarouselElement from '@/components/card/webCarousel/carouselElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { carouselData } from '@/app/data/componentData'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import Setting from '@/components/preferences/setting/setting'
import {
    fetchedInfo,
    handleMutationAndSetTempData,
    handleQueryUser,
    handleSettingMutation,
} from '@/components/method/utils'
import { QueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import HeaderPage from '@/components/navigation/header/header'

//[0] is for darkmode
//[1] is for sound effect

let temporaryUserData: fetchedInfo = {
    userid: 0,
    username: '',
    usernickname: '',
    settingid: 0,
    darkmode: 0,
    sound: 0,
    colorpalettes: 0,
    font: 0,
    language: 0,
}

function Homepage() {
    let [carouselSwitchText, setCarouselSwitchText] = useState<string>(
        'Boring UI? Click here:'
    )
    let [carouselSwitchBtnText, setCarouselSwitchBtnText] =
        useState<string>('Try me')
    let [userNickname, setUserNickname] = useState<string>('Guest')
    const queryClient = new QueryClient()
    let searchParams = useSearchParams()
    let usernameUrlParam = searchParams.get('username') ?? ''

    const queryUserData = handleQueryUser(usernameUrlParam, queryClient)

    const querySettingMutation = handleSettingMutation(
        temporaryUserData,
        queryClient
    )

    useEffect(() => {
        handleMutationAndSetTempData({
            queryUserData: queryUserData,
            querySettingMutation: querySettingMutation,
            setUserNickname: setUserNickname,
        })
        console.log(temporaryUserData)
    }, [queryUserData.data])

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
        <>
            <HeaderPage username={userNickname} />
            <main className="main-con">
                <section className="section-top-home-con">
                    <ul className="top-home-con">
                        <ul className="top-home-left-text-con">
                            <h5>Hi {userNickname}, my name is Sochetra</h5>
                            <h1>Let's advance the world through technology.</h1>
                            <h5>
                                I am a Junior Full Stack Developer with
                                foundational experience, currently pursuing my
                                second year of studies at ACLEDA University of
                                Business.
                            </h5>
                            <ul className="top-home-left-btn-con">
                                <li>
                                    <button className="yellow-btn-standard">
                                        Explore
                                    </button>
                                </li>
                                <li>
                                    <button className="purple-btn-standard">
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
                                    src="/profile/pfnobg.png"
                                    alt="Profile image"
                                />
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="webinfo-carousel-con">
                    <h1 className="webinfo-carousel-header">
                        Beyond Portfolio
                    </h1>

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
                                            <FontAwesomeIcon
                                                size="3x"
                                                className="web-carousel-attactment-icon"
                                                icon={element.icon}
                                            />
                                            <h1>{element.title}</h1>
                                        </li>
                                        <li className="webinfo-card-description">
                                            <p>{element.description}</p>
                                            <div className="webinfo-card-btn-con">
                                                <button className="web-carousel-yellow-btn">
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
                                onClick={handleSwitchCarouselContent}
                                className="purple-small-btn-standard"
                            >
                                {carouselSwitchBtnText}
                            </button>
                        </li>
                    </ul>
                </section>

                <section className="setting-main-con">
                    <h1 className="setting-title">Settings</h1>
                    <div className="setting-content-one">
                        <Setting />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Homepage
