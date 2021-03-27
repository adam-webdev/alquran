import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { WrappMain,Card, TextQuran, SharedIcon, Share } from '../../globalStyle'
import {FacebookIcon,WhatsappIcon,TwitterIcon,TelegramIcon, FacebookShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton} from "react-share"

function DetailHadist(){
    const [hadist, setHadist] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [start, setStart] = useState(1)
    const [number, setNumber] = useState()
    const [end, setEnd] = useState(50)
    const [share, setShare] = useState(false)
    const {books} = useParams()

    const handleShare = () => {
        console.log("ok")
        setShare(!share);
    }

    const handleStart = (e) => {
        const TotalHadist = hadist.available
        if(e.target.value < 1 || e.target.value > handleEnd() || e.target.value > TotalHadist ){
            return alert("Oops Minimal 1 - 300 ")
        }
        setStart(e.target.value)
    }

    const handleEnd = (e) => {
        if(e.target.value <= 1 || e.target.value > 300){
            return alert("Maximal 300")
        }
        setEnd(e.target.value)
    }

    const handleNumber = (e) => {
        if(e.target.value <= 1 || e.target.value > hadist.available){
            return alert("Minimal 1 dan maksimal " + hadist.available)
        }
        setNumber(e.target.value)
    }

    const handleClickRight = () => {
        const modulus = hadist.available % 50
        const hasil = hadist.available - modulus
        if(end < hasil ){
            setStart(start + 50)
            setEnd(end + 50)
        }else if(end == hasil){
            setStart(start + 50)
            setEnd(end + modulus)
        }
    }
    
    const handleClickLeft = () => {
        const modulus = hadist.available % 50
        const hasil = hadist.available - modulus
        if(end == hadist.available){
            setStart(start-50)
            setEnd(end - modulus)
        } else if(end > 50){
            setStart(start-50)
            setEnd(end-50)
        }
    }

    console.log("START NUMBER " + start)
    console.log("END NUMBER " + end)
    async function getHadist() {
        setLoading(true)
        try{
        const result = await fetch(`https://api.hadith.sutanlab.id/books/${books}?range=${start}-${end}`)
        const json = await result.json()
        console.log("JSON :" + json)
            if(json.code !== 200){
                setError(true)
            } else {
                setHadist(json.data)
            }
        } catch(error){
            setError(true)
        } finally{
            setLoading(false)
        }
    }

    async function getHadistByNumber() {
        setLoading(true)
        try{
        const result = await fetch(`https://api.hadith.sutanlab.id/books/muslim/${number}`)
        const json = await result.json()
        console.log("JSON :" + json)
            if(json.code !== 200){
                setError(true)
            } else {
                setHadist(json.data)
            }
        } catch(error){
            setError(true)
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getHadist()
    },[])
    useEffect(() => {
        getHadistByNumber()
    },[])
    
    const Header = styled('div')`
        width:100%;
        padding:10px;
        display:flex;
        justify-content:space-between;
        position:relative;
        margin-top:-22px;
        background:#fff;
        border-radius:4px;
        box-sizing:border-box;
    `
    const Footer = styled(Header)`
        margin-top:485px;
        position:fixed;
        width:450px;
        box-shadow: 0 0 4px 1px rgba(0,0,0,0.4);
        background:#f9f9f9;
        @media (max-width:900px){
            width:375px;
        }
    `
    const NameHadist = styled('p')`
        text-align: center;
        font-size:14px;
        margin-top:10px;
        margin-bottom:10px;
        color:#999;
    `
    const DivShareIcon = styled('div')`
        display:flex;
        align-items:start;
        justify-content:space-between;
    `
    const InputNumber = styled('input').attrs({
        type:"number"
    })`
        outline:none;
        width:14%;
        position: absolute;
        padding:4px 8px 4px 8px;
        border-radius:4px;
        border:1px solid #d1d1d1;
        font-size:14px;
    `
    const Title = styled('p')`
        font-size:12px;
        color:#d1d1d1;
        font-weight:normal;
    `
    const DivRange = styled(DivShareIcon)`
        flex-direction:column;
    `
    const ArrowRight = styled(FaArrowRight)`
    width:20px;
    height:20px;
    cursor: pointer;
    color:#31b052;
    padding:5px;
    &:hover{
        background:#d1d1d1;
        color:#31b052;
        border-radius:50%;
        transition:.4s;
    }`
    const ArrowLeft = styled(FaArrowLeft)`
    width:20px;
    height:20px;
    cursor: pointer;
    color:#31b052;
    padding:5px;
    &:hover{
        background:#d1d1d1;
        color:#31b052;
        border-radius:50%;
        transition:.4s;
    }
    `


    return(
        <WrappMain>
            <Header>
                <div>
                    <Title>cari nomor hadist</Title>
                    <InputNumber min="1" />
                </div>
                <div>
                    <span> L </span>
                    <span> R </span>
                </div>
                    <DivRange>
                        <Title>cari range nomor maksimal 300 </Title>
                        <DivShareIcon>
                            <InputNumber min="1" />
                            <span>-</span>
                            <InputNumber min="1" />
                        </DivShareIcon>
                    </DivRange>
            </Header>
                {  loading ? ( <p>data...</p> ):
                    (
                        hadist && hadist.hadiths.map((hadith,index) => (
                            <>
                        <Card  key={index}>
                            <DivShareIcon>
                                <span></span>
                                <span></span>
                                <Share onClick={handleShare}  />
                            </DivShareIcon>
                            { share ? (
                                <SharedIcon left="390px" bottom="35px">
                                    <FacebookShareButton 
                                    quote="."
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
                            ): ''}
                            <TextQuran>{hadith.arab}</TextQuran>
                            <p>{hadith.id}</p>
                            <NameHadist><i> {hadist.name} Nomor {hadith.number}</i></NameHadist>
                        </Card>
                        </>
                        ))
                        )
                    }
                    <Footer>
                        <ArrowLeft disable={end == 50} onClick={handleClickLeft}/>
                        <p>{end} - {hadist && hadist.available} hadist</p>
                        <ArrowRight onClick={handleClickRight}/>
                    </Footer>
        </WrappMain>
    )
}
export default DetailHadist