import { createGlobalStyle } from 'styled-components'

export const colors = {
  gray900: '#0C0C0D',
  gray800: '#131313',
  gray700: '#272727',
  gray400: '#6F6F6F',
  gray300: '#C8C8C8',
  white: '#fff',
  green: '#5FB9B0',
  purple: '#B292FF'
}

export const breakpoints = {
  mobile: '767px',
  desktop: '1024px'
}

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        box-sizing: border-box;
        margin: 0;
        font-family: "Raleway", sans-serif;
        text-decoration: none;
        list-style: none;

        .container {
            max-width: 1080px;
            width: 100%;
            margin: 0 auto;

            @media (max-width: ${breakpoints.mobile}) {
              width: 90%;
            }

            @media (max-width: ${breakpoints.desktop}) {
              width: 90%;
            }
        }

        .is-active {
          display: flex;
        }

        .is-disabled {
          display: none;
        }
      }

    body {
        background-color: ${colors.gray900};

        &::-webkit-scrollbar {
          width: 5px;
        }

        &::-webkit-scrollbar-track {
          background: ${colors.gray900};
        }

        &::-webkit-scrollbar-thumb {
          background-color: ${colors.gray800};
          border-radius: 20px;
        }
    }

`
