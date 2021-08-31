import React from 'react'
import styled from 'styled-components'
import { WrappHeader, WrappMain } from '../../globalStyle'
import { BsBook } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Title as Judul} from '../surah/daftar-surah'
import ArrowLeft from '../../partials/button-back';
const WrappHadist = styled(WrappMain)`
        flex-direction:row;
        flex-wrap:wrap;
        margin-top:30px;
        padding-right:0;
    `
    const Title = styled('h1')`
        font-size:18px;
        width:80%;
        text-indent:50px;
        color:#999;
        margin-top:30px;
        margin-bottom:-50px;
        @media(max-width:600px){
            font-size:16px;
            width:100%;

        }
    `
    const Card = styled('div')`
        width:100%;
        padding:12px 4px 12px 10px;
        background:${props => props.bg ? props.bg : '#fff' };
        border-radius:4px;
        justify-content:center;
        position:relative;
        font-size:16px;
        box-sizing:none;
        align-items:center;
        margin-bottom:20px;
        cursor:pointer;
        &:hover{
            transition:.5s;
        }
        @media (max-width:768px){
            text-align:center;
        }
    ` 
    const NameHadist = styled('h2')`
        font-size:18px;
        font-weight:500;
        color:#f8f8f8;
        @media(max-width:900px){
            font-size:15px;
        }
    `
    const HadistIcon = styled(BsBook)`
        width:20px;
        height:20px;
        align-items:center;
        color:#d1d1d1;
    `
    const Href = styled(Link)`
        display:flex;
        text-decoration:none;
        color:#eaeaea;
        margin-right:20px;
        width:30%;
        @media(max-width:768px){
            width:100%;
            margin-right:10px;
            margin-left:0;
        }
    `

function Hadist(){
  
return (
    <>
    <WrappHeader >
        <ArrowLeft />
        <Judul>Hadist</Judul>
        <span></span>
    </WrappHeader>
    <WrappMain>
    <Title>Hadits dalam bahasa Arab: الحديث, har. yang artinya 'berbicara, perkataan, percakapan'‎, ejaan dalam KBBI: Hadis disebut juga sunnah, adalah perkataan (sabda), perbuatan, ketetapan dan persetujuan dari Nabi Muhammad yang dijadikan landasan syariat Islam. Hadis dijadikan sumber hukum Islam selain al-Qur'an, dalam hal ini kedudukan hadis merupakan sumber hukum kedua setelah al-Qur'an.</Title>
    <WrappHadist left="30px">
        <Href key="1" to="/hadist/bukhari">
            <Card bg="#99582a">
                <HadistIcon />
                <NameHadist>HR. Bukhari</NameHadist>
            </Card>
        </Href>
        <Href  key="2" to="/hadist/muslim">
            <Card bg="#dda15e">
                <HadistIcon />
                <NameHadist>HR. Muslim</NameHadist>
            </Card>
        </Href>
        <Href key="3" to="/hadist/nasai">
            <Card bg="#774936">
                <HadistIcon />
                <NameHadist>HR. Nasai</NameHadist>
            </Card>
        </Href>
        <Href key="4" to="/hadist/tirmidzi">
            <Card bg="#9d6b53">
                <HadistIcon />
                <NameHadist>HR. Tirmidzi</NameHadist>
            </Card>
        </Href>
       <Href key="5" to="/hadist/ibnu-majah">
            <Card bg="#8a5a44">
                <HadistIcon />
                <NameHadist>HR. Ibnu Majah</NameHadist>
            </Card>
       </Href>
        <Href key="6" to="/hadist/darimi">
            <Card bg="#7f5539">
                <HadistIcon />
                <NameHadist>HR. Darimi</NameHadist>
            </Card>
        </Href>
        <Href key="7" to="/hadist/ahmad">
            <Card bg="#dda15e">
                <HadistIcon />
                <NameHadist>HR. Ahmad</NameHadist>
            </Card>
        </Href>
        <Href key="8" to="/hadist/abu-daud">
            <Card bg="#9c6644">
                <HadistIcon />
                <NameHadist>HR. Abu Daud</NameHadist>
            </Card>
        </Href>
        <Href key="9" to="/hadist/malik">
            <Card bg="#774936">
                <HadistIcon />
                <NameHadist>HR. Malik</NameHadist>
            </Card>
        </Href>
        
    </WrappHadist>
    </WrappMain>
    </>
    )
}
export default Hadist