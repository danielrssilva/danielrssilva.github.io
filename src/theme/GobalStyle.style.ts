import { createGlobalStyle } from "styled-components";
import { ThemeState } from "../context/Theme/Theme.types";
import Theme from "./Theme";

const GobalStyle = createGlobalStyle<ThemeState>`
    * {
        border-color: ${(props) => props.theme.colors.border};
        transition: background-color .5s ease-in-out;
    }
    body {
        font-size: ${Theme.fonts.size};
        font-family: ${Theme.fonts.family};
        font-weight: ${Theme.fonts.weight.regular};
        background: ${({ theme }) => theme.colors.background};
        color: ${(props) => props.theme.colors.primary};
        box-sizing: border-box;
        overflow: hidden;
    }
    button {
        border: 0.1rem solid ${(props) => props.theme.colors.border};
        color: ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.background};
    }
    a {
        color: ${(props) => props.theme.colors.primary};
    }
`;

export default GobalStyle;
