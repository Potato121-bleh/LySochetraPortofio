'use client'
import Link from 'next/link'
import './header.css'
import { redirect, useSearchParams } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { fetchedInfo, getSetting, verifyToken } from '@/components/method/utils'
import { temporaryUserData } from '@/components/method/utils'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { DataContext } from '@/components/provider/provider'

type headerInfo = {
    userInfo: fetchedInfo
}

type userinfo = {
    username: string
}

let tracker = true

function HeaderPage() {
    let contextConsumer = useContext(DataContext)

    useEffect(() => {
        let headerTxt = document.getElementById('user-nickname-id')
        if (headerTxt && contextConsumer.usernickname) {
            headerTxt.innerText = contextConsumer.usernickname
        }
    })

    const handleNavigate = () => {
        window.location.href = '/auth/log-in'
    }

    return (
        <header className="main-header-con">
            <ul className="sub-con">
                <li className="user-profile">
                    <h2 id="user-nickname-id">Guest</h2>
                </li>
                <ul className="nav-bar">
                    <li>Home</li>
                    <li>Education</li>
                    <li>Component</li>
                    <li>Contact</li>
                </ul>
                <li className="login-con">
                    <button
                        onClick={handleNavigate}
                        className="yellow-btn-standard"
                    >
                        Login
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default HeaderPage
