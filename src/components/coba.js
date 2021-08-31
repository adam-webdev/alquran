import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import { WrappMain } from '../globalStyle';

function Coba(){
    console.log("function coba Dirender!")
    const[id, setId] = useState(1)

   const handlechange = (e) => {
        setId(e.target.value)
    }

    const Div = styled('div')`
        width:100%;
        height:400px;
        padding:10px;
        background:#d1d1d1;
        border-radius:4px;
        margin-bottom:20px;
    `
    console.log("component Dirender!")
    return(
        <>
        <WrappMain>
            <a href={"#"+ id}> <select value={id} onChange={(e) => handlechange(e)}>
               <option value={5}>5</option>
               <option value={2}>5</option>
            </select></a>
           
            <Div id="1">[1] Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis dicta mollitia iure non necessitatibus reprehenderit, sint ipsam. Harum necessitatibus cumque reiciendis perferendis nobis in? Non modi excepturi omnis impedit.</Div>
            <Div id="2">[2] Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis dicta mollitia iure non necessitatibus reprehenderit, sint ipsam. Harum necessitatibus cumque reiciendis perferendis nobis in? Non modi excepturi omnis impedit.</Div>
            <Div id="3">[3] Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis dicta mollitia iure non necessitatibus reprehenderit, sint ipsam. Harum necessitatibus cumque reiciendis perferendis nobis in? Non modi excepturi omnis impedit.</Div>
            <Div id="4">[4] Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis dicta mollitia iure non necessitatibus reprehenderit, sint ipsam. Harum necessitatibus cumque reiciendis perferendis nobis in? Non modi excepturi omnis impedit.</Div>
            <Div id="5">[5] Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis dicta mollitia iure non necessitatibus reprehenderit, sint ipsam. Harum necessitatibus cumque reiciendis perferendis nobis in? Non modi excepturi omnis impedit.</Div>
        </WrappMain>
        </>
    )
}
export default Coba;