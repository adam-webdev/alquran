import React, { useState } from 'react'
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Sidebar from '../sidebar/sidebar';

function Header(props){
    const[open, isOpen] = useState(false);
    const sidebar = () => isOpen(!open);
    const WrappHeader = styled("div")`
        display:flex;
        justify-content:space-between;
        align-items:center;
        position: fixed;
        width:540px;
        margin-left:330px;
        /* margin-right:; */
        z-index:3;
        height:50px;
        padding:8px 12px;
        background:#fdfdfd;
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
        cursor: pointer;
        &:hover{
        transition:.2s ease-in;
            color:green;
        }
    `
    const Close = styled(CgClose)`
        width:24px;
        height:24px;
        z-index:999;
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
            color:green;
        }
    `

    return(
        <>
        <WrappHeader>
             <Icon onClick={sidebar}>
                {open ? <Close /> : <Menu />}
                {open ? <Sidebar open={open} /> : ''}
            </Icon>
           <h3>quran</h3>
           <Search />
        </WrappHeader>
        </>
    )
}

export default Header