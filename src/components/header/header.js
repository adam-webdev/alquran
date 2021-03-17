import React, { useState } from 'react'
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Sidebar from '../sidebar/sidebar';
import { A } from '../../globalStyle';

function Header(){
    const[open, isOpen] = useState(false);
    const sidebar = () => isOpen(!open);
    const WrappHeader = styled("div")`
        display:flex;
        justify-content:space-between;
        align-items:center;
        position: fixed;
        width:540px;
        margin-left:auto;
        margin-right:auto;
        z-index:3;
        height:50px;
        color:#fff;
        border-radius:4px;
        padding:8px 12px;

        background:#31b049;
        border:1px solid #ddd;
        @media screen and (max-width:768px){
            margin-left:0;
            margin-right:0;
            max-width:375px;
        }
    ` 
    const Icon = styled('div')`
        display: flex;
        position: relative;
        cursor: pointer;
    `
    const Menu = styled(HiMenu)`
        width:24px;
        height:24px;
        font-weight:800;
        cursor: pointer;
        &:hover{
        transition:.2s ease-in;
            color:#010101;
        }
    `
    const Close = styled(CgClose)`
        width:24px;
        height:24px;
        z-index:999999;
        cursor: pointer;
        &:hover{
        transition:.2s ease-in;
            color:green;
        }
    `
    const Search = styled(FiSearch)`
        width:24px;
        height:24px;
        cursor: pointer;
        &:hover{
        transition:.2s ease-in;
        color:#010101;
        }
    `
    const TextQuran = styled('h4')`
        color:#fff;
        font-size:1.6em;
        font-weight:500;
        font-family:'Poppins' sans-serif;
    `

    return(
        <>
        <WrappHeader>
            <Icon onClick={sidebar}>
                {open ? <Close /> : <Menu />}
                {open ? <Sidebar /> : '' }
            </Icon>
           <A to="/"><TextQuran> quran</TextQuran></A>
           <Search />
        </WrappHeader>
        </>
    )
}

export default Header