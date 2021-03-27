import React from 'react'
import styled from 'styled-components'
import { A, WrappMain } from '../../globalStyle'
import { BsBook } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Hadist(){

const WrappHadist = styled(WrappMain)`
    flex-direction:row;
    flex-wrap:wrap;
`
const Title = styled('h1')`
    font-size:16px;
    text-indent:50px;
    color:#6a6a6a;
    padding-right:10px;
    padding-left:10px;
    margin-bottom:-60px;
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
        opacity:.7;
        transition:.5s;
    }
    @media (max-width:900px){
        width:100%;
    }
` 
const NameHadist = styled('h2')`
    font-size:18px;
    font-weight:500;
    color:#111;
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
    margin-left:4px;
    color:#eaeaea;
    margin-right:6px;
    width:30%;
    @media(max-width:900px){
        margin-right:4px;
        width:29%;
        margin-left:10px;
    }
`
return (
    <WrappMain>
    <Title>Hadits dalam bahasa Arab: الحديث, har. yang artinya 'berbicara, perkataan, percakapan'‎, ejaan dalam KBBI: Hadis disebut juga sunnah, adalah perkataan (sabda), perbuatan, ketetapan dan persetujuan dari Nabi Muhammad yang dijadikan landasan syariat Islam. Hadis dijadikan sumber hukum Islam selain al-Qur'an, dalam hal ini kedudukan hadis merupakan sumber hukum kedua setelah al-Qur'an.</Title>
    <WrappHadist>
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
            <Card bg="#432818">
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
    )
}
export default Hadist