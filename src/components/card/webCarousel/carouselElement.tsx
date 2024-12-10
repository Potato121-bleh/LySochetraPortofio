import Image from 'next/image'
import React, { ReactElement } from 'react'
import './carouselElement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { carouselData } from '@/app/data/componentData'

function WebCarouselElement() {
    return (
        <ul className="web-carousel-main-con drive-off-screen">
            <li className="web-carousel-rickshaw-con">
                <Image
                    className="rickshaw-img shake-element"
                    src="/component/rickshaw-new-clean.png"
                    width={100}
                    height={100}
                    alt="RickShaw"
                />
                <div className="rickshaw-wheel-con">
                    <Image
                        className="rickshaw-front-wheel spin-wheel "
                        width={50}
                        height={50}
                        src="/component/wheel-new-clean.png"
                        alt="wheel"
                    />
                    <Image
                        className="rickshaw-back-wheel spin-wheel "
                        width={50}
                        height={50}
                        src="/component/wheel-new-clean.png"
                        alt="wheel"
                    />
                </div>
            </li>
            <ul className="web-carousel-attactment-con">
                {carouselData.map((element) => {
                    return (
                        <li
                            key={element.id}
                            className="web-carousel-attactment-element"
                        >
                            <div className="web-carousel-attactment-text-con shake-element">
                                <div className="web-carousel-attactment-profile-con">
                                    <FontAwesomeIcon
                                        size="3x"
                                        className="web-carousel-attactment-icon"
                                        icon={element.icon}
                                    />
                                    <h3>{element.title}</h3>
                                </div>
                                <div>
                                    <p className="web-carousel-attactment-profile-description">
                                        {element.description}
                                    </p>
                                    <div className="web-carousel-attactment-profile-btn">
                                        <button className="web-carousel-yellow-btn">
                                            Discover
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="web-carousel-attactment-cart-con">
                                <Image
                                    className="web-carousel-attactment-cart-img shake-element"
                                    width={100}
                                    height={50}
                                    src="/component/carrier-attactment-clean.png"
                                    alt="carousel-attactment"
                                />
                            </div>

                            <div className="carrier-wheel-con">
                                <Image
                                    className="carrier-front-wheel spin-wheel"
                                    width={50}
                                    height={50}
                                    src="/component/wheel-new-clean.png"
                                    alt="wheel"
                                />
                                <Image
                                    className="carrier-back-wheel spin-wheel"
                                    width={50}
                                    height={50}
                                    src="/component/wheel-new-clean.png"
                                    alt="wheel"
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </ul>
    )
}

export default WebCarouselElement
