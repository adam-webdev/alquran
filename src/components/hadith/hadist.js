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
        color:#010101;
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
        background:#e1f7e4;
        border:1px solid #31b052;
        border-radius:4px;
        justify-content:center;
        position:relative;
        font-size:16px;
        box-sizing:none;
        box-shadow:0 4px 4px 2px rgba(0,0,0,0.2);
        align-items:center;
        margin-bottom:20px;
        cursor:pointer;
        &:hover{
            transition:.5s;
            box-shadow:0 2px 2px 1px rgba(0,0,0,0.3);

        }
        @media (max-width:768px){
            text-align:center;
        }
    ` 
    const NameHadist = styled('h2')`
        font-size:18px;
        font-weight:500;
        color:#000;
        @media(max-width:900px){
            font-size:15px;
        }
    `
    const HadistIcon = styled(BsBook)`
        width:20px;
        height:20px;
        align-items:center;
        color:#000;
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
            <Card>
                <HadistIcon />
                <NameHadist>Hadist Riwayat Bukhari</NameHadist>
            </Card>
        </Href>
        <Href  key="2" to="/hadist/muslim">
            <Card>
                <HadistIcon />
                <NameHadist>Hadist Riwayat Muslim</NameHadist>
            </Card>
        </Href>
        <Href key="3" to="/hadist/nasai">
            <Card>
                <HadistIcon />
                <NameHadist>Hadist Riwayat Nasai</NameHadist>
            </Card>
        </Href>
        <Href key="4" to="/hadist/tirmidzi">
            <Card>
                <HadistIcon />
                <NameHadist>Hadist Riwayat Tirmidzi</NameHadist>
            </Card>
        </Href>
       <Href key="5" to="/hadist/ibnu-majah">
            <Card>
                <HadistIcon />
                <NameHadist>Hadist Riwayat Ibnu Majah</NameHadist>
            </Card>
       </Href>
        <Href key="6" to="/hadist/darimi">
            <Card>
                <HadistIcon />
                <NameHadist>Hadist Riwayat Darimi</NameHadist>
            </Card>
        </Href>
        <Href key="7" to="/hadist/ahmad">
            <Card>
                <HadistIcon />
                <NameHadist>Hadist Riwayat Ahmad</NameHadist>
            </Card>
        </Href>
        <Href key="8" to="/hadist/abu-daud">
            <Card>
                <HadistIcon />
                <NameHadist>Hadist Riwayat Abu Daud</NameHadist>
            </Card>
        </Href>
        <Href key="9" to="/hadist/malik">
            <Card>
                <HadistIcon />
                <NameHadist>Hadist Riwayat Malik</NameHadist>
            </Card>
        </Href>
        
    </WrappHadist>
    </WrappMain>
    </>
    )
}
export default Hadist