import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { A, Card, Flex, Grid, WrappHeader, WrappMain } from '../../globalStyle'
import ArrowLeft from '../../partials/button-back'
import Skeleton from '../../partials/skeleton'
import { Text } from '../detail-hadist/detail-hadist'

export const Title = styled('h4')`
font-size:1em;
color: #fff;
`

const CardSurah = styled(Card)`
transition:.2s ease;
cursor:pointer;
width:100%;
margin-bottom:20px;
align-items:center;
&:hover{
    box-shadow: 0 0 4px 1px rgba(0,0,0,0.5);
}
@media (max-width:768px){
    margin-left:0;
    margin-right:0;
}

`
const NomorSurah = styled('div')`
padding:5px;
height:20px;
display:flex;
background:#31b045;
align-items:center;
font-size:1em;
border-radius:4px;
box-shadow:-2px 2px 1px 1px #fff;

`
const Surah = styled('div')`
display:flex;
position:relative;
flex-direction:column;
`

const NameSurah = styled('h1')`
font-size:2rem;
color:#000;
font-weight:600;
`
const EnglishName = styled(NameSurah)`
color:#333;
font-size:16px;
`  
const EnglishTranslation = styled(NameSurah)`
color:#555;
font-size:14px;
` 
export const Select = styled('select')`
    font-size:14px;
    color:#fff;
    padding:2px 6px;
    border:1px solid #fff;
    width:${props => props.width ? props.width : "100px"};
    height:${props => props.height ? props.height : "30px"};
    border-radius:1px;
    cursor:pointer;
    background:transparent;
    outline:none;
    option{
        font-size:14px;
        background:#f8f8f8;
        border:1px solid #fff;
        color:#000;
        @media(max-width:768px){
        font-size:12px;
     }
    }
    @media(max-width:768px){
        font-size:12px;
        height:20px;
    }
`
function DaftarSurah(){
    const [ data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [surah, setSurah] = useState()

    async function apiquran(){
        setLoading(true)
        try{
            const res = await fetch('https://api.quran.sutanlab.id/surah')
            const json = await res.json()    
            setData(json.data)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        apiquran()
    },[])

    const handlesurah = (e) => {
        setSurah(e.target.value)
    }
  
        console.log("dirender")
    return(
        <>
        <WrappHeader bg="#31b052">
            <Flex>
            <ArrowLeft >Kembali</ArrowLeft>
            <Text color="fff">Kembali</Text>
            </Flex>
            <Title>Daftar Surah</Title>
            <a href={"#" + surah}>
                <Select value={surah} onChange={(e) => handlesurah(e)}>
                    {
                        data && data.map((surah,index) => (
                            <option key={index} value={surah.number}>{surah.name.transliteration.id}</option>
                        ))
                    }
                </Select>
            </a>
        </WrappHeader>
        <Grid r_gap="none">
            {error && <p>Mohon Maaf Server Sedang Gangguan </p>}
            {loading ? (<Skeleton width={"100%"} height={"130px"} amount={16} />)
            : ( data.map((sura,index) => (
                        <A key={index} to={`/detail-surah/${sura.number}/`}>
                            <CardSurah id={sura.number}> 
                                {/* <NomorSurah>{sura.number}</NomorSurah> */}
                                <Surah>
                                    <NameSurah>{sura.name.short}</NameSurah>
                                    <EnglishName>{sura.name.transliteration.id} ({sura.numberOfVerses} ayat) </EnglishName>
                                    <EnglishTranslation>{sura.name.translation.id}</EnglishTranslation>
                                </Surah>
                            </CardSurah>
                        </A>
                ))
            )}  
        </Grid>
        </>

    )
}
export default DaftarSurah