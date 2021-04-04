import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { A, Card, WrappHeader, WrappMain } from '../../globalStyle'
import ArrowLeft from '../../partials/button-back'
import Skeleton from '../../partials/skeleton'

const Title = styled('h4')`
font-size:1em;
color: #666666;
`
const CardSurah = styled(Card)`
flex-direction:row;
justify-content:space-between;
transition:.2s ease;
cursor:pointer;
&:hover{
    box-shadow: 0 0 4px 1px rgba(0,0,0,0.2);
}

`
const NomorSurah = styled('div')`
padding:5px;
width:5%;
margin-right:40px;
height:20px;
display:flex;
background:#31b045;
justify-content:center;
align-items:center;
color:#fff;
font-size:1em;
border-radius:4px;
box-shadow:-2px 2px 1px 1px #fff;

`
const Surah = styled('div')`
width:70%;
display:flex;
position:relative;
align-items:flex-end;
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
    font-size:12px;
    color:#000;
    padding:2px 6px;
    border:1px solid #d1d1d1;
    width:${props => props.width ? props.width : "100px"};
    border-radius:4px;
    cursor:pointer;
    background:transparent;
    outline:none;
    option{
        font-size:12px;
        background:#f8f8f8;
        border:1px solid #fff;
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
        <WrappHeader bg="#f8f8f8">
            <ArrowLeft />
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
        <WrappMain>
            {error && <p>Mohon Maaf Server Sedang Gangguan </p>}
            {loading ? (<Skeleton width={"450px"} height={"100px"} amount={5} />)
            : ( data.map((sura,index) => (
                        <A key={index} to={`/detail-surah/${sura.number}/`}>
                            <CardSurah id={sura.number}> 
                            <NomorSurah>{sura.number}</NomorSurah>
                                <Surah>
                                    <NameSurah>{sura.name.short}</NameSurah>
                                    <EnglishName>{sura.name.transliteration.id} ({sura.numberOfVerses} ayat) </EnglishName>
                                    <EnglishTranslation>{sura.name.translation.id}</EnglishTranslation>
                                </Surah>
                            </CardSurah>
                        </A>
                ))
            )}  
        </WrappMain>
        </>

    )
}
export default DaftarSurah