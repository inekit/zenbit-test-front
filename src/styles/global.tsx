import { createGlobalStyle } from 'styled-components'

import ApercuArabicPro from '../fonts/ApercuArabicPro-Light.woff';

export default createGlobalStyle`

    @font-face {
    font-family: 'ApercuArabicPro';
    src: url(${ApercuArabicPro}) format('woff2');
    font-style: normal;
}

body {
    font-family: ApercuArabicPro;
} 


.App {
    background: #FFF
}
`