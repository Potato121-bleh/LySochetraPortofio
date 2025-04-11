
export interface EduSkill {
    id: number
    title: string
    imgUrl: string
    description: string
    experience: string
    experienceType: string
}

export const frontendSkillEdu: EduSkill[] = [
    {
        id: 1,
        title: 'HTML',
        imgUrl: '/eduImg/html-logo-rmbg.png',
        description: "Hypertext Markup Language, is programming langauge? idk, what u think?? I'm web developer ofc HTML is first thing i learn, Mostly I hate div, it annoying during debug or design, so the fact is I'm using ul & li instead",
        experience: "14 months",
        experienceType: ""
    },
    {
        id: 2,
        title: 'CSS',
        imgUrl: '/eduImg/css-logo-rmbg.png',
        description: "Cascading Style Sheets, is a tool where all pages shine. In CSS field, I love working with animation and the most property I use is flex, don't ask me why.",
        experience: "14 months",
        experienceType: ""
    },
    {
        id: 3,
        title: 'Javascript',
        imgUrl: '/eduImg/js-logo-rmbg.png',
        description: "Javascript AKA 'Dumbest langauge of all time', Even though sometime, it's make weird behavior but it came with a lot of library to work with. I have experience working with DOM and also some logic to support DOM behavior with the help of React. Beside that I also using Axios.",
        experience: "12 months",
        experienceType: "(5 months with company)"
    },
    {
        id: 4,
        title: 'Typescript',
        imgUrl: '/eduImg/ts-logo-rmbg.png',
        description: "What a lifesaver, For me typescript is a lifesaver for javascript since I'm start using React or NextJs. Based on my experience, if the data structure is large or small, create its own type is a good practice to avoid type error during the process such as passing data around component or using props ",
        experience: "8 months ",
        experienceType: "(5 months with company)"
    },
    {
        id: 5,
        title: 'React',
        imgUrl: '/eduImg/react-logo-rmbg.png',
        description: 'React is one of the most developed library in web development field, Who does not love react. In React, I got some experience from a company where I been taught to fix some mistake in React such as code splitting, naming convenion and how to manage the quality of code to meet the standard',
        experience: "10 months ",
        experienceType: "(2 months with company)"
    },
    {
        id: 6,
        title: 'NextJs',
        imgUrl: '/eduImg/nextjs-logo-rmbg.png',
        description: "Felt like I'm struggle with routing on React which is why NextJs come to play. NextJs is where I can explore more on SSR & CSR. It also allow me to use some feature which built on top of React such as Routing system. But choosing between React & NextJs? Depend on how complex of routing systemn of my app can be.",
        experience: "9 months ",
        experienceType: "(3 months with company)"
    },
    {
        id: 7,
        title: "React Query",
        imgUrl: '/eduImg/react-query-logo-rmbg.png',
        description: "Beside main library for building app, React query by @TanStack_Query allow me to manage quering more easier and it fit well with Axios. I have some experience with React Query to perform some Authentication from Frontend",
        experience: "4 months",
        experienceType: ""
    },
    {
        id: 8,
        title: "MUI",
        imgUrl: '/eduImg/mui-logo-rmbg.png',
        description: "Sometime I want a component to be more professional, MUI is come to play. Based on my experience when I building complex component such as graph or dataGrid, I can use with my own customization or somehow we can use it to replace our normal HTML tag",
        experience: "3 months",
        experienceType: "(with company)"
    },
    {
        id: 9,
        title: "SASS",
        imgUrl: '/eduImg/sass-logo-rmbg.png',
        description: "Who need CSS when you got SASS? I personally using SASS instead of normal CSS. because it provide an easy way to create variable and method to create reusable css code such as function & if/else statement",
        experience: "2 months",
        experienceType: "(with company)"
    }
]

export const backendSkillEdu: EduSkill[] = [
    {
        id: 1,
        title: 'Golang',
        imgUrl: '/eduImg/golang-logo-rmbg.png',
        description: "Golang might not have popularity like python or javascript but it also have some good feature, This portfolio using Golang as its Backend system and I have experience with handle endpoint, validation and work with some design pattern.",
        experience: "2 months",
        experienceType: "(with company)"
    },
    {
        id: 2,
        title: 'Python',
        imgUrl: '/eduImg/python-logo-rmbg.png',
        description: "Python aka 'Easiest language of all time', Are you sure? my first ever learned language is Python and I have some experience with Flask framework and currenly learning Django.",
        experience: "3 months",
        experienceType: ""
    },
    {
        id: 3,
        title: 'Flask',
        imgUrl: '/eduImg/flask-logo-rmbg.png',
        description: "My first ever Python framework I ever learn, I been using Flask before Golang for web service which I used create a small project where it stand as an API for my frontend. And now I move to Golang",
        experience: "2 months",
        experienceType: ""
    },
    {
        id: 4,
        title: 'SQLAlchemy',
        imgUrl: '/eduImg/sqlalchemy-logo-rmbg.png',
        description: "During working with Flask, I also pick up SQLAlchemy, The purpose of usage is simplify database connection and improve productivity with database. I also have a sip of ORM",
        experience: "2 months",
        experienceType: ""
    },
    {
        id: 5,
        title: 'Django',
        imgUrl: '/eduImg/django-logo-rmbg.png',
        description: "Django always inside my list and now it time to give it a try, I'm currenly learning Django!!",
        experience: "N/A",
        experienceType: ""
    },
    {
        id: 6,
        title: 'MySQL',
        imgUrl: '/eduImg/mysql-logo-rmbg.png',
        description: "My first ever database tool that i learned and it also a place where i specialized SQL Statement.",
        experience: "3 months",
        experienceType: ""
    },
    {
        id: 7,
        title: 'SQL Server',
        imgUrl: '/eduImg/sql-server-logo-rmbg.png',
        description: "After learning MySQL, I start learning SQL Server to fit my need in school project",
        experience: "4 months",
        experienceType: ""
    },
    {
        id: 8,
        title: 'Postgres',
        imgUrl: '/eduImg/postgre-logo-rmbg.png',
        description: "Since I already know SQL Statement, I start to pick up Postgres due to my need in job industry",
        experience: "3 months",
        experienceType: ""
    },
]

