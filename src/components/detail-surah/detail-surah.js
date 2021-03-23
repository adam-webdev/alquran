import React, { useEffect, useState } from 'react'
import { Card, WrappMain } from '../../globalStyle'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { GiShare } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import NotFounds from "../img/nf.svg"


function DetailSurah(){
    const [data, setData] = useState()
    const [tafsir, setTafsir] = useState(false)
    const [terjemah, setTerjemah] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {id} = useParams();
   
    const handleTafsir = () => {
        console.log("ok")
        setTafsir(!tafsir);
    }
    const handleTerjemah = () => {
        console.log("ok")
        setTerjemah(!terjemah);
    }
    async function fetchSurah() {
      setLoading(true);
      try {
        const res = await fetch(`https://api.quran.sutanlab.id/surah/${id}`);
        const json = await res.json();
        if (json.code === 200) {
        console.log("res => " + json)
            setData(json.data);
        } else {
        setError(true)
        }
      } catch (error) {
          setError(true)
      } finally {
        setLoading(false);
      }
    }

    useEffect(() => {
        fetchSurah();
    },[]);

    console.log("error => " + error)
    const Share = styled(GiShare)`
        width:24px;
        height:24px;
        cursor: pointer;
        color:#6a6a6a;
        padding:5px;
        &:hover{
            background:#e1f7e4;
            color:#31b052;
            border-radius:50%;
            transition:.4s;
        }
    `
    
  
    const IconMenu = styled(MdFavoriteBorder)`
        width:24px;
        height:24px;
        cursor: pointer;
        color:#6a6a6a;
        padding:4px;
        margin-bottom:8px;
        &:hover{
            background:#e1f7e4;
            color:#31b052;
            border-radius:50%;
            transition:.4s;
        }
    `   
    const Tafsir = styled(AiFillEye)`
        width:20px;
        height:20px;
        cursor: pointer;
        color:#6a6a6a;
        padding:5px;
        &:hover{
            background:#e1f7e4;
            color:#31b052;
            border-radius:50%;
            transition:.4s;
        }
    `
    
    const CardHeader = styled('div')`
        display:flex;
        justify-content:space-between;
        align-items:center;
       
    `
    const Div = styled(CardHeader)`
        padding: 0 10px;
    `
    const CardBody = styled(CardHeader)`
        margin-top:50px;
        margin-bottom:50px;
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
    `
    const TextLatin = styled('h3')`
        font-size:1rem;
        padding:12px 10px;
        font-weight:normal;
        color:${props => props.color ? '#31b052' : '#6a6a6a'};
    `
    const Detail = styled('div')`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    `
    const Audio = styled('audio')`
        width:240px;
        height:34px;
        margin-right:10px;
      
    `
    const WrappIcon = styled('div')`
        position:relative;
    `
    const A = styled('a')`
        font-size:14px;
        text-decoration:none;
        align-items:center;
        display:flex;

    `
    const NotFound = styled('img')`
        width:50%;
        margin: 70px auto;

    `
    const Terjemah = styled('h4')`
        display:flex;
        font-weight:normal;
        align-items:end;
        font-size:14px;
        background:#e1f7e4;
        color:#31b052;
        padding:0 12px;
        border-radius:10px;
        cursor: pointer;
    `
    if(error){
    return (
        <WrappMain>
            <NotFound src={NotFounds} />
            <TextLatin>Mohon Maaf Data tidak ditemukan.</TextLatin>
        </WrappMain>
        )
    }
    return(
        <WrappMain>
          
            {loading ? (<p>Memuat data...</p>): 
                ( <>
                    <Detail>
                        <h2>{data.name.short}</h2>
                        <h4>{data.name.transliteration.id}</h4>
                        <h5> ( {data.name.translation.id} )</h5>
                        <p>{data.revelation.id}</p>
                        <i>{data.numberOfVerses} ayat</i>
                        <TextLatin>{data.tafsir.id}</TextLatin>
                    </Detail>
                    {data.verses.map((ayah,index) => {
                    return <Card key={index}>
                                <CardHeader>
                                        <IconMenu />
                                        <WrappIcon>
                                        <Audio controls={true} src={ayah.audio.primary} />
                                        <Share />
                                    </WrappIcon>
                                </CardHeader>
                                <CardBody>
                                    <TextQuran>{ayah.text.arab}</TextQuran>
                                    <TextLatin>{ayah.text.transliteration.en}</TextLatin>
                                    <TextLatin>{ terjemah ? `Terjemah : ` 
                                        +  ayah.translation.id  : ''   }</TextLatin> 
                                </CardBody>
                                <Div>
                                    <A><p>Tafsir</p> <Tafsir onClick={handleTafsir} /></A>
                                    <Terjemah onClick={handleTerjemah}>lihat terjemah </Terjemah>
                                    <Ayat> <i>ayat {ayah.number.inSurah}</i></Ayat>
                                </Div>
                                <TextLatin>{tafsir ? ayah.tafsir.id.long : ''}</TextLatin>
                            </Card>
                    })}
                    </>
                )
            }
        </WrappMain>
    )
}
export default DetailSurah
   