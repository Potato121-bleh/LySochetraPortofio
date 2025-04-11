'use client'
import Link from 'next/link'
import { redirect, useSearchParams } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { fetchedInfo, getSetting, verifyToken } from '@/components/method/utils'
import { temporaryUserData } from '@/components/method/utils'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { DataContext } from '@/components/provider/provider'
import axios from 'axios'
import { themeWrapper } from '@/components/method/utilsStyle'

type headerInfo = {
    userInfo: fetchedInfo
}

type userinfo = {
    username: string
}

let tracker = true

function HeaderPage() {
    const contextConsumer = useContext(DataContext)
    const navigationArr = [
        {
            id: 1,
            title: 'Home',
            path: '/',
        },
        {
            id: 2,
            title: 'Education',
            path: '/edu',
        },
        {
            id: 3,
            title: 'Component',
            path: '/component',
        },
        {
            id: 4,
            title: 'Contact',
            path: '/contact',
        },
    ]

    const handleLogout = async () => {
        require('dotenv').config()
        const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL
        try {
            const resp = await axios.get(BASE_API_URL + 'user/auth/logout', {
                withCredentials: true,
            })
            if (resp.status != 200) {
                throw new Error('failed to logout, by system')
            }
            alert(resp.data)
            window.location.href = '/'
        } catch (e) {
            alert('Logout failed, please try again or refresh the app')
            console.log(e)
        }
    }

    useEffect(() => {
        let headerTxt = document.getElementById('user-nickname-id')
        let dialogUsername = document.getElementById(
            'header-dialog-title-username-id'
        )
        // let dialogMenuEle = document.querySelectorAll('.header-page-element')
        if (headerTxt && dialogUsername && contextConsumer.usernickname) {
            headerTxt.innerText = contextConsumer.usernickname
            dialogUsername.innerText = contextConsumer.usernickname
            themeWrapper(contextConsumer, '.header-page-element')
        }
    })

    const handleAuthSwitch = () => {
        if (contextConsumer.usernickname) {
            return (
                <button
                    onClick={handleLogout}
                    className="yellow-btn-standard btn-type-one"
                >
                    Log out
                </button>
            )
        } else {
            return (
                <button
                    onClick={() => handleNavigate('login')}
                    className="yellow-btn-standard btn-type-one"
                >
                    Login
                </button>
            )
        }
    }

    const handleNavigate = (ref: string) => {
        if (ref == 'login') {
            window.location.href = '/auth/login'
        } else {
            window.location.href = '/auth/signout'
        }
    }

    const handleOpenMenu = () => {
        let headerDialogEle = document.getElementById(
            'header-dialog-main-con-id'
        )
        let dialogHoverBoard = document.getElementById(
            'header-customer-menu-hoverboard-id'
        )
        if (headerDialogEle && dialogHoverBoard) {
            headerDialogEle.style.display = 'block'
            setTimeout(() => {
                headerDialogEle.style.transform = 'translateX(0px)'
            }, 100)
            dialogHoverBoard.style.display = 'none'
            document.addEventListener(
                'click',
                function handleCloseEvent(e: MouseEvent) {
                    if (!headerDialogEle.contains(e.target as Node)) {
                        headerDialogEle.style.transform = 'translateX(240px)'
                        dialogHoverBoard.style.display = 'block'
                        setTimeout(() => {
                            headerDialogEle.style.display = 'none'
                        }, 300)
                        this.removeEventListener('click', handleCloseEvent)
                    }
                }
            )
        }
    }

    return (
        <header className="main-header-con">
            <ul className="sub-con">
                <li className="user-profile">
                    <h2 id="user-nickname-id">Guest</h2>
                </li>
                <ul className="nav-bar">
                    {navigationArr.map((element) => {
                        return (
                            <li
                                key={element.id}
                                role="button"
                                onClick={() =>
                                    (window.location.href = element.path)
                                }
                            >
                                {element.title}
                            </li>
                        )
                    })}
                </ul>
                <li className="login-con">{handleAuthSwitch()}</li>

                <ul className="header-custom-menu-icon">
                    <li className="header-custom-menu-icon-element"></li>
                    <li className="header-custom-menu-icon-element"></li>
                    <li className="header-custom-menu-icon-element"></li>
                    <li
                        className="header-customer-menu-hoverboard"
                        id="header-customer-menu-hoverboard-id"
                        onClick={handleOpenMenu}
                    ></li>
                </ul>

                {/* dialog of menu onClick={handleOpenMenu}  */}

                <div
                    className="header-dialog-main-con"
                    id="header-dialog-main-con-id"
                >
                    <ul className="header-dialog-sub-con">
                        <li className="header-dialog-title">
                            Hey!{' '}
                            <span id="header-dialog-title-username-id">
                                Guest
                            </span>
                        </li>
                        <ul className="header-page-con">
                            <li
                                className="header-page-element"
                                onClick={() =>
                                    (window.location.href = './home')
                                }
                            >
                                <p>Home</p>
                            </li>
                            <li
                                className="header-page-element"
                                onClick={() => (window.location.href = './edu')}
                            >
                                <p>Education</p>
                            </li>
                            <li
                                className="header-page-element"
                                onClick={() =>
                                    (window.location.href = './component')
                                }
                            >
                                <p>Component</p>
                            </li>
                            <li
                                className="header-page-element"
                                onClick={() =>
                                    (window.location.href = './contact')
                                }
                            >
                                <p>Contact</p>
                            </li>
                        </ul>
                        <li className="header-auth-con">
                            {handleAuthSwitch()}
                        </li>
                    </ul>
                </div>
            </ul>
        </header>
    )
}

export default HeaderPage
