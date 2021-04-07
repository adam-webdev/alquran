import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { GiShare } from "react-icons/gi";


const GlobalStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        scroll-behavior:smooth;
        font-size:16px;
        box-sizing:border-box;
    }
    body{
        font-family: LPMQ Isep Misbah;
        font-size:16px; 
    }
    `

    // Element parent 
    export const WrappMain = styled('div')`
        display:flex;
        position: relative;
        width:100%;
        align-items:center;
        top:60px;
        flex-direction:column;
        padding-left:${props => props.left ? props.left : '30px'};
        padding-right:${props => props.right ? props.right : '30px'};
        @media(max-width:768px){
            padding-left:10px;
            padding-right:10px;
        }
    ` 
    // Header
    export const WrappHeader = styled(WrappMain)`
        justify-content:space-between;
        flex-direction:row;
        align-items:center;
        position: fixed;
        z-index:3;
        top:0;
        padding-left:30px;
        padding-right:30px;
        height:50px;
        box-sizing:border-box;
        box-shadow:0 0 4px 1px rgba(0,0,0,0.2);
        color:${props => props.color ? props.color : '#fff'};
        background:${props => props.bg ? props.bg : '#31b049'};
        @media (max-width:600px){
            border-radius:0;
            padding-left:10px;
            padding-right:10px;
        }
    ` 
    export const Card = styled('div')`
        display:flex;
        flex-direction:column;
        width:100%;
        position:relative;
        margin-top:${props => props.m_top ? props.m_top : 0};
        margin-bottom:20px;
        border-radius:1px;
        background:#f5f5f5;
        box-shadow: 1px 1px 2px 1px #d1d1d1;
        padding:14px 14px;
        @media(max-width:768px){
            padding:10px;
            border-radius:4px;
        }
    `
    export const TextQuran = styled('h1')`
        font-size:2rem;
        line-height:60px;
        text-align:end;
        padding:10px 10px;
        font-weight:normal;
        margin-bottom:20px;
   `
    export const Share = styled(GiShare)`
        width:30px;
        height:30px;
        cursor: pointer;
        color:#31b052;
        padding:5px;
        margin-right:10px;
        &:hover{
            background:#e1f7e4;
            border-radius:50%;
            transition:.4s;
        }
        @media(max-width:768px){
            margin-left:0;
            margin-right:0;
        }
    `
     export const SharedIcon = styled('div')`
        display:flex;
        width:30px;
        position: absolute;
        flex-direction:column;
        padding:8px 4px 4px 4px;
        background:#e1e1e1;
        align-items:start;
        border-radius:4px;
        margin-top:${props => props.top ? props.top : '0'};
    `
   
    export const A = styled(Link)`
        text-decoration:none;
        color:#000;
        z-index:${props => props.tes ? props.tes : 0};
        width:90%;
        @media(max-width:600px){
            width:100%;
            padding-left:20px;
            padding-right:20px;
        }
    `
    export const Flex = styled('div')`
        display:flex;
        align-items:${props => props.a_items ? props.a_items : "center"};
        justify-content:${props => props.j_content ? props.j_content : "space-between"};
        flex-direction: row;
        flex-wrap:${props => props.flex_wrap ? props.flex_wrap : "nowrap"};
     
        
    `
    export const Grid = styled('div')`
        display:grid;
        padding-left:40px;
        padding-right:20px;
        grid-template-columns:${props => props.t_column ? props.t_column : "auto auto auto auto"};
        grid-template-rows:${props => props.t_row ? props.t_row : "auto auto auto auto"};
        grid-column-gap:${props => props.c_gap ? props.c_gap : "30px"};
        grid-row-gap:${props => props.r_gap ? props.r_gap : "30px"};
        margin-top:${props => props.top ? props.top : "80px"};
        @media (max-width:990px){
          grid-template-columns: 50% 50%;
          grid-gap:10px;
        }
        @media (max-width:600px){
          grid-template-columns: 100%;
          grid-row-gap:10px;
          padding-left:30px;
          padding-right:30px;
        }
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