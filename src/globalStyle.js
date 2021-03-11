import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        font-family:"fira code";
    }
    body{
        background:white;
    }
    `
    export const Container = styled('div')`
        margin-left:70px;
        margin-right:70px;
        @media (max-width: 540px){
            margin-left:0;
            margin-right:0;
        }
    `
    export const Flex = styled('div')`
        display:flex;
        justify-content:${props => props ? props.j_content : "space-between"};
        align-items:${props => props ? props.a_items : "center"};
        flex-direction:${props => props ? props.flex_d : "row"};
    `
    export const Grid = styled('div')`
        display:grid;
        grid-template-columns:${props => props ? props.t_column : "auto auto auto auto"};
        grid-template-rows:${props => props ? props.t_row : "auto auto auto auto"};
        grid-column-gap:${props => props ? props.c_gap : "30px"};
        grid-row-gap:${props => props ? props.r_gap : "30px"};
    `
    export const Button = styled('button')`
        width: ${props => props.width};
        height: ${props => props.height};
        padding-top: ${props => props ? props.top : "100px"};
        padding-bottom: ${props => props.bottom};
        padding-right: ${props => props.left};
        padding-left: ${props => props.right};
        color: ${props => props.color};
        background: ${props => props.background};
        border-radius:${props => props.border};
        font-size:${props => props.font};
        letter-spacing:${props => props.letter};
        border-color:${props => props.borderColor}
    `
export default GlobalStyle