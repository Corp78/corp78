const basicColors = {
    white: "#F4F5F0",
    black: "#161616",
    green1: "#EBEFE3",
    green2: "#B2BDA0",
    green3: "#8D9E6F",
    green4: "#526534",
    green5: "#2F3B1C",
}

export const theme  = {
    colors: basicColors,
    marginBase: 8,
    fonts: {
        h1: {
            fontFamily: 'Montserrat, sans-serif',
            color: basicColors.black,
            fontWeight: 900,
            fontSize: 40,
            lineHeight: 1.5,
        },
        label: {
            fontFamily: 'Montserrat, sans-serif',
            color: basicColors.black,
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: 16,
        },
        normal: {
            fontFamily: 'Montserrat, sans-serif',
            color: basicColors.black,
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: 16,
        },
        caption: {
            fontFamily: 'Montserrat, sans-serif',
            color: basicColors.black,
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: 14,
        }
    },
}

export type Theme = typeof theme;