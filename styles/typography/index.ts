type SizesObject = {
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string,
    xxl: string
}

export type FontSizeType = SizesObject

export type LineHeight = SizesObject

export type LetterSpacing = SizesObject

export type FontWeight = {
    sm: string,
    md: string,
    lg: string
}


export const fontSize: FontSizeType = {
    xs: "12px",
    sm: "14px",
    md: "18px",
    lg: "22px",
    xl: "24px",
    xxl: "27px"
}


export const lineHeight: LineHeight = {
    xs: "14px",
    sm: "16px",
    md: "21px",
    lg: "25px",
    xl: "28px",
    xxl: "31px"
}

export const letterSpacing: LetterSpacing = {
    xs: "1px",
    sm: "1px",
    md: "1.5px",
    lg: "2px",
    xl: "2.5px",
    xxl: "3px"
}

export const fontWeight: FontWeight = {
    sm: "300",
    md: "400",
    lg: "700"
}