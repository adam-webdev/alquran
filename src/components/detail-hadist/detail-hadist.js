import React, { useEffect, useState } from 'react'
import { useParams,useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { FaArrowRight } from "react-icons/fa";
import { WrappMain,Card, TextQuran, SharedIcon, Share, WrappHeader, Flex } from '../../globalStyle'
import {FacebookIcon,WhatsappIcon,TwitterIcon,TelegramIcon, FacebookShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton} from "react-share"
import ArrowLeft from '../../partials/button-back';
import { Select } from '../surah/daftar-surah';
import Skeleton from '../../partials/skeleton';

const Header = styled('div')`
        width:100%;
        padding:10px;
        display:flex;
        position:relative;
        background:#f9f9f9;
    `
    const Footer = styled(Header)`
        position:fixed;
        /* margin-top:550px; */
        bottom:0;
        justify-content:space-between;
        width:100%;
        height:50px;
        padding-left:30px;
        padding-right:30px;
        align-items:center;
        box-shadow: 0 0 4px 1px rgba(0,0,0,0.2);
        background:#f9f9f9;
        @media(max-width:768px){
            padding-left:10px;
            padding-right:10px;
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
        font-size:16px;
        color:${props => props.color ? props.color : '#000'};
        font-weight:${props => props.weight? props.weight : 'bold'};
    `
   
    const ArrowRight = styled(FaArrowRight)`
    width:30px;
    height:30px;
    cursor: pointer;
    color:#fff;
    background:#31b052;
    padding:8px;
    border-radius:50%;
    margin-left:8px;
    &:hover{
        background:#e1f7e4;
        color:#31b052;
        transition:.4s;
    }`

    export const Text = styled('p')`
        color:${props => props.color ? props.color :'#000'};
        font-weight:600;
        margin-left:8px;
        font-size:16px;
        @media(max-width:768px){
            font-size:16px;
            font-weight:500;
            margin-left:0;

        }
    `
    export const TextArrow = styled('p')`
        font-size:14px;
        margin-left:8px;
        @media(max-width:768px){
            display:none;
        }
    `
    const WrappInput = styled('div')`
        display:flex;
        position:relative;
        width:200px;
        align-items:center;
        border-radius:2px;
        background:#fff;
        justify-content:center;
        border:1px solid #fff;
        margin-left:10px;
        @media(max-width:768px){
            display:none;
        }
    `
    const Input = styled('input')`
        width:150px;
        height:30px;
        position:relative;
        outline:none;
        padding:10px;
        border-radius:2px;
        border:none;
        font-size:14px;
        margin-right:4px;
        /* &:focus{
            border:1px solid #000;
        } */
    `
    const Button = styled('button')`
        width:50px;
        height:26px;
        margin-top:2px;
        cursor:pointer;
        outline:none;
        border:none;
        border-radius:2px;
        margin-right:4px;
        background:#31b057;
        color:#fff;
        padding:4px 6px;
    `
    const Form = styled('form')`
        display:flex;
        width:200px;
    `
function DetailHadist(){
    const [hadist, setHadist] = useState()
    const [dataNomorHadist, setDataNomorHadist] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [start, setStart] = useState(1)
    const [number, setNumber] = useState()
    const [nomorHadist, setNomorHadist] = useState()
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
   
    const handlechange = (e) => {
        setNumber(e.target.value)
    }
    const handlechangeNomorHadist = (e) => {
        setNomorHadist(e.target.value)
    }
    

    async function getNomorHadist() {
        try{
        const result = await fetch(`https://api.hadith.sutanlab.id/booksZ/${books}/${nomorHadist}`)
        const json = await result.json()
        console.log("JSON :" + json)
            if(json.code !== 200){
                setError(false)
            } else {
                setDataNomorHadist(json.data)
            }
        } catch(error){
            setError(false)
        } finally{
            setLoading(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getNomorHadist()
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
    useEffect(() => {

    async function getHadist() {
        try{
        const result = await fetch(`https://api.hadith.sutanlab.id/books/${books}?range=${start}-${end}`)
        const json = await result.json()
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

        getHadist()
       
    },[start,end,books])

   
   
    if(error){
        return (<p>mohon maaf terjadi kesalahan</p>)
    } 
    // if( nomorHadist > 1){
    return(
        //Header 
        <>
            <WrappHeader>
                    <Flex>
                        <ArrowLeft onClick={handleBack} />
                        <TextArrow color="#fff">Kembali</TextArrow>
                    </Flex>
                    <Title color="#fff">{hadist && hadist.name}</Title>
                    <Flex>
                    
                    <a href={"#" + number}>
                    <Select  value={number ? number : 1} onChange={(e) => handlechange(e)} width="100px">
                        {
                            hadist && hadist.hadiths.map((hadith,index) =>{
                                return <option key={index} value={hadith.number}>Nomor {hadith.number}</option> 
                            })
                        }
                    </Select>
                    </a>
                    <WrappInput>
                        <Form onSubmit={handleSubmit}>
                            <Input value={ nomorHadist || ''} onChange={(e) => handlechangeNomorHadist(e)} type="number" placeholder="cari nomor hadist" min="1" max={hadist&&hadist.available} />
                            <Button value="submit" type="submit">cari</Button>
                        </Form>
                        <span></span>
                    </WrappInput>
                </Flex>
            </WrappHeader> 
            <WrappMain>
            { nomorHadist > 1 ? (
                dataNomorHadist &&
                <Card m_top="30px" >
                    <DivShareIcon>
                        <Share onClick={handleShare}  />
                        <span></span>
                        <span></span>
                    </DivShareIcon>
                    { share ? (
                    //Icon share
                        <SharedIcon left="390px" top="35px">
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
                    <TextQuran>{dataNomorHadist.contents.arab}</TextQuran>
                    <Text>{dataNomorHadist.contents.id}</Text>
                    <NameHadist><i> {dataNomorHadist.name} Nomor {dataNomorHadist.contents.number}</i></NameHadist>
                </Card>
                ):( 
                    loading ? ( <Skeleton width="100%" height="300px" amount={2}/>): 
                    ( 
                        hadist && hadist.hadiths.map((hadith,index) => {
                        return <>
                            <Card m_top="30px" key={index} id={hadith.number}>
                                <DivShareIcon>
                                    <Share onClick={handleShare}  />
                                    <span></span>
                                    <span></span>
                                </DivShareIcon>
                                { share ? (
                                    <SharedIcon left="390px" top="35px">
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
                                <Text>{hadith.id}</Text>
                                <NameHadist><i> {hadist.name} Nomor {hadith.number}</i></NameHadist>
                            </Card>
                            </>
                        })

                    )
                )
                
            }
                {
                nomorHadist  ? ('') : 
                    (<Footer>
                        <Flex>
                            {
                                start === 1 ? (''):(
                                <>
                                    <ArrowLeft onClick={handleClickLeft}  />
                                    <TextArrow>Sebelumnya</TextArrow>
                                </>
                                )
                            }
                        </Flex>
                        <Title weight="normal">{end} - {hadist && hadist.available} hadist</Title>
                        <Flex>
                            {   hadist&&
                                end === hadist.available ? (<div></div>):(
                                <>
                                    <TextArrow>Selanjutnya</TextArrow>
                                    <ArrowRight  onClick={handleClickRight}/>
                                </>
                                )
                            }
                           
                        </Flex>
                    </Footer>)
                }   
            </WrappMain>
        </>
    )
}
export default DetailHadist