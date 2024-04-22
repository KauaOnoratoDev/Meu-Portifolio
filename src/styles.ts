import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        box-sizing: border-box;
        margin: 0;
        font-family: "Raleway", sans-serif;
    }
`

export const colors = {
    gray900: "#0C0C0D",
    gray800: "#131313",
    gray700: "#272727",
    gray400: "#6F6F6F",
    gray300: "#C8C8C8",
    white: "#fff",
    green: "#5FB9B0",
    purple: "#B292FF"
}
