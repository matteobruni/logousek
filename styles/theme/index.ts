import { type FontSizeType, type LineHeight, type LetterSpacing, type FontWeight, type RadiusType, type ColorsType } from "../"



export type ThemeType = {
    typography: {
        fontSize: FontSizeType,
        lineHeight: LineHeight,
        letterSpacing: LetterSpacing,
        fontWeight: FontWeight,
    },
    radius: RadiusType,
    colors: ColorsType
}