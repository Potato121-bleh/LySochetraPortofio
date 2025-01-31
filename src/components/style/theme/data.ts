

type classicThemeType = {
    background: string,
    color: string,
}

type buttonThemeType = {
    light: string,
    dark: classicThemeType
}

type componentThemeType = {
    background: string,
    border: string
}

export type paletteThemeType = {
    body: classicThemeType,
    border: string,
    boxShadow: string,
    component: componentThemeType,
    button: buttonThemeType
}

export const darkmodeTheme: paletteThemeType = {
    body: {
        background: "#1B1B25",
        color: "#ffffffd4",
    },
    border: "none",
    boxShadow: "none",
    component: {
        background: "#26273B",
        border: "solid black",
    },
    button: {
        light: "#d9d9d9",
        dark: {
            background: "#26273B",
            color: "#ffffffa6",
        },
    }
}

// export const greenColorPalette: paletteThemeType = {
//     body: {
//         background: "#93c94652",    //light green
//         color: "black",
//     },
//     border: "solid green",
//     boxShadow: "none",
//     component: {
//         background: "#5fa3557d",  //slighly green
//         border: "solid green"
//     },
//     button: {
//         light: "#a1d0a7c2",
//         dark: {
//             background: "#46c866e6",
//             color: "black",
//         },
//     }
// }


export const colorPaletteList: paletteThemeType[] = [
    {                                       //GREEN THEME
        body: {
            background: "#93c94652",        //light green
            color: "black",
        },
        border: "solid green",
        boxShadow: "none",
        component: {
            background: "#5fa3557d",        //slighly green
            border: "solid green"
        },
        button: {
            light: "#a1d0a7c2",
            dark: {
                background: "#46c866e6",
                color: "black",
            },
        }
    },
]
