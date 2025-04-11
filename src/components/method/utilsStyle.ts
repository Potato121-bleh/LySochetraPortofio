import { fetchedInfo } from "./utils";
import { colorPaletteList, darkmodeTheme, paletteThemeType } from "../style/theme/data";

export const handleBodyThemeProvider = (themeData: paletteThemeType) => {
    document.body.style.backgroundColor = themeData.body.background
    document.body.style.color = themeData.body.color
}

export const handleThememode = (themeData: paletteThemeType , cardClassName: string) => {
    let yellowBtn = document.querySelectorAll(".btn-type-one") 
    let purpleBtn = document.querySelectorAll(".btn-type-two")
    if (yellowBtn && purpleBtn) {
        yellowBtn.forEach((element) => {
            (element as HTMLElement).style.background = themeData.button.light;
            (element as HTMLElement).style.boxShadow = themeData.boxShadow;
        })
        purpleBtn.forEach((element) => {
            (element as HTMLElement).style.background = themeData.button.dark.background;
            (element as HTMLElement).style.color = themeData.button.dark.color;
            (element as HTMLElement).style.boxShadow = themeData.boxShadow;
        })
    }

    //For component such as card ...
    let cardElementList = document.querySelectorAll(cardClassName)
    if (cardElementList) {
        cardElementList.forEach((element) => {
            (element as HTMLElement).style.background = themeData.component.background;
            (element as HTMLElement).style.border = themeData.border;
            (element as HTMLElement).style.boxShadow = themeData.boxShadow;
        })
    }
}


export const handleThemeAdapter = (colorPaletteIndex: number, typeFlag: "bodyTheme" | "componentTheme", cardClass?: string) => {
    if(typeFlag == "bodyTheme" ){
        handleBodyThemeProvider(colorPaletteList[colorPaletteIndex - 1]);
    }
    else {
        if(!cardClass) {
            return;
        }
        handleThememode(colorPaletteList[colorPaletteIndex - 1], cardClass)
    }
}

export const themeWrapper = (contextConsumer: fetchedInfo, cardClass: string) => {
    if (contextConsumer.darkmode) {
                    handleThememode(
                        darkmodeTheme,
                        cardClass
                    )
                } else if (contextConsumer.colorpalettes) {
                    handleThemeAdapter(
                        contextConsumer.colorpalettes,
                        'componentTheme',
                        cardClass
                    )
                }
}
