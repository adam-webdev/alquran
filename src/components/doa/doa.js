import React from 'react'
import styled from 'styled-components'
import { WrappHeader, WrappMain } from '../../globalStyle'
import ArrowLeft from '../../partials/button-back'
import {IoIosArrowForward} from 'react-icons/io'

const TitleHeader = styled('p')`
font-size:1rem;
color: #31b052;
font-weight:bold;
letter-spacing:1px;
`
const Card = styled(WrappMain)`
top:0;
background:#f8f8f8;
color:#fff;
align-items:center;
justify-content:space-between;
margin-bottom:10px;
flex-direction:row;
border-radius:4px;
padding:10px 14px;
`
const Arrow = styled(IoIosArrowForward)`
color:#31b052;
width:18px;
height:18px;
cursor:pointer;
padding:8px;
&:hover{
    background:#e1f7e4;
    border-radius:50%;
    transition:.4s;
}
`
const NamaDoa = styled('p')`
color:#888;
font-size:1rem;
font-weight:500;
`
function Doa(){

   
    return(
        <>
            <WrappHeader bg="#f8f8f8">
                <ArrowLeft />
                <TitleHeader>Doa</TitleHeader>
                <span></span>
            </WrappHeader>
                
            <WrappMain>
                <Card>
                    <NamaDoa>Kumpulan doa sehari-hari</NamaDoa>
                    <Arrow />
                </Card>
                <Card>
                    <NamaDoa>Doa Tahlil & Tahmid </NamaDoa>
                    <Arrow />
                </Card>
            </WrappMain>
        </>
    )
}

export default Doa