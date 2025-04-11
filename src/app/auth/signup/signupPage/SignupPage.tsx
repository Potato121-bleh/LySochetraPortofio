'use client'

import './signup.css'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {
    QueryClient,
    QueryClientProvider,
    useMutation,
} from '@tanstack/react-query'
import axios from 'axios'
import Loading from '@/app/loading'

let cartoonTrigger: boolean = false

export default function SignupPage() {
    const usernameInputRef = useRef<HTMLInputElement>(null)
    const nicknameInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)
    let [EyeIcon, setEyeIcon] = useState(faEyeSlash)
    let [passwordType, setPasswordType] = useState('password')
    let [guyMessage, setGuyMessage] = useState('')
    const queryClient = new QueryClient()

    const handleSignupReq = async (): Promise<any> => {
        if (
            usernameInputRef.current?.value &&
            nicknameInputRef.current?.value &&
            passwordInputRef.current?.value
        ) {
            try {
                require('dotenv').config()
                let apiUrl = process.env.NEXT_PUBLIC_API_URL + 'user/signup'
                console.log(apiUrl)
                let resp = await axios.post(
                    apiUrl,
                    {
                        username: usernameInputRef.current.value,
                        password: passwordInputRef.current.value,
                        nickname: nicknameInputRef.current.value,
                    },
                    {
                        headers: { 'Content-type': 'application/json' },
                    }
                )
                if (resp.status != 200) {
                    throw new Error('failed to sign up')
                }
                console.log(resp)
                console.log(resp.data)
                console.log(resp.status)
                return resp.data
            } catch (e) {
                console.log(e)
                return
            }
        }
    }

    const signUpMutate = useMutation(
        {
            mutationFn: handleSignupReq,
            onMutate() {
                return <Loading />
            },
            onSuccess() {
                //window.location.href = '/auth/log-in'
            },
            onError() {
                window.alert('Failed to Sign up, Please try again later')
            },
        },
        queryClient
    )

    const handleRemoveRollEye = (
        element: HTMLElement | null,
        bothEye: HTMLElement | null
    ) => {
        bothEye?.classList.remove('roll-eye-animation')
        element?.classList.remove('opacityUp')
        setGuyMessage('')
    }

    const handleAddRollEye = (
        element: HTMLElement | null,
        bothEye: HTMLElement | null,
        message: string
    ) => {
        bothEye?.classList.add('roll-eye-animation')
        setTimeout(() => {
            element?.classList.add('opacityUp')
            setGuyMessage(message)
        }, 2000)
    }

    useEffect(() => {
        let bothEye = document.getElementById('signup-cartoon-eyeball-con-id')
        let messageBox = document.getElementById('signup-message-con-id')

        usernameInputRef?.current?.addEventListener('focusin', () => {
            handleAddRollEye(
                messageBox,
                bothEye,
                'Everyone deserve their own special one, Make it unique!!'
            )
        })
        usernameInputRef?.current?.addEventListener('focusout', () => {
            handleRemoveRollEye(messageBox, bothEye)
        })

        nicknameInputRef?.current?.addEventListener('focusin', () => {
            handleAddRollEye(messageBox, bothEye, 'What should I call you??')
        })
        nicknameInputRef?.current?.addEventListener('focusout', () => {
            handleRemoveRollEye(messageBox, bothEye)
        })

        passwordInputRef?.current?.addEventListener('focusin', () => {
            handleAddRollEye(
                messageBox,
                bothEye,
                "I'm not strict on password, put what ever you want ~.~"
            )
        })
        passwordInputRef?.current?.addEventListener('focusout', () => {
            handleRemoveRollEye(messageBox, bothEye)
        })
    })

    const handleOpenEye = () => {
        if (EyeIcon == faEye) {
            setEyeIcon(faEyeSlash)
            setPasswordType('password')
        } else {
            setEyeIcon(faEye)
            setPasswordType('text')
        }
    }

    const handleSignup = () => {
        signUpMutate.mutateAsync()
    }

    return (
        <QueryClientProvider client={queryClient}>
            <main className="signup-main-con">
                <ul className="signup-sub-con">
                    <li className="signup-title">Sign Up</li>

                    <ul className="signup-cartoon-main-con">
                        <li className="signup-cartoon-con">
                            <Image
                                width={100}
                                height={100}
                                src="/loginNsignin/read-book-signin-guy.png"
                                alt="reading-book-guy"
                            />
                            <div
                                className="signup-cartoon-eyeball-con"
                                id="signup-cartoon-eyeball-con-id"
                            >
                                <div className="signup-cartoon-eyeball"></div>
                                <div className="signup-cartoon-eyeball"></div>
                            </div>
                            <div
                                className="signup-message-con"
                                id="signup-message-con-id"
                            >
                                <p>{guyMessage}</p>
                            </div>
                        </li>
                    </ul>

                    <ul className="signup-form-con">
                        <li className="signup-form-element">
                            <h3>Username: </h3>
                            <input ref={usernameInputRef} type="text" />
                        </li>
                        <li className="signup-form-element">
                            <h3>Nickname: </h3>
                            <input ref={nicknameInputRef} type="text" />
                        </li>
                        <li className="signup-form-element">
                            <h3>Password: </h3>
                            <input
                                style={{
                                    width: '125px',
                                    paddingRight: '30px',
                                }}
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
                    <li className="signup-form-submit-con">
                        <button
                            className="signup-form-submit yellow-btn-standard btn-type-one"
                            onClick={handleSignup}
                        >
                            Submit
                        </button>
                    </li>
                </ul>
            </main>
        </QueryClientProvider>
    )
}
