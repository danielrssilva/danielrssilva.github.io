import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";

const ResetStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html {
        /* Browser's default root font size is 16 px. */
        /* 62.5% of 16px base font size is 10px. */
        font-size: 62.5%;
    }
    body {
        font-size: ${Theme.fonts.size};
        font-family: ${Theme.fonts.family};
        font-weight: ${Theme.fonts.weight.regular};
        box-sizing: border-box;
        overflow: hidden;
    }
    a {
        text-decoration: none;
        &:active,
        &:focus,
        &:hover {
            text-decoration: none;
        }
    }
`;

export default ResetStyles;
