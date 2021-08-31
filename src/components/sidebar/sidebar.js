import React from 'react'
import styled, {keyframes} from 'styled-components'
import { MdFavoriteBorder } from "react-icons/md";
// import { IoSettingsOutline } from "react-icons/io5";
// import { FiBookmark } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { FaQuran } from "react-icons/fa";
import { A } from '../../globalStyle';

const slide = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(480px);
    }
    `;
 
    const WrappSidebar = styled('div')`
        width:300px;
        top:0;
        height:100vh;
        left:0;
        
        margin-left:-480px;
        position: fixed;
        background:#f9f9f9;
        padding:70px 0 0 20px;
        animation:1s ${slide} ease;
        transform:translateX(480px);
        @media (max-width:900px){
            /* background:#31b052; */
            padding:50px 0 0 0;
        }
    `
    const Ul = styled('ul')`
        display:grid;
        grid-template-rows:40px 40px 40px;
        grid-row-gap:14px;
        background:#f8f8f8;
        padding:10px 4px;
    `
    const Li = styled('li')`
        display:grid;
        padding:0 0 14px 10px;
        color:#31b052;
        border-bottom:2px solid #eaeaea;
        align-items:center;
        grid-template-columns:30px 100px;
        grid-column-gap:10px;
        &:hover{
            color:#999;
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
    // const Setting = styled(IoSettingsOutline)`
    //     width:20px;
    //     height:20px;
    // `
    // const Bookmark = styled(FiBookmark)`
    //     width:20px;
    //     height:20px;
    // `
     const HadistIcon = styled(BsBook)`
        width:20px;
        height:20px;
    `
    const TitleMenu = styled('h1')`
        font-size:18px;
        font-weight:normal;
        color:#898989;
    `

function Sidebar(){
    
    return(
        <WrappSidebar>
            <Ul>
                <A to="/daftar-surah">
                    <Li>
                        <Quran />
                        <TitleMenu>Alquran</TitleMenu>
                    </Li>
                </A>  
                
                 <A to="/hadist">
                    <Li>
                        <HadistIcon />
                        <TitleMenu>Hadist</TitleMenu>
                    </Li>
                </A>
                <A to="/doa">
                    <Li>
                        <IconMenu />
                        <TitleMenu>Doa</TitleMenu>
                    </Li>
                </A>
                {/* <A to="/pengaturan">
                    <Li>
                        <Setting />
                        <TitleMenu>Pengaturan</TitleMenu>
                    </Li>
                </A>   */} 
            </Ul>
        </WrappSidebar>
    )
}
export default Sidebar