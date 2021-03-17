import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { A, Card, WrappMain } from '../../globalStyle'

function DaftarSurah(){
    const [ data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

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
            box-shadow: 4px 4px 8px 4px #d1d1d1;
        }
        @media (max-width:768px){
            padding: 12px 12px;
        }
    `
    const NomorSurah = styled('div')`
        padding:5px;
        width:40px;
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
        @media ( max-width:768px){
            margin-right:30px;
        }
    `
    const Surah = styled('div')`
        width:70%;
        display:flex;
        position:relative;
        align-items:flex-end;
        flex-direction:column;
    `
    const Ayat = styled('h1')`
        font-size:14px;
        font-weight: normal;
        color:#555;
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
        console.log("dirender")
    return(
        <>
        <WrappMain>
        <Title>Daftar Surah</Title>
            {error && <p>Mohon Maaf Server Sedang Gangguan </p>}
            {loading ? (<p>Memuat data... </p>)
            : ( data.map((sura) => (
                        <A  key={sura.number} to={`/detail-surah/${sura.number}`}>
                            <CardSurah> 
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