import {
    faGraduationCap,
    faScrewdriverWrench,
    faSitemap,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

type carouselDataType = {
    id: number
    icon: IconDefinition
    title: string
    description: string
}

export let carouselData: carouselDataType[] = [
    {
        id: 1,
        icon: faScrewdriverWrench,
        title: 'Customization',
        description:
            'Does the UI feel plain? Good news! You can fully customize it to match your preferences.',
    },
    {
        id: 2,
        icon: faSitemap,
        title: 'Component',
        description:
            "This portfolio not only showcases my skills and expertise but also lets you explore the custom components I've built.",
    },
    {
        id: 3,
        icon: faGraduationCap,
        title: 'Education',
        description:
            'Exploring a portfolio without learning about the creator’s background feels incomplete. Take a look at my education and credentials!',
    },
]
