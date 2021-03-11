import React from 'react'
import styled from 'styled-components'
import { MdFavoriteBorder } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

function Sidebar(props){
    
    const WrappSidebar = styled('div')`
        width:280px;
        height:90vh;
        top:0;
        left:${props => props.open ? props.open : '-480px'};
        margin-top:-75px;
        position: fixed;
        background:#E5E5E5;
        transition:1.2s ease-in;
        transform:translateX(${props => props.open ? props.open : "480px"});
        padding:160px 18px;
    `
    const Ul = styled('ul')`
        display:grid;
        grid-template-rows:40px 40px 40px;
        grid-row-gap:20px;
    `
    const Li = styled('li')`
        display:grid;
        align-items:center;
        grid-template-columns:30px auto;
        grid-column-gap:10px;
        &:hover{
            color:green;
        }
        
    `
    const IconMenu = styled(MdFavoriteBorder)`
        width:20px;
        height:20px;
    `
    const Setting = styled(IoSettingsOutline)`
        width:20px;
        height:20px;
    `
    const TitleMenu = styled('h1')`
        font-size:18px;
        font-weight:normal;
    `
    return(
        <WrappSidebar>
            <Ul>
                <Li>
                    <IconMenu />
                    <TitleMenu>Favorite</TitleMenu> 
                </Li>
                <Li>
                    <Setting />
                    <TitleMenu>Pengaturan</TitleMenu> 
                </Li>
                <Li>
                    <IconMenu />
                    <TitleMenu>Favorite</TitleMenu> 
                </Li>
                <Li>
                    <IconMenu />
                    <TitleMenu>Favorite</TitleMenu> 
                </Li>
            </Ul>
        </WrappSidebar>
    )
}
export default Sidebar