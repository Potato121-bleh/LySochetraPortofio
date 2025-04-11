'use client'
import { useEffect } from 'react'

const colorArr = [
    {
        id: 1,
        className: 'color-bar-one',
        colorOne: 'red',
        colorTwo: 'green',
        spec: '2px',
    },
    {
        id: 2,
        className: 'color-bar-two',
        colorOne: 'orange',
        colorTwo: 'purple',
        spec: '2px',
    },
    {
        id: 3,
        className: 'color-bar-three',
        colorOne: 'yellow',
        colorTwo: 'brown',
        spec: '2px',
    },
    {
        id: 4,
        className: 'color-bar-four',
        colorOne: 'blue',
        colorTwo: 'gray',
        spec: '3px',
    },
]

let timeOutStarter = 100

export function Loading() {
    useEffect(() => {
        let mainCom = document.getElementById('loading-main-component-id')
        let bothIntrobox = document.getElementById('loading-searchbox-block-id')
        let mainComHandler = document.getElementById('loading-main-handler')
        let sideHandler = document.getElementById('loading-side-handler-id')
        let colorBarOne = document.getElementById('color-bar-one')
        let colorBarTwo = document.getElementById('color-bar-two')
        let colorBarThree = document.getElementById('color-bar-three')
        let colorBarFour = document.getElementById('color-bar-four')

        const handleAnimation = () => {
            if (
                bothIntrobox &&
                mainCom &&
                mainComHandler &&
                sideHandler &&
                colorBarOne &&
                colorBarTwo &&
                colorBarThree &&
                colorBarFour
            ) {
                console.log('It entered the if/else')
                mainComHandler.style.visibility = 'visible'
                bothIntrobox.style.visibility = 'visible'
                mainCom.classList.add('loading-moveMainLeftRight')
                sideHandler.style.visibility = 'hidden'
                sideHandler.classList.remove('loading-rotateMainBar')
                colorBarOne.style.visibility = 'hidden'
                colorBarTwo.style.visibility = 'hidden'
                colorBarThree.style.visibility = 'hidden'
                colorBarFour.style.visibility = 'hidden'

                setTimeout(() => {
                    mainCom.classList.remove('loading-moveMainLeftRight')
                    bothIntrobox.style.visibility = 'hidden'
                    mainComHandler.style.visibility = 'hidden'
                    sideHandler.style.visibility = 'visible'
                    sideHandler.classList.add('loading-rotateMainBar')

                    setTimeout(() => {
                        colorBarOne.style.visibility = 'visible'
                        setTimeout(() => {
                            colorBarTwo.style.visibility = 'visible'
                            setTimeout(() => {
                                colorBarThree.style.visibility = 'visible'
                                setTimeout(() => {
                                    colorBarFour.style.visibility = 'visible'
                                }, 900)
                            }, 750)
                        }, 800)
                    }, 1000)
                }, 2000)
            }
        }

        handleAnimation()

        let animationInterval = setInterval(handleAnimation, 6000)

        return () => clearInterval(animationInterval)
    })

    return (
        <main className="loading-main-con" id="loading-main-con-id">
            <section className="loading-sub-con">
                <ul
                    className="loading-searchbox"
                    id="loading-searchbox-block-id"
                >
                    <li className="loading-searchbox-block"></li>
                    <li className="loading-searchbox-block"></li>
                </ul>

                <ul
                    className="loading-main-component"
                    id="loading-main-component-id"
                >
                    <li
                        className="loading-main-handler"
                        id="loading-main-handler"
                    ></li>

                    <ul
                        className="loading-side-handler-con"
                        id="loading-side-handler-id"
                    >
                        <ul className="loading-side-handler-element left-element">
                            <li className="loading-side-handler-block"></li>
                            <li className="loading-side-handler-bar"></li>
                        </ul>
                        <ul className="loading-side-handler-element loading-side-handler-right-element">
                            <li className="loading-side-handler-block"></li>
                            <li className="loading-side-handler-bar loading-side-handler-right-bar"></li>
                        </ul>
                    </ul>

                    {/*

                    <li className="loading-color-con color-bar-one">
                        <div className="loading-color-one"></div>
                        <div className="loading-color-one"></div>
                    </li>
                    <li className="loading-color-con color-bar-two">
                        <div className="loading-color-one"></div>
                        <div className="loading-color-one"></div>
                    </li>
                    <li className="loading-color-con color-bar-three">
                        <div className="loading-color-one"></div>
                        <div className="loading-color-one"></div>
                    </li>
                    <li className="loading-color-con color-bar-four">
                        <div className="loading-color-one"></div>
                        <div className="loading-color-one"></div>
                    </li>
                    */}
                </ul>

                {colorArr.map((element) => {
                    return (
                        <li
                            key={element.id}
                            className="loading-color-con "
                            id={element.className}
                        >
                            <div
                                className="loading-color-one"
                                style={{
                                    backgroundColor: element.colorOne,
                                    marginLeft: element.spec,
                                }}
                            ></div>
                            <div
                                className="loading-color-one"
                                style={{ backgroundColor: element.colorTwo }}
                            ></div>
                        </li>
                    )
                })}
            </section>
        </main>
    )
}
