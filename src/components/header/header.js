import React, { useState } from 'react'
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Sidebar from '../sidebar/sidebar';
import { A, WrappMain } from '../../globalStyle';

function Header(){
    const[open, isOpen] = useState(false);
    const sidebar = () => isOpen(!open);

    const WrappHeader = styled(WrappMain)`
        justify-content:space-between;
        flex-direction:row;
        align-items:center;
        position: fixed;
        z-index:3;
        top:0;
        border-radius:4px;
        height:50px;
        color:#fff;
        background:#31b049;
        @media (max-width:900px){
            border-radius:0;
        }
    ` 
    const Icon = styled('div')`
        display: flex;
        position: relative;
        cursor: pointer;
        margin-left:10px;

    `
    const Menu = styled(HiMenu)`
        width:18px;
        height:18px;
        font-weight:800;
        cursor: pointer;
        &:hover{
        transition:.2s ease-in;
            color:#010101;
        }
    `
    const Close = styled(CgClose)`
        width:18px;
        height:18px;
        z-index:999999;
        color:#fff;
        cursor: pointer;
        &:hover{
        transition:.2s ease-in;
        }
    `
    const Search = styled(FiSearch)`
        width:18px;
        height:18px;
        cursor: pointer;
        margin-right:10px;
        &:hover{
        transition:.2s ease-in;
        color:#010101;
        }
    `
    const TextQuran = styled('h4')`
        color:#fff;
        font-size:1.4rem;
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