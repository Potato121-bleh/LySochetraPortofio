export type categoryCardArrType = {
    id: number
    description: string
    subDescription: string
    imgUrl: string
    pathUrl: string
}


export type visualCardArrType = {
    id: number
    imgUrl: string
    pathUrl: string
    title: string
    categoryName: string
}


export type componentGalleryArrType = {
    id: number
    title: string
    list: visualCardArrType[]
}




// Data section 


export const categoryCardArr: categoryCardArrType[] = [
    {
        id: 1,
        description:
            '? These components are designed to showcase my skills and experience in graph-based visualization and marketingstrategies. More than just UI elements, they provide insight into the tools and technologies I used to bring them to life. Each graph is built dynamically to adapt to various conditions and can be adjusted as needed for maximum flexibility.',
        subDescription: 'Graph',
        imgUrl: '/component/pageGif/graphGif.mp4',
        pathUrl: '',
    },
    {
        id: 2,
        description:
            '? These components are designed to highlight my expertise in styling and CSS-based visualization. More than just visually appealing UI elements, they also showcase the tools and technologies I use to create these designs. Each element is built to dynamically adjust to its container, ensuring seamless adaptability for future use.',
        subDescription: 'Animation',
        imgUrl: '/component/pageGif/animationGif.mp4',
        pathUrl: '',
    },
    {
        id: 3,
        description:
            '? These components are designed to showcase my expertise in reusable component development, combining both styling and logic to create visually appealing and functional elements. Additionally, all components are fully adaptable—you can integrate them into your application and customize them by passing arguments to adjust their appearance and behavior to suit your needs.',
        subDescription: 'Component',
        imgUrl: '/component/pageGif/componentGif.mp4',
        pathUrl: '',
    },
]




export const componentGalleryArr: componentGalleryArrType[] = [
    {
        id: 1,
        title: 'Graph',
        list: [
            {
                id: 1,
                imgUrl: '/component/pageGif/graphDemo.png',
                pathUrl: './component/graph/graph1',
                title: 'graph1',
                categoryName: 'graph',
            },
        ],
    },
    {
        id: 2,
        title: 'Animation',
        list: [
        ],
    },
    {
        id: 3,
        title: 'Component',
        list: [
            {
                id: 1,
                imgUrl: '/component/pageGif/graphDemo.png',
                pathUrl: './component/components/component1',
                title: 'component1',
                categoryName: 'Component',
            },
        ],
    },
]
