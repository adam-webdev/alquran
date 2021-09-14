import React, { useEffect, useState } from 'react'
import { Card, Flex, Share, SharedIcon, TextQuran, WrappHeader, WrappMain } from '../../globalStyle'
import { useParams,useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillEye } from "react-icons/ai";
import NotFounds from "../img/nf.svg"
import {Title} from '../surah/daftar-surah'
import {FacebookIcon,WhatsappIcon,TwitterIcon,TelegramIcon, FacebookShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton} from "react-share"
import ArrowLeft from '../../partials/button-back';
import Skeleton from '../../partials/skeleton';
import { Select } from '../surah/daftar-surah';
import {  TextArrow } from '../detail-hadist/detail-hadist';


    const Tafsir = styled(AiFillEye)`
        width:30px;
        height:30px;
        cursor: pointer;
        padding:5px;
        color:#31b052;
        &:hover{
            background:#e1f7e4;
            border-radius:50%;
            transition:.4s;
        }
        @media(max-width:768px){
            width:28px;
            height:28px;
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
 
    const Ayat = styled('p')`
        color:#31b052;
        text-align:center;
        @media(max-width:768px){
            font-size:12px;
        }
    `
    const TextLatin = styled('h3')`
        font-size:1rem;
        padding:12px 10px;
        font-weight:${props => props.font ? props.font : 'normal'};
        text-indent:${props => props.indent ? '50px' : '0'};
        color:${props => props.color ? props.color : '#6a6a6a'};
    `
    const Detail = styled('div')`
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin-top:60px;
        margin-bottom:20px;
        align-items:center;
    `
    const Audio = styled('audio')`
        width:240px;
        height:34px;
        outline:none;
        margin-right:10px;
      
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
    const TextTafsir = styled('p')`
        font-size:14px;
        color:#888;
    `
    const Terjemah = styled('h4')`
        display:flex;
        font-weight:normal;
        align-items:center;
        font-size:14px;
        background:#31b052;
        color:#fff;
        border-radius:4px;
        height:22px;
        padding:0 12px;
        cursor: pointer;
        &:hover{
            background:transparent;
            color:#31b052;
            border:1px solid #d1d1d1;
            transition:.5s;
        }
        @media(max-width:768px){
            font-size:12px;
            padding: 1px 10px;
        }
    `
  
function DetailSurah(){
    const [data, setData] = useState()
    const [tafsir, setTafsir] = useState(false)
    const [terjemah, setTerjemah] = useState(false)
    const [share, setShare] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {id} = useParams();
    // const [ByAyah, setByAyah] = useState()
    const [ayah, setAyah] = useState(1)
   
    const history = useHistory()
    const handleBack = () => {
        history.push('/daftar-surah')
    }

    const handleTafsir = () => {
        setTafsir(!tafsir);
    }
    const handleShare = () => {
        setShare(!share);
    }
    const handleTerjemah = () => {
        setTerjemah(!terjemah);
    }
    useEffect(() => {

        async function fetchSurah() {
            try {
            const res = await fetch(`https://api.quran.sutanlab.id/surah/${id}`);
            const json = await res.json();
            if (json.code === 200) {
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

        fetchSurah();
    },[id]);

    const handleChangeAyah = (e) => {
        setAyah(e.target.value)
    }
  
    console.log("ayah => " + ayah)
  
    if(error){
    return (
        <WrappMain>
            <NotFound src={NotFounds} />
            <TextLatin>Mohon Maaf Data tidak ditemukan.</TextLatin>
        </WrappMain>
        )
    }
   
    return(
        <>
        <WrappHeader bg="#31b052" color="#fff">
            <Flex>
                <ArrowLeft onClick={handleBack} />
                <TextArrow color="fff">Kembali</TextArrow>
            </Flex>
            <Title>{data && data.name.transliteration.id}</Title>
            <a href={'#' + ayah}>
                <Select width="80px" value={ayah} onChange={(e) => handleChangeAyah(e)} >
                { 
                     data && data.verses.map((ayah,index)=>{
                        return (
                        <option key={index} value={ayah.number.inSurah}>ayat {ayah.number.inSurah}</option>
                     )})
                }
                </Select>
            </a>
        </WrappHeader>
        <WrappMain>
          
            {loading ? ( <Skeleton width={"100%"} height={"300px"} amount={2} />) : 
                ( <>
                    <Detail>
                        <TextQuran>{data.name.short}</TextQuran>
                        <h4>{data.name.transliteration.id}</h4>
                        <h5> ( {data.name.translation.id} )</h5>
                        <p>{data.revelation.id}</p>
                        <i>{data.numberOfVerses} ayat</i>
                        <TextLatin indent>{data.tafsir.id}</TextLatin>
                    </Detail>
                    {data.verses.map((ayah,index) => {
                    return <Card key={index} id={ayah.number.inSurah} >
                                <CardHeader>
                                        {/* <IconMenu /> */}
                                        <Share  onClick={handleShare} />
                                        <Audio controls={true} src={ayah.audio.primary} />
                                        {share ? (
                                            <SharedIcon top="180px"> 
                                            <FacebookShareButton 
                                            quote={data.name.transliteration.id+ayah.text.arab+ayah.translation.id} 
                                            onClick={handleShare} url="http://localhost:3000">
                                                <FacebookIcon size={24} round={true}/> 
                                            </FacebookShareButton>
                                            <WhatsappShareButton url="http://localhost:3000/detail-surah/2" onClick={handleShare}>
                                                <WhatsappIcon size={24} round={true}/>
                                            </WhatsappShareButton>
                                            <TwitterShareButton onClick={handleShare}>
                                                <TwitterIcon size={24} round={true}/>
                                            </TwitterShareButton>
                                            <TelegramShareButton onClick={handleShare}>
                                                <TelegramIcon size={24} round={true}/>
                                            </TelegramShareButton>
                                        </SharedIcon>
                                        ) : ''}
                                    

                                </CardHeader>
                                <CardBody>
                                    <TextQuran>{ayah.text.arab}</TextQuran>
                                    <TextLatin color="#999" font="bold"> {ayah.text.transliteration.en}</TextLatin>
                                    <TextLatin >{ terjemah ? ayah.translation.id  : ''   }</TextLatin> 
                                </CardBody>
                                <Div>
                                    <A><TextTafsir>Tafsir</TextTafsir> <Tafsir onClick={handleTafsir} /></A>
                                    <Terjemah onClick={handleTerjemah}>Terjemah </Terjemah>
                                    <Ayat> Q.S : {data.name.transliteration.id} ayat {ayah.number.inSurah}</Ayat>
                                </Div>
                                <TextLatin>{tafsir ? ayah.tafsir.id.long : ''}</TextLatin>
                            </Card>
                    })}
                    </>
                )
            }
        </WrappMain>
        </>
    )
}
export default DetailSurah
   