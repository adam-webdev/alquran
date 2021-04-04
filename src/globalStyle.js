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
        background:#eaeaea;
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
    // Element parent 
    export const WrappMain = styled('div')`
        display:flex;
        position: relative;
        width:450px;
        top:60px;
        box-sizing:border-box;
        font-size:15px;
        flex-direction:column;
        @media screen and (max-width: 900px){
                width:375px;
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
        padding-left:10px;
        padding-right:10px;
        border-radius:0 0 4px 4px;
        height:50px;
        box-sizing:border-box;
        box-shadow:0 0 4px 1px rgba(0,0,0,0.2);
        color:${props => props.color ? props.color : '#fff'};
        background:${props => props.bg ? props.bg : '#31b049'};
        @media (max-width:900px){
            border-radius:0;
        }
    ` 
    export const Card = styled(WrappMain)`
        top:10px;
        margin-bottom:20px;
        border-radius:4px;
        background:#f9f9f9;
        box-shadow: 1px 1px 2px 1px #d1d1d1;
        padding:1rem;
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
        width:24px;
        height:24px;
        cursor: pointer;
        color:#31b052;
        padding:5px;
        &:hover{
            background:#e1f7e4;
            border-radius:50%;
            transition:.4s;
        }
    `
     export const SharedIcon = styled('div')`
        display:flex;
        width:30px;
        position: absolute;
        flex-direction:column;
        padding:8px 4px 4px 4px;
        background:#e1e1e1;
        align-items:center;
        border-radius:4px;
        left:${props => props.left ? props.left : '240px'};
        margin-top:${props => props.bottom ? props.bottom : 0};
        @media (max-width:900px){
            left:${props => props.left ? '316px' : '240px'};
        }

    `
   
    export const A = styled(Link)`
        text-decoration:none;
        color:#000;
        z-index:${props => props.tes ? '999' : 0};

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