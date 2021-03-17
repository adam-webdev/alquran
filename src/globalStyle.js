import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        scroll-behavior:smooth;
    }
    body{
        background:#f3f3f3;
        font-family: LPMQ Isep Misbah; 
    }
    `
    export const Container = styled('div')`
        margin-left:400px;
        margin-right:400px;
        @media (max-width: 540px){
            margin-left:0;
            margin-right:0;
        }
    `
    // home 
    export const WrappMain = styled('div')`
      width:540px;
      top:80px;
      box-sizing:border-box;
      position: relative;
      height:auto;
      display:flex;
      flex-direction:column;
      @media screen and (max-width:768px){
          margin-left:0;
          margin-right:0;
          padding-left:15px;
          padding-right:15px;
          max-width:375px;
      }
  ` 
    export const Card = styled('div')`
        display:flex;
        width:100%;
        top:10px;
        margin-bottom:20px;
        border-radius:4px;
        background:#f8f8f8;
        box-shadow: 1px 1px 2px 1px #d1d1d1;
        position: relative;
        padding: 12px 14px;
        flex-direction:column;
    `
    export const A = styled(Link)`
        text-decoration:none;
        color:#000;
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