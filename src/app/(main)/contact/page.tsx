'use client'

import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { ContactPage } from './ContactPage'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'

export type contactCardArrType = {
    id: number
    title: string
    description: string
    icon: JSX.Element
}

export default ContactPage
