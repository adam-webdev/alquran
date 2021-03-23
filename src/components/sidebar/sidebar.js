import React from 'react'
import styled, {keyframes} from 'styled-components'
import { MdFavoriteBorder } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiBookmark } from "react-icons/fi";
import { FaQuran } from "react-icons/fa";
import { A } from '../../globalStyle';

function Sidebar(){
    const slide = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(480px);
    }
    `;
 
    const WrappSidebar = styled('div')`
        width:250px;
        height:90vh;
        top:0;
        left:0;
        margin-left:-480px;
        margin-top:-75px;
        position: fixed;
        background:#fff;
        animation:1s ${slide} ease;
        transform:translateX(480px);
        padding:160px 18px;
    `
    
    const Ul = styled('ul')`
        display:grid;
        grid-template-rows:40px 40px 40px;
        grid-row-gap:20px;
    `
    const Li = styled('li')`
        display:grid;
        padding:4px 14px;
        border-radius:20px;
        background:#e1f7e4;
        color:#31b052;
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
    const Quran = styled(FaQuran)`
        width:20px;
        height:20px;
    `
    const Setting = styled(IoSettingsOutline)`
        width:20px;
        height:20px;
    `
    const Bookmark = styled(FiBookmark)`
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
                <A to="/daftar-surah">
                    <Li>
                        <Quran />
                        <TitleMenu>Daftar Surah</TitleMenu>
                    </Li>
                </A>  
                
                <A to="/tersimpan">
                    <Li>
                        <Bookmark />
                        <TitleMenu>Tersimpan</TitleMenu>
                    </Li>
                </A>
                <A to="/favorite">
                    <Li>
                        <IconMenu />
                        <TitleMenu>Favorite</TitleMenu>
                    </Li>
                </A>
                <A to="/pengaturan">
                    <Li>
                        <Setting />
                        <TitleMenu>Pengaturan</TitleMenu>
                    </Li>
                </A> 
            </Ul>
        </WrappSidebar>
    )
}
export default Sidebar