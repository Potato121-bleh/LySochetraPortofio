import {
    faGraduationCap,
    faScrewdriverWrench,
    faSitemap,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { Construction, GridView, School } from '@mui/icons-material'

type carouselDataType = {
    id: number
    icon: JSX.Element
    title: string
    description: string
}

export let carouselData: carouselDataType[] = [
    {
        id: 1,
        icon: <Construction className="web-carousel-attactment-icon" />,
        title: 'Customization',
        description:
            'Does the UI feel plain? Good news! You can fully customize it to match your preferences.',
    },
    {
        id: 2,
        icon: <GridView className="web-carousel-attactment-icon" />,
        title: 'Component',
        description:
            "This portfolio not only showcases my skills and expertise but also lets you explore the custom components I've built.",
    },
    {
        id: 3,
        icon: <School className="web-carousel-attactment-icon" />,
        title: 'Education',
        description:
            'Exploring a portfolio without learning about the creator’s background feels incomplete. Take a look at my education and credentials!',
    },
]
