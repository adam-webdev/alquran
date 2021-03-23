import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        scroll-behavior:smooth;
        font-size:16px;
    }
    body{
        background:#f3f3f3;
        font-family: LPMQ Isep Misbah;
        font-size:16px; 
    }
    `
    export const Container = styled('div')`
        font-size:16px;
        position: relative;
        display:flex;
        padding-right:23em;
        margin-left:23em;
        @media screen and (max-width:900px){
            margin-left:0;
        }
       
    `
    // home 
    export const WrappMain = styled('div')`
      display:flex;
      position: relative;
      width:450px;
      top:80px;
      box-sizing:border-box;
      font-size:15px;
      flex-direction:column;
      @media screen and (max-width: 900px){
            width:375px;
        }
     
  ` 
    export const Card = styled(WrappMain)`
        top:10px;
        margin-bottom:20px;
        border-radius:4px;
        background:#f8f8f8;
        box-shadow: 1px 1px 2px 1px #d1d1d1;
        padding:1rem;
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