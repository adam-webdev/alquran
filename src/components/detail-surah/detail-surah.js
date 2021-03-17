import React, { useEffect, useState } from 'react'
import { Card, WrappMain } from '../../globalStyle'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { FaPlayCircle } from "react-icons/fa";
import { GiShare } from "react-icons/gi";
import useSound from 'use-sound';
import {Howl, Howler} from 'howler';
import Plays from 'react-audio-player'




function DetailSurah(){
    
    const [data, setData] = useState()
    // const [isSound, setSound] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {id} = useParams();
   
    
    // const sound = new Howl({
    //     src: []
    // })
    
    async function fetchSurah() {
      setLoading(true);
      try {
        const res = await fetch(`https://api.quran.sutanlab.id/surah/${id}`);
        const json = await res.json();
        // console.log("LOG : " + json.data.verse)
        setData(json.data);
        // json.data.verses.map(item=>{
        //     setSound(item.audio.primary)
        // })

      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    useEffect(() => {
        fetchSurah();
      }, []);
    const Share = styled(GiShare)`
        width:24px;
        height:24px;
        cursor: pointer;
        color:#6a6a6a;
        padding:5px;
        &:hover{
            background:#e5e5e5;
            border-radius:50%;
            transition:.4s;

        }

    `
    // console.log(isPlaying)
    const Play = styled(FaPlayCircle)`
        width:24px;
        height:24px;
        margin-right:10px;
        cursor: pointer;
        color:#6a6a6a;
        &:hover{
            transition:.4s;
            background:#e5e5e5;
            border-radius:50%;
            padding:4px;
        }
    `
    const CardHeader = styled('div')`
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:12px 10px;
        height:30px;
        @media (max-width:768px){
            padding:8px 8px;
        }
    `
    const CardBody = styled(CardHeader)`
        margin-top:10px;
        height:auto;
        flex-direction:column;
    `
    const TextQuran = styled('h1')`
        font-size:2rem;
        line-height:60px;
        text-align:end;
        padding:10px 10px;
        font-weight:normal;
        margin-bottom:20px;
    `
    const Ayat = styled('p')`
        color:#6a6a6a;
        text-align:center;
        font-size:14px;
        margin-top:20px;
    `
    const TextLatin = styled('h3')`
        font-size:1rem;
        font-weight:normal;
        color:#6a6a6a;
        margin-top:20px;
     
    `
    const Detail = styled('div')`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:10px;
    `
    const Audio = styled('audio')`
        width:240px;
        height:34px;
        margin-right:10px;
    `
    const WrappIcon = styled('div')`
        position:relative;
    `
    // console.log("sound : " + isSound)
    return(
        <WrappMain>
            {error && <p>Mohon Maaf Server Sedang Gangguan </p>}
            {loading ? (
                <p>Memuat data...</p>
                ) : 
                ( 
                    <>
                        <Detail>
                            <h2>{data.name.short}</h2>
                            <h4>{data.name.transliteration.id}</h4>
                            <p>{data.revelation.id}</p>
                            <i>{data.numberOfVerses} ayat</i>
                            <TextLatin>{data.tafsir.id}</TextLatin>
                        </Detail>
                        {data.verses.map((ayah) => {
                            return <Card>
                                <CardHeader>
                                    <span></span>
                                    <WrappIcon>
                                        <Audio controls={true} src={ayah.audio.primary} />
                                    <Share />
                                    </WrappIcon>
                                </CardHeader>
                                <CardBody>
                                    <TextQuran>{ayah.text.arab}</TextQuran>
                                    <TextLatin>{ayah.text.transliteration.en}</TextLatin>
                                </CardBody>
                                <Ayat> <i>ayat {ayah.number.inSurah}</i></Ayat>
                            </Card>
                        })}
                    </>

            )}
        </WrappMain>
    )
}
export default DetailSurah
   