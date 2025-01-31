'use client'

import { useEffect, useRef, useState } from 'react'
import './login.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import {
    QueryClient,
    QueryClientProvider,
    useMutation,
} from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'

let cartoonTrigger: boolean = false

export default function LoginPage() {
    const passwordInputRef = useRef<HTMLInputElement>(null)
    let [EyeIcon, setEyeIcon] = useState(faEyeSlash)
    let [passwordType, setPasswordType] = useState('password')
    const queryClient = new QueryClient()
    const router = useRouter()
    require('dotenv').config()
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL

    const handleAuth = async (): Promise<any> => {
        let response
        if (apiBaseUrl != undefined) {
            let usernameInput = document.getElementById(
                'username-input-id'
            ) as HTMLInputElement
            let passwordInput = document.getElementById(
                'password-input-id'
            ) as HTMLInputElement
            try {
                response = await axios.post(
                    apiBaseUrl + 'user/auth',
                    {
                        username: usernameInput.value,
                        password: passwordInput.value,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        withCredentials: true,
                    }
                )
            } catch (error) {
                alert('Access Unauthorized, Please try again')
                throw Error('Access Unauthorized, Please try again')
            }
        } else {
            alert('Server failed, please try again')
            return ''
        }
        if (!response) {
            return ''
        }
        return response
    }

    const authMutation = useMutation(
        {
            mutationFn: handleAuth,
            onSuccess: () => {
                let usernameInput = document.getElementById(
                    'username-input-id'
                ) as HTMLInputElement
                window.location.href = '/'
            },
        },
        queryClient
    )

    const handleLogin = async () => {
        authMutation.mutate()
    }

    useEffect(() => {
        passwordInputRef?.current?.addEventListener('focusin', () => {
            if (!cartoonTrigger) {
                let bothHand = document.getElementById('both-hand-con-id')
                bothHand?.classList.add('move-hand-to-top')
            }
        })
        passwordInputRef?.current?.addEventListener('focusout', () => {
            if (!cartoonTrigger) {
                let bothHand = document.getElementById('both-hand-con-id')
                bothHand?.classList.remove('move-hand-to-top')
            }
        })
    })

    const handleOpenEye = () => {
        if (EyeIcon == faEye) {
            setEyeIcon(faEyeSlash)
            setPasswordType('password')
            cartoonTrigger = false
        } else {
            setEyeIcon(faEye)
            setPasswordType('text')
            cartoonTrigger = true
        }
    }

    return (
        <QueryClientProvider client={queryClient}>
            <main className="login-main-con">
                <ul className="login-sub-con">
                    <li className="login-title">Login</li>

                    <ul className="login-cartoon-main-con">
                        <li className="login-cartoon-con">
                            <Image
                                className="login-cartoon-head-img"
                                width={50}
                                height={50}
                                src="/loginNsignin/monkey-head-clean.png"
                                alt="money-head"
                            />
                            <div
                                style={{
                                    transition: 'all 300ms ease-in-out',
                                }}
                                id="both-hand-con-id"
                            >
                                <div className="login-cartoon-hand-img monkey-left-hand">
                                    <Image
                                        className="monkey-hand"
                                        width={100}
                                        height={40}
                                        src="/loginNsignin/monkey-hand-clean.png"
                                        alt="money-hand"
                                    />
                                </div>
                                <div className="login-cartoon-hand-img monkey-right-hand">
                                    <Image
                                        className="monkey-hand"
                                        width={100}
                                        height={40}
                                        src="/loginNsignin/monkey-hand-clean.png"
                                        alt="money-hand"
                                    />
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul className="login-form-con">
                        <li className="login-form-element">
                            <h3>Username: </h3>
                            <input type="text" id="username-input-id" />
                        </li>
                        <li className="login-form-element">
                            <h3>Password: </h3>
                            <input
                                style={{
                                    width: '125px',
                                    paddingRight: '30px',
                                }}
                                id="password-input-id"
                                ref={passwordInputRef}
                                type={passwordType}
                            />
                            <div
                                role="button"
                                id="open-eye-element-id"
                                onClick={handleOpenEye}
                                style={{
                                    position: 'absolute',
                                    right: '6px',
                                }}
                            >
                                <FontAwesomeIcon icon={EyeIcon} />
                            </div>
                        </li>
                    </ul>
                    <li className="login-form-submit-con">
                        <p>No Account Yet?</p>
                        <Link
                            className="login-form-submit-signup-url"
                            href="/auth/sign-up"
                        >
                            Sign Up
                        </Link>
                        <button
                            onClick={handleLogin}
                            className="login-form-submit yellow-standard-btn"
                        >
                            Login
                        </button>
                    </li>
                </ul>
            </main>
        </QueryClientProvider>
    )
}
