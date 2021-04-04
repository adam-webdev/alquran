import React, { useEffect, useState } from 'react'
import { useParams,useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { FaArrowRight } from "react-icons/fa";
import { WrappMain,Card, TextQuran, SharedIcon, Share, WrappHeader } from '../../globalStyle'
import {FacebookIcon,WhatsappIcon,TwitterIcon,TelegramIcon, FacebookShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton} from "react-share"
import ArrowLeft from '../../partials/button-back';

const Header = styled('div')`
        width:100%;
        padding:10px;
        display:flex;
        position:relative;
        margin-top:-22px;
        background:#f9f9f9;
        border-radius:4px;
        box-sizing:border-box;
    `
    const Footer = styled(Header)`
        margin-top:501px;
        position:fixed;
        justify-content:space-between;
        width:450px;
        align-items:center;
        box-shadow: 0 0 4px 1px rgba(0,0,0,0.2);
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
    // const InputNumber = styled('input').attrs({
    //     type:"number"
    // })`
    //     outline:none;
    //     width:10%;
    //     position: relative;
    //     padding:4px 8px 4px 8px;
    //     border-radius:4px;
    //     border:1px solid #d1d1d1;
    //     font-size:14px;
    // `
    const Title = styled('p')`
        font-size:14px;
        color:${props => props ? props.color : '#d1d1d1'};
        font-weight:normal;
    `
   
    const ArrowRight = styled(FaArrowRight)`
    width:18px;
    height:18px;
    cursor: pointer;
    color:#31b052;
    padding:5px;
    &:hover{
        background:#e1f7e4;
        color:#31b052;
        border-radius:50%;
        transition:.4s;
    }`

function DetailHadist(){
    const [hadist, setHadist] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [start, setStart] = useState(1)
    // const [number, setNumber] = useState()
    const [end, setEnd] = useState(50)
    const [share, setShare] = useState(false)
    const {books} = useParams()

    const handleShare = () => {
        setShare(!share);
    }
    const history = useHistory()
    const handleBack = () => {
        history.push('/hadist')
    }
   

    const handleClickRight = () => {
        const modulus = hadist.available % 50
        const hasil = hadist.available - modulus
        if(end < hasil ){
            setStart(start + 50)
            setEnd(end + 50)
        }else if(end === hasil){
            setStart(start + 50)
            setEnd(end + modulus)
        }
    }
    
    const handleClickLeft = () => {
        const modulus = hadist.available % 50
        // const hasil = hadist.available - modulus
        if(end === hadist.available){
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
    useEffect(() => {
        getHadist()
    },[start,end])

    
    if(error){
        return (<p>mohon maaf terjadi kesalahan</p>)
    } 
    return(
        <>
         <WrappHeader bg="#f8f8f8">
            <ArrowLeft onClick={handleBack} />
            <p>{hadist && hadist.name}</p>
        </WrappHeader>
        <WrappMain>
            
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
                        {console.log(end+ "END======")}
                        <ArrowLeft onClick={handleClickLeft}  />
                       
                        <Title>{end} - {hadist && hadist.available} hadist</Title>
                        <ArrowRight  onClick={handleClickRight}/>
                    </Footer>
     
        </WrappMain>
        </>
    )
}
export default DetailHadist