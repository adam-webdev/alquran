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
        margin-left:100px;
        margin-right:100px;
        @media (max-width: 540px){
            margin-left:20px;
            margin-right:20px;
        }
    `
    const Flex = styled('div')`
        display:flex;
        justify-content:${props => props ? props.j-content : "space-between"};
        align-items:${props => props ? props.a-items : "center"};
        flex-direction:${props => props ? props.flex-d : "row"};
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